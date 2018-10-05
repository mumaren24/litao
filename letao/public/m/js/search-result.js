//var keyword = getParamsByUrl(location.href, 'keyword');
var keyword = getParamsByUrl(location.href,"name");//获取地址栏上面的对应的keyword值
    // console.log(keyword);
var page = 1;
var html = '';
var priceSort=1;
var This='';
$(function(){
      //获取地址栏上面的对应的keyword值
  

     mui.init({
        pullRefresh : {
          container:'#refreshContainer',//待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
          up : {
            height:50,//可选.默认50.触发上拉加载拖动距离
            auto:true,//可选,默认false.自动上拉加载一次
            contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
            contentnomore:'亲没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
            callback :getData //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
          }
        }
      });

    //    点击价格发送ajax到后台
    $("#priceSort").on("tap",function(){

        priceSort=priceSort==1?2:1;
        page = 1;

        html = '';
        mui('#refreshContainer').pullRefresh().refresh(true);
        getData();
    })

   // 根据关键字发送ajax到后台 获取搜索数据显示到页面
     
 
})
    function getParamsByUrl(url,name){
            var index=url.indexOf("?")+1;
            var params=url.substr(index);
           // console.log(params); 
           var arr=params.split("$");
           for(var i=0;i<arr.length;i++) {
               var current=arr[i].split("=");
               if(current[0]=name){
                   return current[1];
               }
           } 
           return null;
    }

    function getData(){
           //  var This=this;
           if(!This){
               This=this;
           }
        $.ajax({
            type:"get",
            url:"/product/queryProduct",
            data:{
                "page":page++,
                "pageSize":3,
               "proName":keyword,
               "price" :priceSort,
            },
            success:function(response){
                console.log(response);
                if(response.data.length>0){
                    html+=template('searchTpl',response);
                    $('#search-box').html(html);
                    //隐藏那个正在加载那个效果 false隐藏 true 代表现实 没有更多的数据了
                    This.endPullupToRefresh(false);
                }else{
                    This.endPullupToRefresh(true);
                }
                   
               

               
            }
  
        })

    }
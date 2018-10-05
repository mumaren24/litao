$(function(){
        var page=1;
        var pageSize=10;
        var totalPage=0;
        getData();
    //点击下一页
    $("#next").on("click",function(){
       page++;
       if(page>totalPage){
        page=totalPage;
        mui.alert("最后一页");
        return;
       }
       getData();
    });
   //上一页
   $("#prev").on("click",function(){
       page--;
       if(page<1){
           page=1;
           mui.alert("第一页");
           return;
       }
       getData();
   })
    function getData(){

        $.ajax({
            type:"get",
            url:"/category/queryTopCategoryPaging",
            data:{
              "page":page,
              "pageSize":pageSize,
            },
            success:function(res){
               console.log(res);
               totalPage=Math.ceil(res.total/pageSize);
               var html=template("firstTpi",res);
               $("#first-box").html(html);
            }
        })
      
    };

    //点击保存按钮
    $("#save").on("click",function(){
        var firstCate=$("input[name=firstCate]").val();
        if(!firstCate){
            mui.alert("输入分类");
            return;
        };
        $.ajax({
            type:"post",
            url:"/category/addTopCategory",
            data:{
            "categoryName":firstCate,
            },
            success:function(res){
                if(res.success){
                    location.reload();
                }
            }
        })
    })
})
$(function(){
    var page=1;
    var pageSize=10;
    var totalPage=0;
    getData();
//点击下一页
$("#nextBtn").on("click",function(){
   page++;
   if(page>totalPage){
    page=totalPage;
    mui.alert("最后一页");
    return;
   }
   getData();
});
//上一页
$("#prevBtn").on("click",function(){
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
        url:"/category/querySecondCategoryPaging",
        data:{
          "page":page,
          "pageSize":pageSize,
        },
        success:function(res){
          // console.log(res);
           totalPage=Math.ceil(res.total/pageSize);
           var html=template("secondTpi",res);
           $("#second-box").html(html);
        }
    })
  
};

   $.ajax({
       type:"get",
       url:"/category/queryTopCategoryPaging",
       data:{
           "page":1,
           "pageSize":100,
       },
       success:function(res){
           var data=res.rows;
           var str="";
              for(var i=0;i<data.length;i++){
                  str+=`<option value="${data[i].id}">${data[i].categoryName}</option>`
              }
              $("#select-box").html(str);
       }
   })
       var url="";
    //上传文件 
    $("#fileUpload").fileupload({
        dataType:"json",
        done:function(e,data){
            url=data.result.picAddr//上传的图片的地址
            $("#pre").attr("src",data.result.picAddr);
        }
    })



//点击保存按钮
        $("#save").on("click",function(){
            var brandName=$("[name=brandName]").val();
            var categoryId=$("[name=categoryId]").val();

            if(!brandName){
                mui.alert("输入品牌名字");
                return;
            };
            $.ajax({
                type:"post",
                url:"/category/addSecondCategory",
                data:{
            
                "brandName":brandName,
                "categoryId":categoryId,
                "brandLogo":url,
                "hot":0,
                },
                success:function(res){
                    if(res.success){
                        location.reload();
                    }
                }
            })
        })
})
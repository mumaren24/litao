$(function(){

    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    
    //
    $.ajax({
        type:"get",
        url:"/category/queryTopCategory",
        success:function(response){
            console.log(response);
             var html=template("category-left-tpl",{"result":response.rows});
             $(".links").html(html);
             
               
             if(response.rows.length){
                 $(".links").find("a").eq(0).addClass("active");
                 var id=response.rows[0].id;
                  getSecondCategory(id);
             }
        }
    })
   
$(".links").on("click","a",function(){
   
    var id= $(this).attr("data-id");
    $(this).addClass("active").siblings().removeClass("active");
    getSecondCategory(id);
    //   $.ajax({
    //       type:"get",
    //       url:"/category/querySecondCategory",
    //       data:{"id":id},
    //       success:function(res){
    //          console.log(res);
    //         //  var html=template("category-left-tpl",{"result":response.rows});
    //          var html= template("category-second",res);
    //          $(".brand-list").html(html);
    //       }
    //   })
})





function getSecondCategory(id){
    $.ajax({
        type:"get",
        url:"/category/querySecondCategory",
        data:{"id":id},
        success:function(res){
           console.log(res);
          //  var html=template("category-left-tpl",{"result":response.rows});
           var html= template("category-second",res);
           $(".brand-list").html(html);
        }
    })
}





})
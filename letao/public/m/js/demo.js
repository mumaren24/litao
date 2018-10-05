$(function(){


    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });

      $.ajax({
        type:"get",
        url:"/category/queryTopCategory",
        success:function(result){
         console.log(result);
        //  var html=template("category-left-tpl",{"result":res.rows});
         var html=template("category-left-tpl",result);
         $(".links").html(html);
         if(result.rows.length){
             $(".links").find("a").eq(0).addClass("active");
             var id=result.rows[0].id;
             aa(id);
         }
        }
      })

      $(".links").on("click","a",function(){
           var id=$(this).attr("data-id");
           $(this).addClass("active").siblings().removeClass("active");
           aa(id);
      })

      function aa(id){
        $.ajax({
            type:"get",
            url:"/category/querySecondCategory",
            data:{"id":id},
            success:function(res){
               // console.log(res);
                var html=template("category-second",res);
                $(".brand-list").html(html);
            }
        })
      }
    
})
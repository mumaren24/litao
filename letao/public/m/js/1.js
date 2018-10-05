// $(function(){
//     mui('.mui-scroll-wrapper').scroll({
//         deceleration: 0.0005 
//     });
//      $.ajax({
//          type:"get",
//          url:"",
//          success:function(res){
//              console.log(res);
//              var html=template("aa",res);
//              $(".links").html(html);
//              if(res.rows.length){
//                  $(".links").find("a").eq(0).addClass("active");
//                  var id=res.rows[0].id;
//                  aa(id);
//              }
//          }
//      })
    
//     $.ajax({
//         type:"get",
//         url:"",
//         success:function(res){
//             console(res);
//             var html=template("aa",res);
//             $(".links").html(html);
//             if(res.rows.length){
//                 $(".links").find("a").eq(0).addClass("active");
//                 var id=res.rows[0].id;
//                 aa(id);
//             }
//         }
//     })

//      $(".links").on("click","a",function(){
//          var id=$(this).attr("data-id");
//        //  attr() 方法设置或返回被选元素的属性值。
//          $(this).addClass("active").siblings().removeCalss("active");
//          aa(id);
//      })
//      function aa(id){
//          $.ajax({
//              type:"get",
//              url:"/category/querySecondCategory",
//              data:{"id":id},
//              success:function(){
//                  console.log(res);
//                  var html=template("category-second",res);
//                  $(".brand-list").html(html);
//              }
//          })
//      }
//        function aa(id){
//         //    type:"get",
//         // //    url:"",
//         // //    data:{"id":id},
//         //    success:function(res){
//         //        console.log(res);
//         //        var html=template("category-second",res);
//         //        $(".brand-list").htmm(html);
//            }
//        }   
// })
$(function(){
    // var kuncunNum=0;
    // var id=getParamsByUrl(location.herf, "id");
    // $.ajax({
    //     type:"get",
    //     url:"/product/queryProductDetail",
    //     data:{
    //         "id":id,
    //     },
    //     success:function(res){
    //         console.log(res);
    //         kuncunNum=num;
    //         var html=template("productTpl",res);
    //         $("#product-box").html(html);
    //     }
    // })
    // $("#product-box").on("tap",".size span",function(){
    //     $(this).addClass("active").siblings("span").removeClass("active");
    // })
    // $("#product-box").on("tap","#reduce",function(){
    //     var num=$("#ipt").val();
    //     num--;
    //     if(num<1){
    //         num=1;
    //     }
    //     $("#ipt").val(num);
    // })
    // $("#product-box").on("tap","#increase",function(){
    //     var num=$("#ipt").val();
    //     num++;
    //     if(num>kuncunNum){
    //         num=kuncunNum;
    //     }
    //     $("#ipt").val(num);
    // })
    // var isEdit=location.search.split("=")[1];
    // if(isEdit==0){
    //     var html=template("editTpl",{});
    //     $("#editForm").html(html);
    // }else{
    //     if(localStorage.getItem("editAddress")){
    //         var addClass=JSON.parse(localStorage.getItem("editAddress");
    //         console.log(res);
    //     }
    // }
})
$(function(){
    //获取商品的id
    var kucunum=0;
    var size=null;
    var id= getParamsByUrl(location.href,"id");
    $.ajax({
        type:"get",
        url:"/product/queryProductDetail",
        data:{
            "id":id,
        },
        success:function(res){
            kucunum=res.num;
            console.log(res);
            var html = template("productTpl", res);

            $('#product-box').html(html);
            var gallery = mui('.mui-slider');
                gallery.slider({});
        }
    });
   //点击尺寸加颜色
    $("#product-box").on("tap",".size span",function(){
          $(this).addClass("active").siblings("span").removeClass("active");
           size=$(this).html();//尺寸
    });
    //dianji -
    $("#product-box").on("tap","#reducr",function(){
        var num=$("#ipt").val();
        num--;
        if(num<1){
            num=1;
        }
        $("#ipt").val(num);
    })
    //点击加
    $("#product-box").on("tap","#inrease",function(){
         var num=$("#ipt").val();
         num++;
         if(num>kucunum){
             num=kucunum;
         }
         $("#ipt").val(num);
    });
   //点击加入购物车按钮
    $("#product-box").on("tap","#addCart",function(){
         if(!size){
             mui.alert("请选择尺寸");
             return;
         }
         var nowNum=$("#ipt").val();//获取选中数量
         $.ajax({
             type:"post",
             url:"/cart/addCart",
             data:{
                 "productId":id,
                 "size":size,
                 "num":nowNum,
             },
             success:function(res){
              if(res.success){
                  mui.confirm("添加成功 你要去购物车吗",function(m){
                      if(m.index==1){
                          location.href="cart.html";
                      }
                  })
              }
             }
         })
    })
})
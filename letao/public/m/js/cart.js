$(function(){

  var carts=null;
  var size=0;
  $.ajax({
      type:"get",
      url:"/cart/queryCart",
      success:function(result){
          if(result.error&&result.error==400){
              localStorage.setItem("returnUrl", location.href);
              location.href = "login.html";

				return;
          }
          carts = result;

          console.log(result);

          $('#cartBox').html(template('cartTpl',{data:result}))
      }
  })



    /**
	 * 删除收货地址
	 * 1.给删除按钮添加点击事件
	 * 2.弹出一个删除确认框
	 * 3.如果用户点击确认 删除
	 * 4.调用删除收货地址的接口 完成删除功能
	 * 5.刷新当前页面
	 */

})
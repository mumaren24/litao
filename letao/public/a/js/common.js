 
  /**
 * 登录拦截
 */

$.ajax({
	url: '/employee/checkRootLogin',
	type: 'get',
	async: false,
	success: function(res){

		if(res.error && res.error == 400){

			location.href = "login.html";

		}
		
	}
});
  
$(function(){
    //点击退出 退出跳出到登录页面
   $(".login_out_bot").on("click",function(){
        if(mui.alert("确定要退出吗?")){
			$.ajax({
				type:"get",
				url:"/employee/employeeLogout",
				success:function(res){
					if(res.success){
					
						location.href="login.html";
					}else{
						alert(res.message);
					}
				}
			})
		}
   })
 
























	var navLi = $('.navs li')

	navLi.on('click',function(){

		$(this).find('ul').slideToggle();

	});

});
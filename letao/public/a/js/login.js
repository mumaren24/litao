$(function(){
    $('#login-button').on('click', function(){

		var username = $.trim($("[name='username']").val());
		var password = $.trim($("[name='password']").val());

		if(!username){
            mui.alert("请输入收货人姓名");
			return;
		}

		if(!password){
			mui.alert("请输入密码");
			return;
		}

		$.ajax({
			url: '/employee/employeeLogin',
			type: 'post',
			data: {
				username: username,
				password: password
			},
			success: function(res){

				if(res.success){

					// 登录成功
					location.href = "user.html";

				}else {

					mui.alert(res.message);

				}
				
			}
		});

	});
})
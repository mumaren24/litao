$(function(){
        $("#login-btn").on("tap",function(){
            var username=$("input[name=username]").val();
            var password=$("input[name=password]").val();
            if(!username){
                mui.alert("请输入用户名");
                return;
            };
            if(!password){
                mui.alert("请输入密码");
                return;
            };
         $.ajax({
             type:"post",
             url:"/user/login",
             data:{
               "username":username,
               "password":password,
             },
             beforeSend:function(){
                   $("#login-btn").text("正在登录....");
                   
             },
             success:function(res){
                if(res.success){
                    mui.toast("登录成功");
                    setTimeout(function(){
                        location.href="user.html";
                    },2000);
                }
             }
         })



        })



})
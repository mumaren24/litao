$(function(){
          //点击按钮获取验证码
          $("#getCode").on("tap",function(){
            if($('.vvv').hasClass('disabled')){
                return;
            }
              //发送ajax获取验证码 然后填写到页面
              $.ajax({
                   type:"get",
                   //一般这里 需要写的是电话号码去后台 这里假不写了
                   url:"/user/vCode",
                   success:function(res){
                     //  console.log(res);
                       $('.vvv').addClass('disabled');
                       var total = 60;
                       var timeID = setInterval(function(){
                           total--;
                           $('.vvv').text(total+'秒时候从新获取');
                           if(total<=0){
                               $('.vvv').text('获取验证码').removeClass('disabled');
                               clearInterval(timeID);
                           }
                       },1000);
                       console.log(res);
                   }
              })
          })
      
      


     
        $("#register-btn").on("tap",function(){
            var username=$("input[name=username]").val();
            var mobile=$("input[name=mobile]").val();
            var password=$("input[name=password]").val();
            var againPass=$("input[name=againPass]").val();
            var vCode=$("input[name=vCode]").val();
            console.log(username,mobile,password,againPass,vCode);
           //判断是符合各
              
        if(!username){
            mui.alert("请输入用户名");
            return;
        }
        var reg=/^1\d{10}$/;
        if(!reg.test(mobile)){
            mui.alert("请输入正确的手机号");
            return;
        }
        if(password!=againPass){
            mui.alert("两次密码不一样");
            return;
        }
        $.ajax({
              type:"post",
              url:"/user/register",
              data:{
                "username":username,
                "password":password,
                "mobile":mobile,
                "vCode":vCode,
              },
              success:function(res){
               // console.log(res);
                 if(res.success){
                     mui.alert("注册成功");
                    // location.href="login.html";
                     setTimeout(function(){
                         location.href="login.html";
                     },2000);
                 }
              }
        })











           //发送ajax到后台

        });








});
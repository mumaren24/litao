//修改密码页面
$(function(){
    $("#modify-btn").on("tap",function(){
        var originPass=$("input[name=originPass]").val();
        var newpass=$("input[name=newpass]").val();
        var confirmNewPass=$("input[name=confirmNewPass]").val();
        var vCode=$("input[name=vCode]").val();
        console.log(originPass,newpass,confirmNewPass,vCode);
       if(!originPass){
        //    mui.toast("请输入原密码");
        mui.alert("请输入原密码");
        return;
       };
       if(newpass!=confirmNewPass){
          mui.alert("两次密码不一样");
        return;
    };
     $.ajax({
         type:"post",
         url:"/user/updatePassword",
         data:{
          "oldPassword": originPass,
          "newPassword":newpass,
          "vCode": vCode,
         },
         success:function(res){
             console.log(res);
             if(res.success){
                 location.href="login.html";
             }
         }
     })

       
    });
      

      //    点击获取验证码按钮 获取认证码
    $("#getCode").on("tap",function(){
        if($('.vvv').hasClass('disabled')){
            return;
        }
        $.ajax({
            type:"get",
            url:"/user/vCodeForUpdatePassword",
            success:function(res){
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
                // 将认证码显示在控制台中
                console.log(res);
                // console.log(res.vCode);
            }
        })
        
    
    });

})
 var userInfo=null;
 
 $.ajax({
      type:"get",
      url:"/user/queryUserMessage",
      async:false,
      success:function(res){
          //console.log(res);
          if(res.error &&res.error==400){
            //   mui.toast("请先登录");
              location.href="login.html";
          }else{
              userInfo=res;
          }
      }
  })


$(function(){
    $("#logout").on("tap",function(){
        $.ajax({
            type:"get",
            url:"/user/logout",
            success:function(res){
                console.log(res);
                if(res.success){
                    mui.toast("退出成功");
                    setTimeout(function(){
                        location.href="index.html";
                    },2000);
                } 
            }
        })
    });

        var html=template("userTpl",userInfo);
        $("#userBox").html(html);
      
})
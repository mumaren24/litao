$(function(){
     //自己可以直接使用location.search
    var isEdit=location.search.split("=")[1];
    if(isEdit==0){
      var html= template("editTpl",{});
      $("#editFrom").html(html);
    }else{
      if(localStorage.getItem("editAddress")){
          var address=JSON.parse(localStorage.getItem("editAddress"));
          console.log(address);
          var html= template("editTpl",address);
          $("#editFrom").html(html);
      }
    }

    //3初始化弹出选择器
    var picker = new mui.PopPicker({layer: 3});
    picker.setData(cityData);
    $("#selectCity").on("tap",function(){//如果不放就事件委托给
        picker.show(function (items) {//items 形式参数 可以修改
          //  console.log(items);//数组选中有三个省市区
            //把省市区写进文本框里面
            $("#selectCity").val(items[0].text+items[1].text+items[2].text);
        })
    });

            $("#addAddress").on("tap",function(){
                var username=$.trim($("input[name=username]").val());
                var postcode=$.trim($("input[name=postcode]").val());
                var city=$.trim($("input[name=city]").val());
                var detail=$.trim($("input[name=detail]").val());
                console.log(username,postcode,city,detail);
                if(!username){
                    //    mui.toast("请输入原密码");
                    mui.alert("请输入收货人姓名");
                    return;
                   };
                   if(!postcode){
                      mui.alert("请输入邮编地址");
                    return;
                  };
                 var  data={
                    "recipients":username,
                    "postcode":postcode,
                    "address":city,
                    "addressDetail":detail,
                   };
                  if(isEdit==1){
                    url="/address/updateAddress";
                    data.id=address.id;
                    var msg="编辑地址成功";
                  }else{
                    url="/address/addAddress";
                    var msg="添加地址成功";
                  }

                //发送 
                $.ajax({
                    type:"post",
                    url:url,
                    data:data,
                    success:function(res){
                      //  console.log(res);
                        if(res.success){
                            mui.toast(msg);
                            setTimeout(function(){
                                location.href="address.html";
                            },2000);
                           
                        }
                    }
                })
            });

        
       
})
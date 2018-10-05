$(function(){
	var address=null;
    //发送sjax到后台获取地址到显示到
    $.ajax({
		url: '/address/queryAddress',
		type: 'get',
		success: function(res) {
			console.log(res);
        
			address = res;

			var html = template("addressTpl",{result:res});

			$('#address-box').html(html);
			
		}
	});
            
	/**
	 * 删除收货地址
	 * 1.给删除按钮添加点击事件
	 * 2.弹出一个删除确认框
	 * 3.如果用户点击确认 删除
	 * 4.调用删除收货地址的接口 完成删除功能
	 * 5.刷新当前页面
	 */
	//删除
     $("#address-box").on("tap",".delete-btn",function(){
		 var id=$(this).attr("data-id");
		//  var id=this.getAttribute("data-id");
		   var li = this.parentNode.parentNode;
		//    var li= $(this).parent();
		   mui.confirm("确认要删除吗?",function(message){
			   if(message.index==1){
				   $.ajax({
					   type:"post",
					   url:"/address/deleteAddress",
					   data:{"id":id},
					   success:function(res){
						   if(res.success){
							   // 重新加载当前页面或者自杀remove掉这个标签,或者从新发送ajax
							location.reload();
						//	$(li).remove();//自杀
						   }
					   }
				   });
			   }else{
				   // 取消删除
				// 关闭列表滑出效果也可以从新刷新页面
				mui.swipeoutClose(li);
			   }
		   }); 
	 });
 //编辑

 $('#address-box').on('tap', '.edit-btn', function(){

	// var id = this.getAttribute('data-id');
     var id=$(this).attr("data-id");
	for(var i=0;i<address.length;i++) {

		if(address[i].id == id) {

			localStorage.setItem('editAddress',JSON.stringify(address[i]));

			// 终止循环
			break;

		}

	}

	// 跳转到编辑页面
	 location.href = "addAddress.html?isEdit=1";

});










	 

});
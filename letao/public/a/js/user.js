$(function(){
    $.ajax({

        type:"get",
        url:"/user/queryUser",
        data:{
            "page":1,
            "pageSize":10,
        },
        success:function(res){
            console.log(res);
            var html=template("userTpl",res);
            $('tbody').html(html);
        }
    })

     //点击按钮启用禁止
     $("#user-box").on("click",".edit-btn",function(){
         var id=$(this).attr("data-id");
         var isDelete=$(this).attr("data-isdelete");
         console.log(isDelete);
         $.ajax({
             type:"post",
             url:"/user/updateUser",
             data:{
                "isDelete":isDelete==1?0:1,
                "id":id,
             },
             success:function(res){
                 if(res.success){
                     location.reload();
                 }
             }
         })
     })
})
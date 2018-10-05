
$(function(){
    $("body").on("tap","a",function(){
        mui.openWindow({
			url: $(this).attr('href')
		});
    });

})

function getParamsByUrl(url,name){
    var index=url.indexOf("?")+1;
    var params=url.substr(index);
   // console.log(params); 
   var arr=params.split("$");
   for(var i=0;i<arr.length;i++) {
       var current=arr[i].split("=");
       if(current[0]=name){
           return current[1];
       }
   } 
   return null;
}
// $(function(){
//           var keyArr=[];
//           if(localStorage.getItem("abc")){
//               keyArr=JSON.parse(localStorage.getItem("abc"));
//               console.log(keyArr);
//               var html= template("historyTpl",{"result":keyArr});
//               $("#history-box").html(html);
//           }
//         $("#search-btn").on("click",function(){
//             //获取填写文本框的值
//           var keyword= $(this).siblings().val();
//             //alert(keyword);
//             if(keyword){//有值
//                 //跳转到search-result 页面
//                 keyArr.push(keyword);
//                // console.log(keyArr);
//                localStorage.setItem("abc", JSON.stringify(keyArr));
//                 // alert("开始");
//                 // location.href="search-result.html?keyword="+keyword;
//             }else{//没有值
//                 alert("请输入搜索商品");
//             }
//         })

//         $("#clearBtn").on("click",function(){
//             $("#history-box").html("");
//             localStorage.removeItem("abc");
//         })

// })

// $(function(){
//     var keyArr=[];
//     if(localStorage.getItem("abc")){
//         keyArr=JSON.parse(localStorage.getItem("abc"));
//         var html=template("historyTpl",{"result":keyArr});
//         console.log(keyArr);
//         $("#history-box").html(html);
//     }
//     $("#search-btn").on("click",function(){
//         var keyword=$(this).siblings().val();
//         if(keyword){
//             keyArr.push(keyword);
//             localStorage.setItem("abc",JSON.stringify(keyArr));
//         }else{
//             alert("lala");
//         }
//     })
//     $("#clearBtn").on("click",function(){
//         $("#history-box").html("");
//         localStorage.removeItem("abc");
//     })
// })


$(function(){
    var keyArr=[];//存 搜索过的 关键字
    // 先去浏览器 获取那些存的 关键字
    // console.log(localStorage.getItem("abc"))//长的很像数组的字符串
    if(localStorage.getItem("abc")){//如果有
        keyArr=JSON.parse(localStorage.getItem("abc"));//转化成数组
         console.log(keyArr);//把这些搜索过的数据 拼接html 显示到页面
        var html=template("historyTpl",{"result":keyArr});
        $("#history-box").html(html)

    }
    //search.html js 点击搜索按钮
    // 获取 填写的 文本框的值
    // 跳转到 search-result.html页面 显示出搜索的所有商品
    $("#search-btn").on("click",function(){
        // 获取 填写的 文本框的值
        var keyword=$(this).siblings().val();
        // alert(keyword)
        if(keyword){//有值
            // 搜索了 把他存到数组里面
            keyArr.push(keyword);
            // console.log(keyArr)
            // 存到 浏览器 下次 取出来 存 要存字符串 形式
            localStorage.setItem("abc",JSON.stringify(keyArr));
            // 跳转到 search-result页面
            mui.alert("开始跳转");
            location.href="search-result.html?keyword="+keyword
        }else{//没有值
            mui.alert('请输入搜索的商品')
        }
    })

    // 清空历史
    $("#clearBtn").on("click",function(){
        // 清空页面html
        $("#history-box").html('');
        // 清空存的数据
        localStorage.removeItem("abc");
        var keyArr=[];//清空数组
    })




})
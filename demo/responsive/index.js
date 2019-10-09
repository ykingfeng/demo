var more=document.getElementsByClassName("more")[0];
var list2=document.getElementsByClassName("list2")[0];
// var a=0;
// more.onclick=function () {

//     if(a==0) {
//         list2.style.display="flex";
//         a=1;
//     }
//     else {
//         list2.style.display="none";
//         a=0;
//     }
    
// 要是再加一个list3就可以用这个点击事件，但是加list3耗费性能
// }
more.onclick=function () {
    var a=document.getElementsByClassName("list2-active")[0];
    if( a ) {
        list2.classList.remove("list2-active")
    }
    else {
        list2.classList.add("list2-active");
    }
}
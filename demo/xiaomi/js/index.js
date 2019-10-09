var tabs=document.getElementById("tabs").getElementsByTagName("li");
console.log(tabs);
var lists=document.getElementById("lists").getElementsByTagName("ul");
console.log(lists);
for(i=0;i<tabs.length;i++){
    tabs[i].onclick=showlist;
}

function showlist(){
    for(i=0;i<tabs.length;i++){
        if(tabs[i]===this){
            tabs[i].className="active";
            lists[i].className="clearfix active";
        }
        else{
    tabs[i].className="";
    lists[i].className="clearfix";
            }
    }
}

/* for(i=0;i<lists.length;i++){
    lists[i].onclick=follow;
}
function follow(){
    for(i=0;i<lists.length;i++){
        if(lists[i]===this){
        
        list[i].className="clearfix active"; 
        }
        else{
           
            list[i].className="clearfix"; 
        }
    } 这种想法不对，因为实际上ul的切换时跟着上边导航栏的点击而同时切换的
} */
var seckillNAV=document.getElementById("seckillNAV");
var scrollTop=document.documentElement.scrollTop;
console.log(scrollTop);

window.onscroll=function(){
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset||0;
    //对于老版本的IE，则=document.body.scrollTop;
    //对于Mac，则=window.pageYOffset;
    //所以用||来解决，
    if(scrollTop>=260){
        seckillNAV.className="seckill-nav seckill-navfixed";
    }
    else{
        seckillNAV.className="seckill-nav";
    }
console.log(scrollTop);
}
/* var nowTime=new Date();
var endTime=new Date("2019/5/21  24:00");
var left=(endTime-nowTime)/1000; //实际上endtime-nowtime得到毫秒单位的时间，所以除以1000变成秒
console.log(left);
var d=Math.floor(left/60/60/24);
var h=Math.floor(left/60/60%24);  //var h=Math.floor(left/60/60);
var m=Math.floor(left/60%60);
var s=Math.floor(left%60);
var ds=d<10? "0"+d :""+d;
var hs=h<10? "0"+h :""+h;
var ms=m<10? "0"+m :""+m;
var ss=s<10? "0"+s :""+s; */
 
var timer=setInterval(function () {
var nowTime=new Date();
var endTime=new Date("2019/10/30  24:00");
var left=(endTime-nowTime)/1000; 
//console.log(left);
var d=Math.floor(left/60/60/24);
var h=Math.floor(left/60/60%24);  //var h=Math.floor(left/60/60);
var m=Math.floor(left/60%60);
var s=Math.floor(left%60);
var ds=d<10? "0"+d :""+d;
var hs=h<10? "0"+h :""+h;
var ms=m<10? "0"+m :""+m;
var ss=s<10? "0"+s :""+s;
//console.log(ds+"天:"+hs+"时:"+ms+"分:"+ss+"秒");
if (left < 0)
{
    document.getElementById ("clock").innerHTML = '0';
    return;
}
document.getElementById ("clock").innerHTML = ds + ":" + hs + ":" + ms + ":" + ss ;
}, 1000);
/* window.onload = {
  timer();
} */

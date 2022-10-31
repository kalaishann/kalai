const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");
function UpDate()
{
const currentYear =new Date().getFullYear();
const newYear= new Date(`janaury 1 ${currentYear + 1} 00:00:00`);//need space b/w expression and the timer {}space 00
const currentDate= new Date();
const diff = newYear-currentDate;//diff result in ms
const d=Math.floor(diff/1000/60/60/24);
const h=Math.floor((diff/1000/60/60)%24);
const m=Math.floor((diff/1000/60)%60);
const s=Math.floor((diff/1000)%60);
//console.log(diff/1000/60/60/24);

days.innerHTML=d<10?"0"+d:d;
hours.innerHTML=h<10?"0"+h:h;
minutes.innerHTML=m<10?"0"+m:m;
seconds.innerHTML=s<10?"0"+s:s;
}

setInterval(UpDate,1000);

/*
1000ms=1s
60s=1m
60m=1hr
24hr=1day
*/
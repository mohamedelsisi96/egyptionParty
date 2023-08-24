let daysCounter=document.querySelector("#day")
let houresCounter=document.querySelector("#houres")
let mintesCounter=document.querySelector("#minutes")
let secondesCounter=document.querySelector("#secondes")
let text=document.querySelector("#text")
let chars=document.querySelector("#chars")

// $(document).ready(function () {
//     $(".spinner").fadeOut(1000,function(){
//         $(".spin").slideUp(1000,function(){
//             $("body").css("overflow","auto")
//         });
      
//     });
// });

let navWidth = $(".navBar").innerWidth();
console.log(navWidth);
$("#close").click(function () {
   
    $("#tab").animate({left:-navWidth},1000)
})
$(".open").click(function () {
   if($("#tab").css("left")=="0px"){
    $("#tab").animate({left:-navWidth},1000)
  
   } else {
    $("#tab").animate({left:"0px"},1000)
   }
 
});

$(".master .head-color").click(function (e) {
    $(e.target).next().slideToggle(1000)
    $(e.target).siblings().next(".para").slideUp(1000)
})
function getTime(){
    let dateNow=Date.now()
    let dateEvent=new Date("2023-10-15")
    let res=(dateEvent.getTime()-dateNow)
    let secconds=res/1000
    let minutes=secconds/60
    let houres=minutes/60
    let day=houres/24
    let countDay=Math.floor(day)
    let countHoures=Math.floor((day-countDay)*24)
    let countMinutes=Math.floor((((day-countDay)*24)-countHoures)*60)
    let countSecondes=Math.floor((((((day-countDay)*24)-countHoures)*60)-countMinutes)*60)
    daysCounter.innerHTML=`- ${countDay} D`
    houresCounter.innerHTML=`${countHoures} H`
    mintesCounter.innerHTML=`${countMinutes} M`
    secondesCounter.innerHTML=`${countSecondes} S`
}
getTime()
setInterval(() => {
    getTime()
  
}, 1000);
text.addEventListener("keydown",function(){
    if(text.value.length<100){
    chars.innerHTML=`${100- text.value.length}`
    }else{
        chars.innerHTML=`your available character finished`
    }
})
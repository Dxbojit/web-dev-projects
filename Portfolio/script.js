let daynight=document.querySelector(".daynight");
let banner=document.querySelector(".banner");
daynight.addEventListener("click",()=>{
    banner.classList.toggle("night");
})
let effect=new Typed("#text",{
    strings:["Debojit Bhattacharjee ^1500","a Fitness enthusiast","a Coder","a Designer","A Software Developer"],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000,
})
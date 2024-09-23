//document.getElementById("counter").innerText=5
let count=0
let countel=document.getElementById("counter")
function increment() {
    count++;
    countel.innerText=count;
}
function save(){
    console.log(count)
}

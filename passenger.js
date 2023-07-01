//document.getElementById(count-el).innerHTML=5;
let countel=document.getElementById("count-el");
console.log(countel);
let count=0;
let prev=document.getElementById("prev");
function increment(){
    count+=1;
    countel.textContent=count;
}
function save(){
    console.log(count);
    let p=count+" - ";
    prev.textContent+=p;
    count=0;
    countel.textContent=count;
}
const buttons = document.querySelectorAll('button');
let points=0;
document.getElementById("guess").innerHTML=points;
let ans=Math.floor(Math.random() * (10 - 1)) + 1;
function check(){
let num=document.getElementById("num").value;


if (num==ans){
document.getElementById("test").innerHTML = "congrats:) now next level";
points=points+1;
document.getElementById("guess").innerHTML=points;
ans=Math.floor(Math.random() * (10 - 1)) + 1;
}
else{
if(num>ans){
document.getElementById("test").innerHTML = "guess smaller!";
}
else{
    document.getElementById("test").innerHTML = "guess larger!"; 
}
}
}
for (const button of buttons) {
  button.addEventListener('click', check);
}

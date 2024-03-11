function myFunction(){
    console.log("Welcome to Bangalore college");
    console.log("We are learning JS:");
}
myFunction();

function myfun(){
     
     let a=2;
     let b=12;
   
     console.log(a+b);
}
myfun();


function parFunction(msg){
    //parameter --> input
    console.log(msg);
}
parFunction("I love js"); //argument

function sum(x, y){
    console.log(x+y);
}
sum(1437,873);

function retsum(x,y){
    s=x+y;
    return s;
}

let val=sum(3,773);
console.log(val);


const arrowSum=(a,b)=>{
    console.log(a+b);
}

const arrowMul=(a,b)=>{
    console.log(a*b);
}
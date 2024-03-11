let btn1=document.querySelector("#btn1");
// btn1.onclick=()=>{
//     console.log("btn1 was clicked");
//     let a=25;
//     a++;
//     console.log(a);
// };

btn1.addEventListener("click",(evt)=>{
    console.log("button was click - handler1");
});


btn1.addEventListener("click",(evt)=>{
    console.log("button was click - handler2");
});


btn1.addEventListener("click",(evt)=>{
    console.log("button was click - handler3");
});


btn1.addEventListener("click",(evt)=>{
    console.log("button was click - handler4");
});

btn1.removeEventListener("click",() =>{
    console.log("button was clicked - handler3");
});
let modeBtn = document.querySelector("#bbbb");
let curMode="light";

modeBtn.addEventListener("click", ()=>{
    if(curMode==="light"){
        curMode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        curMode="light";
        document.querySelector("body").style.backgroundColor="green";
    }
    console.log(curMode);
}) 
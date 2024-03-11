let div = document.querySelector("div");
// div.style.backgroundColor="green";
// div.style.backgroundColor="purple";
// div.innerText="hello";
// div.style.fontSize="50px";

// div.style.visibility="hidden"
 
// console.log(console);

// let id=div.getAttribute("id");
// console.log(id);


// let name=div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newclass"));
// div.style.backgroundColor("green");


let newBtn = document.createElement("button");
newBtn.innerText="click me!"
console.log(newBtn);


div.append(newBtn);   // end inside
//div.prepend(newBtn); //starting inside

//div.before(newBtn); //before outside
//div.after(newBtn);// afte outside

let newHeading = document.createElement("h1");
newHeading.innerHTML="<i>Hi , i am new!</i>";
document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p");
para.remove();
const URL = "https://cat-fact.herokuapp.com/facts";
// const factPara = DocumentType
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");



const getFacts = async()=>{
    console.log("getting data .....");
    let response = await fetch(URL);
    console.log(response);
    let data =await response.json();
    // console.log(data[0].text);
    factPara.innerText = data[2].text;
};
btn.addEventListener("click", getFacts);


// let promise = fetch(URL);
// console.log(promise);
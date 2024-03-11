let arr=[1,2,4,5,5,6,7,8];
let evenArr=arr.filter((val)=>{
    return val%2!==0;
});
console.log(evenArr);

//largest number
let array1=[10, 8, 25, 95,105,204];
const output= array1.reduce((prev, curr)=>{
    return prev>curr? prev:curr;
});
console.log("Largest",output);


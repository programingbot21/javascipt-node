let myArray=[1,2,3,4,5,6,7,8,9,10];
for(let i=0; i<9; i+=2){
const temp = myArray[i];
myArray[i]=myArray[i+1];
myArray[i+1]=temp;
console.log(myArray);
console.log(myArray[i]);
}

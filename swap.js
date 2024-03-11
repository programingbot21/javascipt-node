const swapElements = (array, index1, index2) => {
    [myArray[index1], myArray[index2]] = [myArray[index2], myArray[index1]];
};

let myArray = [12, -2, 55, 68, 80];
swapElements(myArray, 0, 1);
console.log(myArray); // [-2,12,55,68,80]
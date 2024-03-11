let arr = [1, 2, 3, 4, 5, 6, 7, 8];
//change element
 arr.splice(2,2, 102, 103);
console.log(arr);
//add element
let add_arr = [1, 2, 3, 4, 5, 6, 7, 8];
add_arr.splice(2, 0, 99)
console.log(add_arr);


// delete element
let del_arr = [1, 2, 3, 4, 5, 6, 7, 8];
del_arr.splice(3,1);
console.log(del_arr);

// replace element
let rep_arr = [1, 2, 3, 4, 5, 6, 7, 8];
rep_arr.splice(3 , 1, 101);
console.log(rep_arr);

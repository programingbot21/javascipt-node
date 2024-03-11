//filter out of the marks of stuednt that scored 90+
let marks=[90,89,95,99,55, 30,91];
let topper=marks.filter((val )=>{
    return val>89;
});
console.log(topper);

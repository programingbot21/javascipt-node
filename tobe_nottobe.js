 //var expact = function(val)
//     let toBe = function(x){
//         if(x === val)
//         return true;
//     throw new Error("Not Equal");
// }
// let nottoBe = function(x){
//     if(x !== val) return true;
//     throw new Error("Equal");

// }
//  return(toBe, nottoBe);
// }

var expect = function(val) {
    return{
        toBe:(v) => (v === val) ? true : (() => {throw new Error(`Not Equal`)})(),
        notToBe:(v) =>(v !== val) ? true : (() =>{throw new Error(`Equal`)})()
    }
};

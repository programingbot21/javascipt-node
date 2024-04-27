var str = `Mohit is a very good person`;
var savstr = str.split(" ")
.map(function (word){
   return  word.split("").reverse().join("")
})
console.log(savstr.join(" "));
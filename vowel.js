function vowelCount(str) {
    const vowelRegex = /[aeiou]/gi; 
    const strMatches = str.match(vowelRegex);
 
    if (strMatches) {
        return strMatches.length;
    } else {
        return 0; 
    }
}
const string = "apnacollege";
const len = vowelCount(string);
console.log("Number of vowels:", len);



// function countVowel(str){
//     let count=0;
//     for(const char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u")
//         {
//             count++;
//         }
//     }

//     console.log(count);
//     const String="apna college";
//     const len=countVowel(String);
//     console.log(len);
// }



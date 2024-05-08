var maxSubArray = function(nums) {
    var prev = 0;
    var max = 0;
  
    for (var i = 0; i < nums.length; i++) {
      // Compare previous contiguous sum with current number
      prev = Math.max(prev + nums[i], nums[i]);
      // Check if the current prev is the greatest sum 
      max = Math.max(max, prev);
    }
    return max;
  };
  console.log(maxSubArray([5, 4, -1, 7, 8]));
  console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// var  maxSubArr = function(nums){
//     let max = news[0];
//     let sn = 0;

//     nums.forEach((n) => { 
//         sn += n
//         max = Math.max(mxa, sn)
//         if(sn < 0) sn = 0
        
//     })
//     return max;
// }
// console.log(maxSubArr([5, 4, -1, 7, 8]));
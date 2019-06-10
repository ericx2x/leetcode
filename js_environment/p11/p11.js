/**
 * @param {number[]} height
 * @return {number}
 5-29-2019
 1st attempt was brute forced.
 Runtime: 672 ms, faster than 28.57% of JavaScript online submissions for Container With Most Water.
 Memory Usage: 35.6 MB, less than 58.15% of JavaScript online submissions for Container With Most Water.
 */
//var maxArea = function(height) {
//    let maxArea = 0;
//    
//    for(let i = 0; i < height.length; i++){
//        for(let j = i; j < height.length; j++){
//            let nDif = (height.length - i) - (height.length - j);
//            if(height[i] < height[j]){
//                if(maxArea < height[i] * nDif)
//                    maxArea = height[i] * nDif;
//            }
//            else {
//                if(maxArea < height[j] * nDif)
//                    maxArea = height[j] * nDif;
//            }
//        }
//    }
//    
//    return maxArea;
//};


/**
 * @param {number[]} height
 * @return {number}
 5-29-2019
 2nd attempt
 
 */

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
//console.log(maxArea([1,8,6,2,5,4,8,3,7]));
//console.log(maxArea([1,8,6,2,5,4,8,3,7]));
//console.log(maxArea([1,8,6,2,5,4,8,3,7]));
//console.log(maxArea([1,8,6,2,5,4,8,3,7]));
//console.log(maxArea([1,8,6,2,5,4,8,3,7]));
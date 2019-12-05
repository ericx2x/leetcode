//1st attempt 
//6-7-2017
//Runtime: 52 ms, faster than 93.83% of JavaScript online submissions for Remove Element.
//Memory Usage: 33.9 MB, less than 35.69% of JavaScript online submissions for Remove Element.

//var removeElement = function(nums, val) {
//    for(let i = 0; i<nums.length ; i++){
//        if(nums[i]===val){
//            nums.splice(i, 1);
//            i--;   
//        }
//    }
//    return nums.length;
//};

//Time complexity is O(n) where n is the number of elements in the array. Space complexity is O(1). (actually not correct space as split is intensive.)


//2nd their attempt
//var removeElement = function(nums, val) {
//    let i = 0;
//    for (let j = 0; j < nums.length; j++) {
//        if (nums[j] != val) {
//            nums[i] = nums[j];
//            i++;
//        }
//    }
//    return i;
//}

//my guess runtime- O{n} for time and O{1} space.

//Runtime: 64 ms, faster than 23.59% of JavaScript online submissions for Remove Element.
//Memory Usage: 33.8 MB, less than 45.98% of JavaScript online submissions for Remove Element.


//their solution 3.
var removeElement = function(nums, val) {
    let i = 0;
    let n = nums.length;
    while (i < n) {
        if (nums[i] == val) {
            nums[i] = nums[n - 1];
            // reduce array size by one
            n--;
        } else {
            i++;
        }
    }
    return n;
}

//Runtime: 48 ms, faster than 97.95% of JavaScript online submissions for Remove Element.
//Memory Usage: 33.9 MB, less than 35.69% of JavaScript online submissions for Remove Element.



//console.log(removeElement([3,2,2,3], 3));
console.log(removeElement([0,1,2,2,3,0,4,2], 2));
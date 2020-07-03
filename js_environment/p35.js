/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.indexOf(target) == -1){
        nums.push(target);
        nums.sort(function(a, b){return a-b});
    }
    return nums.indexOf(target)
};

/* first try besides getting indexOf no target not to -1 comparison (isntead thought it would be undefined) and didn't provide a compare function to sort to allow it to sort numbers instead of string.
 * Runtime: 76 ms, faster than 7.53% of JavaScript online submissions for Search Insert Position.
Memory Usage: 36.2 MB, less than 25.00% of JavaScript online submissions for Search Insert Position.

TODO: imprive runtim and look at other solutions to see if there are efficiency boosts*/

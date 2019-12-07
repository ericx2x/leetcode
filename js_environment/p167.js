/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const set = new Set();
    for(let i = 0 ; i < numbers.length ; i++) {
        if(set.has(target - numbers[i])) return [numbers.indexOf(target - numbers[i])+1, i+1];
        set.add(numbers[i]);
    }
    return -1;
};

/**
 * what an easy problem. Just 2Sum all over again? Non-zerobased means just zero.. ? Idk.. whatevers
 * Runtime: 56 ms, faster than 76.06% of JavaScript online submissions for Two Sum II - Input array is sorted.
Memory Usage: 35.2 MB, less than 52.17% of JavaScript online submissions for Two Sum II - Input array is sorted.
*/

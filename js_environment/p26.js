/**
 * @param {number[]} nums
 * @return {number}
 * TODO: Attempt the problem again (no more than 10 min for solution) or Understand the two pointer solution to this problem better.. add some console.logs maybe..
 *
 *
 * public int removeDuplicates(int[] nums) {
    if (nums.length == 0) return 0;
    int i = 0;
    for (int j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}
 */
var removeDuplicates = function(nums) {
    
};

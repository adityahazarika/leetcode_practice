/**
 * @param {number[]} nums
 * @return {number[]}
 */
//using bubble sort
var sortArray = function(nums) {
    let flag = false;
    while (!flag) {
        flag = true;
        for (let i = 0; i < nums.length; i++) {
            if (i != (nums.length - 1)) {
                if (nums[i] < nums[i + 1]) {
                    continue;
                }
                else {
                    flag = false;
                    let temp = nums[i];
                    nums[i] = nums[i + 1];
                    nums[i + 1] = temp
                }
            }
        }
    }
    return nums
};

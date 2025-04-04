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

// Selection Sort
function sortArr(arr) {
    let sort = [];
    let len = arr.length;
    while (sort.length != len) {
        let m = arr[0]
        for (let i = 0; i < arr.length; i++) {
            m = Math.min(arr[i], m)
            if (arr.length - 1 == i) {
                sort.push(m)
                arr.splice(arr.indexOf(m), 1)
            }
        }
    }
    return sort
}

console.log(sortArr([7, 5, 4, 3, 2, 1]))

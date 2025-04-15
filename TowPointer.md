# Two Pointer Questions

### 1. Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
   
```
var twoSum = function (nums, target) {
    let str = 0;
    let end = nums.length - 1
    let flag = true;
    while (flag) {
        if ((nums[str] + nums[end]) == target) {
            flag = false
        } else if ((nums[str] + nums[end]) > target) {
            end = end - 1
        }
        else {
            str = str + 1
        }
    }
    return [str,end]
};
```
<br>

### 1.1 An alternative solution of the question 1 which will also work with UNSORTED array
```
var twoSum = function (nums, target) {
    let str = 0;
    let end = 0;
    let mp = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (mp.has(nums[i])) {
            str = mp.get(nums[i]);
            end = i
            break
        } else {
            mp.set((target - nums[i]), i)
        }
    }
    return [str,end]
};
```
<br>
### 2. Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

leetcode link - https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

```
var removeDuplicates = function (nums) {
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            nums[i] = "_"
        } else {
            set.add(nums[i])
        }
    }
    let l = null;
    for (let i = 0; i < nums.length; i++) {
        if (l == null && nums[i] == "_") {
            l = i
        }
        if (l != null && nums[i] != "_") {
            nums[l] = nums[i];
            nums[i] = "_";
            l = l + 1
        }
    }
    return set.size
};
```

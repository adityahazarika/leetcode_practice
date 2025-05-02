# Cyclic Sort

### 1. Write a function to sort the objects in-place on their creation sequence number in O(n) and without any extra space.

```
 function cyclicSort(nums) {
  let i = 0;

  while (i < nums.length) {
    const j = nums[i] - 1; //nums[i] = 3, 3-1 = 2
    if (nums[i] !== nums[j]) {
      //3 !== 2
      //swap
      // [nums[i], nums[j]] = [nums[j], nums[i]]
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    } else {
      i++;
    }
  }
  return nums;
}
```

### 2. Find Missing Number - Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array
Leetcode Link - https://leetcode.com/problems/missing-number/description/

```
function missingNumber(nums) {
    let num;
    nums.push("-")
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] != i) {
            if(nums[i]=="-"){
                num = i
                break
            }
            let index = nums[i]
            let temp = nums[index];
            nums[index] = nums[i];
            nums[i] = temp
        }
    }
    return num
}
```

### 3. Find all Duplicate Numbers. Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears at most twice, return an array of all the integers that appears twice. You must write an algorithm that runs in O(n) time and uses only constant auxiliary space, excluding the space needed to store the output.
Leetcode link - https://leetcode.com/problems/find-all-duplicates-in-an-array/description/

```
function findDuplicates(nums) {
  let i = 0;

  while (i < nums.length) {
    //??
    let j = nums[i] - 1;

    if (nums[i] !== nums[j]) {
      //swap
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }

  let duplicateNumbers = [];

  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      //we have found the duplicate
      duplicateNumbers.push(nums[i]);
    }
  }

  return duplicateNumbers;
}
```

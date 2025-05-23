# Sliding Window Questions

### 1. Given an array, find the average of all contiguous subarrays of size K in it.
   
```
let arr = [1, 3, 2, 6, -1, 4, 1, 8, 2]
let K = 5
let l = 0;
let r = 1;
let sum = arr[0];

let res = [];

for (let i = 1; i < K; i++) {
    sum = sum + arr[r];
    r = r + 1;
}
res.push(sum / K)
while (r != arr.length) {
    sum = sum + arr[r];
    sum = sum - arr[l];
    res.push(sum / K)
    r = r + 1;
    l = l + 1
}
console.log(res,sum)
```
<br>

### 2. Given an array of positive numbers and a positive number K, find the maximum sum of any contiguous subarray of size K.

```
let arr = [2, 3, 4, 1, 5]
let K = 3

function maxSubarrayOfSizeK(arr, K) {
    let l = 0;
    let r = 1;
    let max = arr[0];
    let temp = 0

    for (let i = 1; i < K; i++) {
        max = max + arr[r];
        r = r + 1;
    }

    temp = max
    while (r != arr.length) {
        temp = temp + arr[r];
        temp = temp - arr[l];
        if (temp > max) {
            max = temp
        }
        r = r + 1;
        l = l + 1
    }

    return max;
}

console.log(maxSubarrayOfSizeK(arr,K))
```
<br>

### 3. Given an array of positive numbers and a positive number S, find the length of the smallest contiguous subarray whose sum is greater than or equal to S
```

wrote this algorithm which helped me actually before writing code
// loop through arrays -
//     loop till subarray sum is equal to or greater than "s"
// if (greater than or equal to s)
// while (summation is >= s)loop to increment "l"
//                 keep incrementing "l"
// continue from step 2

function smallestSubarrayWithGivenSum(arr, s) {
    let l = 0;
    let sum = 0;
    let len = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= s) {
            return 1
        }
        sum = sum + arr[i]
        while (sum >= s) {
            let temp = (i - l) + 1
            if (len == 0 || temp < len) {
                len = temp
            }
            sum = sum - arr[l];
            l = l + 1
        }
    }
    return len
}

console.log(smallestSubarrayWithGivenSum([2,1, 5, 2, 3, 2], 7))
console.log(smallestSubarrayWithGivenSum([2, 1, 5, 2, 8], 7))//1
console.log(smallestSubarrayWithGivenSum([3, 4, 1, 1, 6], 8))//3
```

<br>

### 4. You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions: The length of the subarray is k, and All the elements of the subarray are distinct. Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.

leetcode link - https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/description/

The following is my own raw solution
```
var maximumSubarraySum = function (nums, k) {
    let l = 0;
    let sum = 0;
    let max = 0;
    let subArr = new Map()
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        subArr.set(nums[i], subArr.has(nums[i]) ? subArr.get(nums[i]) + 1 : 1);

        if (i - l == (k - 1)) {
            if (subArr.size != k) {
                if (subArr.get(nums[l]) == 1) {
                    subArr.delete(nums[l])
                } else {
                    subArr.set(nums[l], subArr.get(nums[l]) - 1)
                }
            }
            if (subArr.size == k) {
                if(max<sum){
                    max = sum;
                }
                subArr.delete(nums[l])
            }

            sum = sum - nums[l]
            l = l + 1
        }
    }
    return max
};
```
<br>

### 5. Fruits into Baskets. In this problem, we need to find the length of the longest subarray with no more than two distinct characters (or fruit types!).

leetcode link - https://leetcode.com/problems/fruit-into-baskets/description/

The following is my own raw solution

```
var totalFruit = function (fruits) {
    let l = 0
    let max = 0;
    let mp = new Map();

    for (let i = 0; i < fruits.length; i++) {

        mp.set(fruits[i], mp.has(fruits[i]) ? mp.get(fruits[i]) + 1 : 1)
        if (mp.size > 2) {
            let temp = i - l;
            if (temp > max) {
                max = temp
            }
            while (mp.size > 2) {
                mp.set(fruits[l], mp.get(fruits[l]) - 1);
                if (mp.get(fruits[l]) == 0) {
                    mp.delete(fruits[l])
                }
                l = l + 1
            }
        }
    }
    let temp = fruits.length - l;
    if (temp > max) {
        max = temp
    }
    return max
}
```





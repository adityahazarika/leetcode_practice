Q1. Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Answer - 
function isValid(str) {
    let validArr = ["()", "{}", "[]"];
    let arr = [];
    for (const ele of str) {
        if (ele == "]" || ele == "}" || ele == ")") {
            if (arr.length == 0) {
                console.log("started with closing bracket")
                return false;
            }
            else if (validArr.includes(arr[arr.length - 1] + ele)) {
                arr.splice((arr.length - 1), 1)
            }
            else {
                return false
            }
        }
        else{
            arr.push(ele)
        }
    }
    if(arr.length==0){
        return true
    }
    else{
        return false
    }
}

Q2 Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.


Answer :- 
function memoize(fn) {
    
   const cache = {};
  
   return function(...args) {
    const key = JSON.stringify(args);
    
    if (key in cache) {
      return cache[key];
    }
    
    const result = fn.apply(this, args);
    cache[key] = result;
    
    return result;
  }
  
}


Q3. Binary search Algo
function fun(){
    let arr = [1, 2, 3, 4, 5, 7, 9, 44, 45, 78]

    let num = 45;
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor(right + left / 2);
        if (arr[mid] == num) {
            return mid
        }
        if (num < arr[mid]) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
}

console.log(fun())

Q4. Given an integer array nums, find the subarray with the largest sum, and return its sum.
    leetcode.com/problems/maximum-subarray/description/
Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.


    var maxSubArray = function(nums) {
    let res = 0;
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        if(i==0){
            res = nums[0];
            total = nums[0];
        }else{
            if(total<0){
                total = 0
            }
            total = total + nums[i];
            res = Math.max(res, total)
        }

    }
    return res
}
console.log(maxSubArray([-1,-2]))
console.log(maxSubArray([8,-19,5,-4,20]))



Q5. implementation of a binary search on a 2D sorted matrix that has a time complexity of O(log(m * n))

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]

var searchMatrix = function(matrix, target) {
    let left = 0;
    let right = (matrix.length*[matrix[0].length])-1;

    while(left<=right){
        let mid = Math.floor((right+left)/2);
        let num = matrix[Math.floor(mid/matrix[0].length)][mid%matrix[0].length];

        if(num==target){
            return true
        }
        else if(target<num){
            right = mid-1;
        }else{
            left = mid+1
        }
    }
    return false
};

console.log(searchMatrix(matrix,12))

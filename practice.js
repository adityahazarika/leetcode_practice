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


Q6. Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
    
    function permute(nums) {
    if(nums.length==1){
        return nums;
    }
    else if(nums.length==2){
        return [[nums[0],nums[1]],[nums[1],nums[0]]]
    }

    return nums.flatMap((n)=>{
        return permute(nums.filter(it=>(n!==it))).map((d)=>[n,...d])
    })
}

Efficient Solution - 
function permute(nums) {
    if (nums.length == 1) {
        return [nums];
    }
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let n = nums.shift();
        let perm = permute(nums.slice());

        for (const p of perm) {
            p.push(n);
        }

        res.push(...perm)
        nums.push(n);
    }
    return res;
}

console.log(
    permute([1, 2, 3])
)



Q7 There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

link- https://leetcode.com/problems/search-in-rotated-sorted-array/description/

Answer 1 My solution
function search(nums,target){
    let i = nums.findIndex((n,i)=>n>nums[i+1]);
    if(target<=nums[i]&&target>=nums[0]){
        let n = [...nums].slice(0,(i+1))
        return fun(n,target,0);
    }else{
        let n = [...nums].slice(i+1,nums.length)
        return fun(n,target,(nums.length-n.length))
    }
    function fun(arr,trg,order){
        let left = 0;
        let right = arr.length-1;
        while(left<=right){
            let mid = Math.floor((left+right)/2);
            if(arr[mid]==trg){
                return (order==0)?mid:(mid+order)
            }
            if(arr[mid]>trg){
                right = mid-1
            }
            else{
                left = mid+1
            }
        }
        return -1
    }
}

console.log(search([5,1,3],5))


Alternative efficient solution - 

    // the Login is for example [4,5,6,7,1,2,3] we just need to watch out for the 7,1 index. Before 7 same Binary search algo will apply and after 7 same algo will apply, just need to take care of this 7,1 position
    function search(nums, trgt){
    let left = 0;
    let right = nums.length-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid]===trgt){
            return mid;
        }
        if(nums[mid]>=nums[left]){
            if(trgt>=nums[left]&&trgt<nums[mid]){
                right = mid-1;
            }else{
                left = mid+1
            }
        }
        else{
            if(trgt>nums[mid]&&trgt<=nums[right])
            {
                left = mid+1;
            }
            else{
                right = mid-1
            }
        }
    }
    return -1
}

console.log(search([5,1,3],1))

Q8 Arrage array in ascending order - 
    let arr = [6,5,1,4,3,2,1,2];

let max = 0;

for (let i = 0; i < arr.length; i++) {
    let j = i + 1
    while (j < arr.length) {
        if (arr[i] < arr[j]) {
            j=j+1
        }else{
            arr[i]=arr[j]+arr[i];
            arr[j]=arr[i]-arr[j];
            arr[i]=arr[i]-arr[j];
            j=j+1;
        }
    }
}

console.log(arr)

Q9 Given the head of a singly linked list, reverse the list, and return the reversed list.

My solution - 
    var reverseList = function (obj) {
    let head = obj;
    while (obj?.next) {
        let prev = obj;
        let post = obj.next
        prev.next = post.next;
        post.next = head;
        head = post;
        obj = prev;
    }
    return head
};

leetcode solution, although i have already thought this solution but i don't know hot to code it
    var reverseList = function (obj) {
    let prev = null;
    while(obj){
        let curr = obj;
        let next = obj.next;
        curr.next = prev;
        obj = next
        prev = curr;
    }
    return prev;
};

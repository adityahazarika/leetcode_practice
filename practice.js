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

Q10- Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

function decodeString(s){
    
    let stk = [];
    for (const str of s) {
        if(str!=="]"){
            stk.push(str);
            continue;
        }
        let p = stk.pop();
        let sub = "";
        while(p!="["){
            sub = p + sub;
            p = stk.pop()
        }        
        p = stk.pop();
        let num = "";
        while(!Number.isNaN(Number(p))){
            num = p+num;
            p = stk.pop();
        }
        stk.push(p)
        stk.push(sub.repeat(Number(num)))
    }
    return stk.join("")
}


Q11. Given a string and an integer k, find the number of substrings in which all the different characters occur exactly k times.
    Input : s = "aabbcc"
        k = 2 
Output : 6
The substrings are aa, bb, cc,
aabb, bbcc and aabbcc.

Input : s = "aabccc"
        k = 2
Output : 3
There are three substrings aa, 
cc and cc

my own code - 
    function countCompleteSubstrings(word, k) {
    let itr = k
    let mlt = 2;
    let arr = word.split("");
    let strArr = 0
    while (k <= arr.length) {
        for (let i = 0; i < arr.length; i++) {
            let s = i + k
            let mp = new Map();
            for (j = i; j < s; j++) {
                let val = mp.get(arr[j]) ? mp.get(arr[j]) + 1 : 1;
                if (val > itr) {
                    mp.clear()
                    break;
                } else {
                    mp.set(arr[j], val)
                }
            }
            let final = Array.from(mp).find((it) => it[1] != itr)
            if (!final&&!mp.get(undefined)&&mp.size) {
                strArr = strArr + 1
            }
        }
        k = itr * mlt;
        mlt = mlt + 1
    }
    return strArr
}

same question with just one additional case of -
    The difference between two adjacent characters is at most 2. That is, for any two adjacent characters c1 and c2 in s, the absolute difference in their positions in the alphabet is at most 2.

solution - 
    function countCompleteSubstrings(word, k) {
    let itr = k
    let mlt = 2;
    let arr = word.split("");
    let strArr = 0
    while (k <= arr.length) {
        for (let i = 0; i < arr.length; i++) {
            let s = i + k
            let mp = new Map();
            for (j = i; j < s; j++) {
                let val = mp.get(arr[j]) ? mp.get(arr[j]) + 1 : 1;
                if (val > itr) {
                    mp.clear()
                    break;
                } else {
                    mp.set(arr[j], val)
                }
            }
            let mapArr = Array.from(mp)
            let final = mapArr.find((it, n) => it[1] != itr)

            if (!final && !mp.get(undefined) && mp.size && check(mapArr)) {
                strArr = strArr + 1
            }
        }
        k = itr * mlt;
        mlt = mlt + 1
    }
    return strArr
}

function check(mapArr) {
    for (let t = 0; t < mapArr.length; t++) {
        if (t == mapArr.length - 1) {
            return true;
        }
        let a = mapArr[t][0].charCodeAt(0);
        let b = mapArr[t + 1][0]?.charCodeAt(0);
        if (!b) {
            return true
        }
        else if (Math.abs(a - b) > 2) {
            return false;
        }
    }
}


Q12 Given two strings s and t of lengths m and n respectively, return the minimum window 
substring
 of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.
     
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

    Solution - 
var minWindow = function (s, t) {
  if (t.length > s.length) {
    return ""
  } else {
    let len = 0;
    let substr = "";
    let str = t.split("");
    let subarr = [];
    for (const c in s) {
      let i = str.indexOf(s[c]);
      if (i != -1) {
        str.splice(i, 1)
        subarr.push([s[c], Number(c)])
      } else {
        let j = subarr.findIndex((it) => it[0] == s[c])
        if (j != -1) {
          subarr.splice(j, 1);
          subarr.push([s[c], Number(c)])
        }
      }
      if (subarr.length == t.length) {
        let dif = Number(subarr[subarr.length - 1][1]) - Number(subarr[0][1])
        if (len == 0 || len > dif) {
          len = dif
          substr = s.slice(Number(subarr[0][1]), Number(subarr[subarr.length - 1][1] + 1))
        }
      }
    }
    return substr;
  }
};

console.log(minWindow('aaaaab', 'aab'))

Q13 Find maximum (or minimum) sum of a subarray of size k

function slidingWindow(arr, k) { //Best optimized O(n) solution
    let = [1, 4, 2, 10, 23, 3, 1, 0, 20];
    let l = 0;
    let r = 0;
    let sum = 0;
    let temp = 0
    for (let i = 0; i < arr.length; i++) {
        temp = temp+arr[i]
        if (r - l == (k - 1)) {
            temp = temp-(arr[l-1]?arr[l-1]:0);
            if(temp>sum){
                sum = temp;
            }
            r = r+1;
            l = l+1;
        }else{
            r=r+1;
        }
    }
    console.log(sum,l,r)
}

sw([11,2,4,6,2,2,7,8,4,2],2)

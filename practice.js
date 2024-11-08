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
        let mid = Math.floor(right - left / 2);
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

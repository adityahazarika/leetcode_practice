# Sliding Window Questions

### 1. Given an array, find the average of all contiguous subarrays of size K in it.
   
```let arr = [1, 3, 2, 6, -1, 4, 1, 8, 2]
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

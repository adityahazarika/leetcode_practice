# Merge Intervals

### 1. Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.
Leetcode link - https://leetcode.com/problems/merge-intervals/description/

```
var merge = function(intervals) {
    if(intervals.length<2){
        return intervals
    }

    intervals.sort((a,b)=>a[0]-b[0])

    for(let i=1; i<intervals.length;i++){
        if(intervals[i-1][1]>=intervals[i][0]){
            intervals[i-1] = [intervals[i-1][0], Math.max(intervals[i-1][1],intervals[i][1])];
            intervals.splice(i,1);
            i--
        }
    }

    return intervals
};
```

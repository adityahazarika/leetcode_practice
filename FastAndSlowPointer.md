# Fast & Slow pointers

### 1. Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.
Leetcode link = https://leetcode.com/problems/linked-list-cycle/description/

```
function hasCycle(head) {
  let slow = head
  let fast = head
  while(fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next
    
    if(slow === fast) {
      return true
    }
  }
  return false
}
```

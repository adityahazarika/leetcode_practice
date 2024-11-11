// 1st way
class nodeList {
    data = null;
    next = null
    constructor(data) {
        this.data = data;
    }
}

let num1 = new nodeList(1);
let num2 = new nodeList(2);
num1.next = num2

console.log(num1.data)

//2nd way
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let num1 = new ListNode(1,new ListNode(2))
console.log(num1)

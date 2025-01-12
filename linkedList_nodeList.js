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

//best way i think

class LinkedList {
    head = null;
    last;

    push(data) {
        if (!this.head) {
            this.head = {
                value: data,
                next: null
            }
            this.last = this.head
        } else {
            this.last.next = {
                value: data,
                next: null
            }
            this.last = this.last.next
        }
        return 0
    }

    insert(data, index) {
        let res = this.head;
        while (res.value != index) {
            res = res.next
        }
        let temp = res.next;
        res.next = {
            value: data,
            next: temp
        }
    }

    get() {
        return this.head
    }
}

let list = new LinkedList()

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.insert(6,1)
console.log(list.get())

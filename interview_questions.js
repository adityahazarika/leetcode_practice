Q1
var x = [typeof null, null instanceof Object];
console.log(x);

Q2
var a = [1, 2, 3];
var b = [1, 2, 3];

console.log(a == b);
console.log(a === b);

Q3
const a = { x: 1, y: 2 };
const b = a;
b.x = 3;
console.log(a);
console.log(b);

Q4
var x = 2;
(function(){
  var x = 4;
  (function random(){
    x++;
    console.log(x);
    var x = 3;
  })();
})();


Q5
function changeStuff(a,b,c){
    a = a*10;
    b.item = "changed";
    c = {item : "changed"};
}

var num = 10;
var obj1 = {item:"unchanged"};
var obj2 = {item:"unchanged"};

changeStuff(num,obj1,obj2);

console.log(num, obj1, obj2)

Q6
// Following is the price arr of a product ordered in day wise, we need to find the highest profit we could have booked if we bought it at least price and sell it at high price.
// For example in this array if we have bought it at price of 2 and sold it at price of 10 we could have booked highest profit.
var arr = [11,2,4,6,7,3,10,1,0];

let a = arr[0];
let obj = {
    profit: 0,
    ind1:0,
    ind2:0
}

for(let i=0;i<arr.length;i++){
    if(arr[i]<a){
        a = arr[i];
    }
    else if((arr[i]-a)>obj.profit){
        obj.profit = arr[i]-a;
        obj.ind1 = a;
        obj.ind2 = arr[i]
    }
}

console.log(obj)


Q7
let arr = ["php-1", "php-3", "php-2", "node-3", "node-1", "php-7", "python-2"]
// ["php-7", "node-3", "python-2"]


let obj = {};

arr.forEach((it)=>{
    let str = it.split("-")     
    if(obj[str[0]]){
        if(parseInt(obj[str[0]])<parseInt(str[1])){
            obj[str[0]]=str[1];
        }
    }
    else{
        obj[str[0]] = str[1]
    }
});

console.log(obj)
2nd alternative - 
let arr = ["php-1", "php-3", "php-2", "node-3", "node-1", "php-7", "python-2"]
// ["php-7", "node-3", "python-2"]

let obj={

}

for (let i = 0; i < arr.length; i++) {
    let splt = arr[i].split("-");
    obj[splt[0]] = obj[splt[0]] ? (obj[splt[0]]<splt[1]? splt[1]:obj[splt[0]]) :splt[1]
}

console.log(obj)


Q8
Predict the output
async function fun1(){
    let a = await Promise.resolve("Hello1");    //in this case this task will be removed from the callstak and will go to event queue as it is a microtask hence the next line console.log will not get primted
    console.log(a);
    return a
}

async function fun2(){
    let a = "Hello2";
    console.log(a);
    return a
}

async function fun3(){
    let a = Promise.resolve("Hello3");
    console.log(a);
    return a    // this statement returning a resolved promise but as this is an async function this resolved promise will again gets wrapped around a new promise which will be in pending state
}


console.log(1,fun1(),fun2(),fun3())

Q9 
var demo = {};

var x =  {id:1},
y = {id:2};

demo[x] = "alpha";
demo[y] = "beta";

console.log(demo[x]);
console.log(demo[y]);


Q10
var hack = new Object();
hack["hackname1"] = "Alice";
hack["hackname2"] = "Smith";
hack["hacker"] = 31;

Object.hackerearth = function(h){
    var hackerearth = 0,h1;
    for(h1 in h){
        if(h.hasOwnProperty(h1))
        hackerearth++;
    }
    return hackerearth;
}
console.log(Object.hackerearth(hack))

Q11
var obj = {
    x:1,
    5:1,
    r:1,
    1:1,
    g:1,
    h:1,
    9:1
}

obj.t = 1;

console.log(Object.getOwnPropertyNames(obj).join(""))

Q12
const json1 = {
    who:"world",
    greet(){
        return `Hello, ${this.who}`;
    },
    farewell:{
        fun1(){
            return `Hello ${this}`;
        },
    }
}

const json2 = {
    who:"Human"
}

console.log(json1.greet());

console.log(json1.farewell());

console.log(json1.farewell.bind(json2)())
console.log(json1.greet.bind(json2)())

Q13
var hack1 = 89;

function hack_function(){
    var hack2 = 56;
    var hack3 = function(){
        console.log(hack2);
    }

    var hack4 = function(){
        console.log(hack1);
    }

    hack3();
    hack4();
}

hack_function()

Q14
Promise.resolve("Hi").
then((it)=>console.log("then",it)).
then((it)=>console.log("then",2,it)).
catch((err)=>{throw 9}).
catch((err)=>console.log(4,err)).
catch((err)=>console.log(5))
.then((it)=>{console.log("then",6,it)
throw "err"
})
.then((ir)=>console.log("then",ir))
.then((ir)=>console.log("then",ir))
.then((ir)=>console.log("then",ir))
.catch((ir)=>console.log(ir,2))
.then((ir)=>console.log("then",ir))


Q15
while (true) {
 setTimeout(() => {
   console.log('ABC');
 }, 0);


 console.log('PQR');


 Promise.resolve()
   .then(() => {
     console.log('XYZ');
   })
}


Q16
var x = 10;

function fun1(){
    // if(x<10){
    //     var x = 20
    //     console.log(x)
    // }
    console.log(x)   //print undefined because of var hoisting in the next if statement and if we change var to let it will print 10
    if(x<10){
        var x = 20
        console.log(x)
    }
}

fun1()


Q17
//Optimized pallindrome code
function fun1(str){
    str = str.split("");

    for(let i = 0;i<(str.length)/2;i++){
        if(str[i]!=str[str.length-(i+1)]){
            console.log(str[i], str[str.length-i])
            return false
        }
    }
    return true
}

console.log(fun1("malayalam"))

Q18
/** Function Composition example
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        let result = 0;
        for(let i=functions.length;i>0;i--){
            x = functions[i-1](x)
        }
        return x
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

Q19
let arr = [1,2,3,4];
reverse the arr without using 3rd variable

for (let i = 0; i < arr.length/2; i++) {
    arr.splice(i,0,arr[arr.length-(i+1)]);
    arr.splice((arr.length-(i+1)),1,arr[i+1])
    arr.splice(i+1,1)
}
// alternative efficient solution - 
	let arr = [9,8,7,6,5,4,3,2,1];

for (let i = 0; i <Math.floor(arr.length/2); i++) {
    arr[i] = arr[(arr.length-1)-i]+arr[i];
    arr[(arr.length-1)-i] = arr[i] - arr[(arr.length-1)-i]
    arr[i] = arr[i] - arr[(arr.length-1)-i]
}

console.log(arr)


console.log(arr)


Q9 Find the 2nd largest number in an array 
let arr = [1,4,5,6,9];

let max = 0;
let max2 = 0;

for (let i = 0; i < arr.length; i++) {
    if(arr[i]>max){
        max2 = max;
        max = arr[i];
    }else if(arr[i]>max2){
        max2 = arr[i]
    }

}

console.log(max,max2)

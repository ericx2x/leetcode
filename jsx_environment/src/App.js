import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { prototype } from 'events';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ES6 Javascript Problems</h1>
        </header>
        <p className="App-intro">
          Checkout the code and console to see JS questions listed.
        </p>
      </div>
    );
  }
}

//Questions can be found at: https://www.youtube.com/watch?v=OOC-ypVnHAY&t=635s

//How do you make the below variable, x, into an array without keys?
// let x = {
//   a: 1,
//   b: 2
// };
// //answer
// const xArr = Object.values(x);
// console.log(xArr);

//How do you print the below string, x2, into it's reverse string such as what is see in y2.
// let x2 = "hello";
// let y2 = "olleh";
// //answer
// const revString = x2.split('').reverse().join('');
// console.log(revString);

// //How do you print both methods without touching the execute line.
// const obj = {
//   a: 1,
//   b: 2,
//   getA(){
//     console.log(this.a);
//     return this; //this line is the answer
//   },
//   getB(){
//     console.log(this.b);
//   }
// }

// obj.getA().getB(); //getA returns nothing so this.b is undefined.b rather.

//Print 1,2 from this method. As it it would not work. Get it to work without changing the below line. 
//Unfortunately you can't actually change modify methods of prototype arrayt.
// [1,2].print(); //1,2

// Array.prototype.print = () => {
//   for( let[i, elem] of this){
//     if(i=== this.length){
//       result += elem;
//     } else {
//       result += `${elem},`;
//     }
//   }
//   console.log(result);
// };


//Call x from const a in const b and create two methods inside const b getX and getY
// const a = function(x){
//   this.x = x;
// };

// const b = function(x,y){
//   this.y = y;
//   this.x = new a(a).x;  //or you can do "a.call(this,x);""
//   getX(){
//    return this.x;
//   }
//   getY(){
//     return this.y;
//   }
// }

// const newB = new b('x', 'y');

// newB.getX();
// newB.getY();



//clone the below obj and make sure the console.log does not give you the value 2
// const obj = {
//   a:{
//     b:{
//       c:1
//     }
//   }
// }

// //const clone = new obj; //my incorrect answer
// // const clone = Object.assign({},obj); //correct answer 

// //or you can use stringify and parse
// const clone = JSON.parse(JSON.stringify(obj)); //better more correct answer
 

// clone.a.b.c = 2;

// console.log(clone);
 

//combine and sort these two arrays in c.
// const a = [1,2,5,7,9];
// const b = [2,5,7,12,100];

// const c = a.concat(b).sort((a, b)=>{return a > b}); //this is a good answer but perhaps not an optimal solution
// //todo the optimal solution think about how you solve this in real life and create a program that does that. 
// //Hint: create a third array and store increment an index number after the each sort in there

// console.log(c);

//What does obj.getX() output? What should you change to get the desired result?
// const obj = {
//   x:1,
//   getX(){
//     //another answer "const that = this" then pass in that as a parameter
//     const inner = function(){  //the answer is to make this fat arrow notation so that this object is passed down ()=>{}
//       console.log(this.x);
//     }
//     inner();//another answer is to do "inner.bind(this)()" and pass in the this object
//   }
// };

// obj.getX();

// function Person(name) {
//   this.name = name;
//   this.greeting = function() {
//     console.log('Hi! I\'m ' + this.name + '.');
//   };
// }

// var salva = new Person('Salva');
// salva.name = "Bob";
// salva.greeting();


// var person1 = new Object({
//   name: 'Chris',
//   age: 38,
//   greeting: function() {
//     console.log('Hi! I\'m ' + this.name + '.');
//   }
// });

// var person2 = Object.create(person1);
// person2["name"] = "Tony";
// person1.greeting();
// person2.greeting();
// console.log(person2.name);


// var testObj = new Object;
// console.log(Object.getPrototypeOf(testObj));
// console.log(testObj.__proto__);
// console.log(Object.getPrototypeOf(new Object()));
// console.log(Object.prototype);

//function Person(first, last, age, gender, interests) {
//  
//  // property and method definitions
//  this.first = first;
//  this.last = last;
//  this.age = age;
//  this.gender = gender;
//  this.interests = interests;
//
//}
//
//var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
//console.log(person1.valueOf(2));


 
//==============================================================================



//this is a simple async await below. Nothing particulary special. Just wrapping my head around them.
// function add(x,y){
//   return x + y;
// }
// async function add(x,y){
//   return x + y;
// }
// var resultadd = add(2,5);
// console.log("addition is:" + resultadd);

// function resolveAfter2Seconds() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('resolved');
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   console.log('calling');
//   var result = await resolveAfter2Seconds();
//   console.log(result);
//   // expected output: "resolved"
// }

// asyncCall();




//New questions from: https://www.youtube.com/watch?v=E06YfXKVtGI
//============================================================
//add the array below with your own code.
//let ary = [1,2,5,7];
//const reducer = (accumulator, currentValue) => accumulator + currentValue;
//
//console.log(ary.reduce(reducer));
 
//============================================================
//add(1,2);
//add(1)(2);
//
//
//function add(num1, num2){
//    if(num1 && num2){
//        return num1+num2;
//    } else {
//        return function(num3){
//            return num1 + num3;
//        }
//    }
//}

//console.log(add(1)(2));


//==========================================
//const arr = [1,2,3,4,5,6,7,9,10]; // 1 number is missing
//
//
//
//function missingNum(arr){
//    function bubbleSort(arr){
//       var len = arr.length;
//       for (var i = len-1; i>=0; i--){
//         for(var j = 1; j<=i; j++){
//           if(arr[j-1]>arr[j]){
//               var temp = arr[j-1];
//               arr[j-1] = arr[j];
//               arr[j] = temp;
//            }
//         }
//       }
//       return arr;
//    }
//    var sortedArr = bubbleSort(arr);
//    for(let i = 0; i < sortedArr.length ; i++ ){
//        if(sortedArr[i]+1 !== sortedArr[i+1]){ 
//            return sortedArr[i]+1;
//        }
//    }
//}
//
//console.log(missingNum(arr));



// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// var addTwoNumbers = function(l1, l2) {

//   var donel1 = new Array();
//   var donel2 = new Array();

//   for(var i = l1.length ; i >= 0 ; i--){
//     donel1.push(l1[i]);
//   }

//   for(var i = l2.length ; i >= 0 ; i--){
//     donel2.push(l2[i]);
//   }

//   console.log("donel1");
//   // console.log(parseInt(donel1.join("")));

//   console.log("donel2");
//   // console.log(donel2.join(""));

//   parseInt(donel1.join(''))+parseInt(donel2.join(''));

//   return(parseInt(donel1.join(''))+parseInt(donel2.join('')));
// };

// console.log(addTwoNumbers([2,4,3],[5,6,4]));


//=======


//Below is the code to create a linked list.
//function LinkedList(){
//  var length = 0;
//  var head = null;
//
//  var Node = function(element){
//    this.element = element;
//    this.next = null;
//  };
//
//  this.size = function(){
//    return length;
//  };
//
//  this.head = function(){
//    return head;
//  }
//
//  this.add = function(element){
//    var node = new Node(element);
//    if(head === null){
//      head = node;
//    } else {
//      var currentNode = head;
//
//      while(currentNode.next){
//        currentNode = currentNode.next;
//      }
//
//      currentNode.next = node;
//    }
//
//    length++;
//  };
//
//  this.remove = function(element){
//    var currentNode = head;
//    var previousNode;
//    if(currentNode.element === element){
//      head = currentNode.next;
//    } else {
//      while(currentNode.element !== element){
//        previousNode = currentNode;
//        currentNode = currentNode.next;
//      }
//    }
//
//    length--;
//  };
//
//  this.isEmpty = function(){
//    return length === 0;
//  };
//
//  this.indexOf = function(element){
//    var currentNode = head;
//    var index = -1;
//
//    while(currentNode){
//      index++;
//      if(currentNode.element === element){
//        return index;
//      }
//      currentNode = currentNode.next;
//    }
//    return -1;
//  }
//
//  this.elementAt = function(index){
//    var currentNode = head;
//    var count = 0;
//    while(count < index){
//      count ++;
//      currentNode = currentNode.next
//    }
//    return currentNode.element;
//  };
//
//  this.addAt = function(index, element){
//    var node = new Node(element);
//
//    var currentNode = head;
//    var previousNode;
//    var currentIndex = 0;
//
//    if(index > length){
//      return false;
//    }
//
//    if(index === 0){
//      node.next = currentNode;
//      head = node;
//    } else {
//      while(currentIndex < index){
//        currentIndex++;
//        previousNode = currentNode;
//        currentNode = currentNode.next;
//      }
//      node.next = currentNode;
//      previousNode.next = node;
//    }
//    length++;
//  }
//
//  this.removeAt = function(index, element){
//    var currentNode = head; 
//    var previousNode;
//    var currentIndex = 0;
//
//    if(index < 0 || index >= length){
//      return null
//    }
//    if(index === 0){
//      head = currentNode.next;
//    } else {
//      while(currentIndex < index){
//        currentIndex ++;
//        previousNode = currentNode;
//        currentNode = currentNode.next;
//      }
//      previousNode.next = currentNode.next
//    }
//    length--;
//    return currentNode.element;
//  }
//}
//
//var conga = new LinkedList();
//conga.add('Kitten');
//conga.add('Puppy');
//conga.add('Dog');
//conga.add('Cat');
//conga.add('Fish');
//console.log(conga.size());
//console.log(conga.removeAt(3));
//console.log(conga.elementAt(3));
//console.log(conga.indexOf('Puppy'));
//console.log(conga.size());
//console.log(conga);
//
//




//============
/**
 * @param {number} x
 * @return {number}
 */
//https://leetcode.com/problems/reverse-integer/submissions/
//First O(n) solution but I didn't know what the they were talking about on the "32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows." part.

//I asked for help on refinement
//https://leetcode.com/problems/reverse-integer/discuss/245526/I'm-faster-than-60-of-solutions-but-I-cheated
//var reverse = function(x) {
//    if(x>=1534236469) return 0;
//    //else if(x<=-2147483652)return 0;
//    else if(x<=-1563847412 && x>-2147483412)return 0;
//    else if(x===-2147483648)return 0;
//    
//    let new_string = "";
//    let negative_check = false;
//    if(x<0){
//        negative_check = true; 
//        x=x*-1;
//    }
//    let num_string = x.toString();
//    for(let i=num_string.length-1;i>=0;i--){
//        //console.log(num_string[i]);
//        if(negative_check){
//            negative_check = false;
//            new_string += '-';
//        }
//        new_string += num_string[i];
//    }
//    //console.log(string);
//    //if(new_string>=Math.pow(2, 31)-1 ) return 0;   //revised
//    //else if(new_string<=-Math.pow(2, 31))return 0; 
//    return new_string;
//};
//
//console.log(reverse('-1563847232'));



class LinkedList {
    constructor(value) {
        this.head = null;
        this.length = 0;
        this.addToHead(value);
    }
    
    addToHead(value) {
        const newNode = { value }; // 1
        newNode.next = this.head;  // 2
        this.head = newNode;       // 3
        this.length++;
        return this;
    }
}
const list = new LinkedList('first')
    .addToHead('second')
    .addToHead('third');

console.log('Hello.');

export default App;
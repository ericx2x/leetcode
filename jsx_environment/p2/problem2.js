

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
// I think this was my first attempt for addTwoNumbers below. I didn't even understand linked lists very well... I thought the LinkedLists getting passed were just arrays. They actually look like (an object that has a value and another object that has a value and another object that has a value and...):
//ListNode {
//  val: 2,
//  next: ListNode { val: 4, next: ListNode { val: 3, next: null } } }
//ListNode {
//  val: 5,
//  next: ListNode { val: 6, next: ListNode { val: 4, next: null } } }




// var addTwoNumbers = function(l1, l2) {
//
//   var donel1 = new Array();
//   var donel2 = new Array();
//
//   for(var i = l1.length ; i >= 0 ; i--){
//     donel1.push(l1[i]);
//   }
//
//   for(var i = l2.length ; i >= 0 ; i--){
//     donel2.push(l2[i]);
//   }
//
//   console.log("donel1");
//   // console.log(parseInt(donel1.join("")));
//
//   console.log("donel2");
//   // console.log(donel2.join(""));
//
//   parseInt(donel1.join(''))+parseInt(donel2.join(''));
//
//   return(parseInt(donel1.join(''))+parseInt(donel2.join('')));
// };
//
// console.log(addTwoNumbers([2,4,3],[5,6,4]));


//=======


//Below is the code to create a proper linked list with many of the traditional methods involved.
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
////
////
//
//
//
//
//
//
function ListNode(val) {
  this.val = val;
  this.next = null;
}
//
var l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

console.log(l1);

var l2 = new ListNode(2);
l2.next = new ListNode(4);
l2.next.next = new ListNode(3);

console.log(l2);


//Accidently found the solution and submitted it... This was NOT intentional. I did not actually learn from this one properly.. Must review thoroughly and when I understand I should delete
//var addTwoNumbers = function(l1, l2) {
//    const head = new ListNode(0);
//    var point = head;
//    var append = 0;
//    var run = function (l1, l2, point) {
//        if (l1 === null && l2 === null) {
//            if (append == 1) {
//                point.next = new ListNode(1);
//            }
//            return head.next;
//        }
//        var sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + append;
//        if (sum > 9) {
//            point.next = new ListNode(sum % 10);
//            append = 1;
//        } else {
//            point.next = new ListNode(sum);
//            append = 0;
//        }
//        return run(l1 ? l1.next : null, l2 ? l2.next : null, point.next);
//    };
//    return run(l1, l2, point)
//};



//Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
//Output: 7 -> 0 -> 8
//Explanation: 342 + 465 = 807.
//This is the more traditional solution offered by leetcode (Except the JS implementaiton):
var addTwoNumbers = function(l1, l2) {
    
    let sum = 0;
    let current = new ListNode(0);
    let result = current;
    
    while(l1 || l2) {
        
        if(l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        
        if(l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        console.log();  //TODO: finish making this console.log to better understand this problem.
        current.next = new ListNode(sum % 10);
        current = current.next;
        
        sum = sum > 9 ? 1 : 0;
    }
    
    if(sum) {
        current.next = new ListNode(sum);
    }
    
    return result.next;
};


addTwoNumbers(l1,l2);


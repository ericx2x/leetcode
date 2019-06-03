/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 
 2->2->4
 1->3->4

 cur->

 -> 

 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val){
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function(l1, l2) {
    let res = new ListNode();
    let cur = res;
    
//    console.log("res");
//    console.log(res);
//    console.log("cur");
//    console.log(cur);
    while(l1 && l2){
//        l1 = l1.next;
//        l2 = l2.next;
//        console.log(count++);
    
        if(l1.val <= l2.val){
            cur.next = new ListNode(l1.val);
            l1 = l1.next;
            cur = cur.next;
            console.log(cur.next);
        }
        else {
            cur.next = new ListNode(l2.val);
            l2 = l2.next;
            cur = cur.next;
        }
    }

    cur.next = l1 || l2;
    return res.next;
};

let linkedList = new ListNode(1);
linkedList.next = new ListNode(2);
linkedList.next.next = new ListNode(4);

let linkedListTwo = new ListNode(1);
linkedListTwo.next = new ListNode(3);
linkedListTwo.next.next = new ListNode(4);

console.log(mergeTwoLists(linkedList, linkedListTwo));
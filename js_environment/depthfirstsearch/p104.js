/*Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

*/


function TreeNode(v){
  this.val = v;
  this.left = null;
  this.right = null;
};

const root = new TreeNode(3);//the nums dont even matter u can delete if you want lol...
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
root.left = new TreeNode(9);

var maxDepth = function(root) {
    if (root === null) return 0
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

console.log('maxdepth', maxDepth(root));

/* execution explanation
 *
 * The stack execution is tricky. It's helpful to write this down on a
 * whiteboard to toally understand how the stack is storing every value
 * getting processed by the program.
 *
 * stack gets max depth scope
 * then stack travels to left based on the functions scope it recieved
 * then the function executed another stack scope for maxdepth (9)
 * then the maxdepth scope of 9 executes another stack scope for it's
 * two null properties. Each null property gets it's own stack scope 
 * quickky in sessession. then it travels up to 3's scope which hasnt 
 * finished executing. it returns a 1 as part of the scope.
 * then it travels to 20 gives that scope. 20 goes down into 15's 
 * scope. 15 returns 0 twice for each null values scope. then it 
 * returns 1 to the 20's scope but 20 hasn't finished executing so 
 * then 20s function exectuion travels down to 7 and 7 returns a 1 
 * to 20's scope after it's two null scopes return 0. 20 compares 1
 * and 1, select one of the two 1s and then adds a 1 to return 2 to 
 * the 3's scope. 3 finally compares the 9's scope which gave it 1 
 * and then the 20's scope which returned it 2. It select 2 as being
 * higher value of the two of them and returns 3 to finish the 
 * functions most outer maxDepth's scope execution to finish the 
 * entire program. */

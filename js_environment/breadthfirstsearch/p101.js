//Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

//For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    //1
   /// \
  //2   2
 /// \ / \
//3  4 4  3
 

//But the following [1,2,2,null,3,null,3] is not:

    //1
   /// \
  //2   2
   //\   \
   //3    3
 

//Note:
//Bonus points if you could solve it both recursively and iteratively.
//


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(2)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(4)
root.right.left = new TreeNode(4)
root.right.right = new TreeNode(3)


//const root = TreeNode(1);
//root.left = TreeNode(2);
//root.right = TreeNode(2);
//root.left.right = TreeNode(3)
//root.right.right = TreeNode(3)

var isSymmetric = function(root) {
    const queue = []
    queue.push(root)
    
    while (queue.length > 0) {
        var currentNode = queue[0];

        if (currentNode.left !== null) {
          queue.push(currentNode.left)
        }
        if (currentNode.right !== null) {
          queue.push(currentNode.right)
        }
        queue.shift()
    }
};

console.log(isSymmetric(root))

function levelOrderSearch(rootNode) {
  // Check that a root node exists.
  if (rootNode === null) {
    return;
  }
  
  // Create our queue and push our root node into it.
  var queue = [];
  queue.push(rootNode);
  
  // Continue searching through as queue as long as it's not empty.
  while (queue.length > 0) {
    // Create a reference to currentNode, at the top of the queue.
    var currentNode = queue[0];

    // If currentNode has a left child node, add it to the queue.
    if (currentNode.left !== null) {
      queue.push(currentNode.left)
    }
    // If currentNode has a right child node, add it to the queue.
    if (currentNode.right !== null) {
      queue.push(currentNode.right)
    }
    // Remove the currentNode from the queue.
    queue.shift()
  }

  // Continue looping through the queue until it's empty!
}

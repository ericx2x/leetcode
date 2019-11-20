
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

console.log(levelOrderSearch(root))

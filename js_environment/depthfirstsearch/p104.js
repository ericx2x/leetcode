function TreeNode(v){
  this.val = v;
  this.left = null;
  this.right = null;
};

root = new TreeNode(3);
root.left = 9;
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log('root', root);

var maxDepth = function(root) {
    if (!root) { return 0; }

    var left = maxDepth(root.left);
    var right = maxDepth(root.right);

    return 1 + Math.max(left, right);
};

console.log(maxDepth());

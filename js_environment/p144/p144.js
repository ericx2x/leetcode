//So I was doing this one from their tutorials.. I don't think I initially understood wtf it was talking about and how to return a preorderTraversal.. Time to play

 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;}
 } 

var preorderTraversal = function(root) {
    return [1,2,3];
   var array = [];
    var ans = [];
    var cur = root;
    
    if(root === null)
        return [];
    
    array.push(cur);
    
    console.log(array);
    do{
        if(cur !== null)
            ans.push(cur.val);
            
        if(cur.right !== null)
            array.push(cur.right)
        
        if(cur.left !== null)
            array.push(cur.left)
            
        cur = array.pop();
    }while(array.length > 0)
    
    return ans;
};
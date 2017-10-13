function TreeNode(x) {
   this.val = x;
   this.left = null;
   this.right = null;
}

function reConstructBinaryTree(pre, vin)
{

 var treeNode = _reConstructBinaryTree(pre,0,pre.length-1,vin,0,vin.length-1);
    return treeNode;
}

function _reConstructBinaryTree(pre,prestart,prend,vin,vinstart,vinend) {
  if(prestart > prend || vinstart > vinend) {
    return null;
  }
  var root = new TreeNode(pre[prestart]);
  for(var i = vinstart; i <=vinend; i++) {
    if(vin[i] == pre[prestart]) {
      root.left = _reConstructBinaryTree(pre,prestart+1,prestart+i-vinstart,vin,vinstart, i-1);
      root.right = _reConstructBinaryTree(pre, prestart+i+1-vinstart,prend,vin,i+1,vinend);
    }
  }
  return root;
}

'use strict';

const BinarySearchTree = require('./bst');


function height(bst){
  if(!bst){
    return 0;
  }
  let leftHeight = height(bst.left);
  let rightHeight = height(bst.right);
  return Math.max(leftHeight, rightHeight)+1;
}

// function isBST(bst, min = 0, max = 10){
//   //base case
//   if(!bst){
//     return true;
//   }

//   console.log('min: '+bst.left, min);
//   console.log('max: '+bst.right, max);
  

//   if((bst.left < min) || (bst.right>max)){
//     return false;
//   }
//   //recursive case
//   return (isBST(bst.left, null, bst.key) && isBST(bst.right, bst.key, null));
// }

function isBST(bst, min = null, max = null){
  //base cases
  if(max!== null && bst.key > max){
    return false;
  }
  if(min!==null && bst.key < min){
    return false;
  }
  //recursive cases
  if(bst.left && !isBST(bst.left, min, bst.key)){
    return false;
  }
  if(bst.right && !isBST(bst.right, bst.key, max)){
    return false;
  }

  return true;
}

// function isBST2(bst){
//   if(!bst){
//     return true;
//   }
//   if((bst.left && bst.key < bst.left)||(bst.right && bst.key > bst.right)){
//     return false;
//   }
//   return (isBST2(bst.left)&&isBST2(bst.right));
// }

function main(){
  const BST = new BinarySearchTree();
  BST.insert(3, true);
  BST.insert(1, true);
  BST.insert(4, true);
  BST.insert(6, true);
  BST.insert(9, true);
  BST.insert(2, true);
  BST.insert(5, true);
  BST.insert(7, true);

  //console.log(BST);
  console.log(height(BST));
  console.log(isBST(BST));

  const BST2 = new BinarySearchTree();
  BST2.insert(3, true);
  BST2.insert(4, true);
  console.log(isBST(BST2));
}

main();
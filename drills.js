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

 
/*Third largest node
Write an algorithm to find the third largest node in a binary search tree
input:   
      3
    /   \
   5     13
  / \   /  \
 3   7 11  15

 output: 11 

 base case  if (node === null)  return 

 reverse in order traversal 

 max is right most 

 upon finding max move to parent and to that key.left
 return that. 

*/
function nthLargest(bst, state){
  
  if(bst.right){
    nthLargest(bst.right, state); 
    if(state.result) return state.result; 
  }
  if(!--state.n){
    state.result = bst.key; 
    return state.result; 
  }
  if(bst.left){
    nthLargest(bst.left, state);
  }
}

function isBalanced(bst){
  let leftHeight;
  let rightHeight;
  //base case
  if(bst === null){
    return true;
  }
  leftHeight = height(bst.left);
  rightHeight = height(bst.right);
  console.log('key: '+bst.key,'left: '+leftHeight, 'right: '+rightHeight);
  //recursive case
  if((Math.abs(leftHeight-rightHeight)<=1)
    && isBalanced(bst.left)
    && isBalanced(bst.right)){
    return true;
  }
  return false;
  
}


function main(){
  const BST = new BinarySearchTree();
  BST.insert(2, true);
  BST.insert(1, true);
  BST.insert(3, true);
  BST.insert(6, true);
  BST.insert(9, true);
  BST.insert(2.5, true);
  BST.insert(5, true);
  BST.insert(0.5, true);
  BST.insert(0.25,true);


  const answer = isBalanced(BST);
  console.log(answer);


  //const answer = nthLargest(BST, {n:3}); 
  //console.log(answer); 
  // //console.log(BST);
  // console.log(height(BST));
  // console.log(isBST(BST));

  // const BST2 = new BinarySearchTree();
  // BST2.insert(3, true);
  // BST2.insert(4, true);
  // console.log(isBST(BST2));
}

main();
/*
  Given a sorted array, write an algorithm that creates a
  binary search tree from the elements of the sorted 
  array in O(n) runtime. The resulting tree will be
  height balanced
*/

/* steps:
1. get the middle of the array and make it root
2. Recursively do the same for the left half and right half
  a. get the middle of the left half and make it left child of the root
  b. Get the middle of the right half and make it right child of the root

*/

//input: [3,5,7,9,11,13,15]
//output: [9,5,13,3,7,11,15]
/*
      3
    /   \
   5     13
  / \   /  \
 3   7  11  15
*/
'use strict';
const BinarySearchTree = require('./bst');

function sortedArrayToBST(arr, start=0, end=arr.length-1){
  //base case
  if(start>end){
    return null;
  }
  //get the middle element and make it root
  let mid = Math.floor((start+end)/2);
  let bst = new BinarySearchTree(arr[mid]);

  bst.left = sortedArrayToBST(arr, start, mid-1);
  bst.right = sortedArrayToBST(arr, mid+1, end);

  return bst;
}

function print(bst){
  if(!bst){
    return;
  }
  console.log(bst.key);
  print(bst.left);
  print(bst.right);
}

function main(){
  let arr = [3,5,7,9,11,13,15];
  let n = arr.length;

  const answer = sortedArrayToBST(arr);
  console.log(print(answer));
}

main();
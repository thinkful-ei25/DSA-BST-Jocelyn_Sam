'use strict';

const BinarySearchTree = require('./bst');

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
  BST.remove(3);

  console.log(BST);
}

main();
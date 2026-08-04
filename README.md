# Binary Search Trees

Data structure project developed as part of the JavaScript path of [The Odin Project](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript), focused on implementing and working with a binary search tree.

## Project Objective

The main objective was to practice:
- Building a balanced BST from an array
- Inserting, searching, and removing values
- Tree traversals with callbacks
- Calculating height and depth
- Checking tree balance and rebalancing the tree

## What is it?

An implementation of the `Tree` class in JavaScript with methods to create and operate on a Binary Search Tree.

The initial tree is built from an array by removing duplicates, sorting the values, and constructing a balanced BST. The demo file includes a `prettyPrint` function to visualize the structure in the terminal.

## How to use

1. Enter the project folder:
   `Javascript/top-binary-search-trees`
2. Run the demo file:
   `node index.js`

## Features

- **`constructor(arr)`**: builds the tree from an array of numbers
- **`includes(value)`**: checks whether a value exists in the tree
- **`insert(value)`**: inserts a new value into the BST
- **`deleteItem(value)`**: removes a value from the tree
- **`levelOrderForEach(callback)`**: traverses the tree in breadth-first order
- **`inOrderForEach(callback)`**: inorder traversal
- **`preOrderForEach(callback)`**: preorder traversal
- **`postOrderForEach(callback)`**: postorder traversal
- **`height(value)`**: returns the height of the requested node
- **`depth(value)`**: returns the depth of the requested node
- **`isBalanced()`**: checks whether the tree is balanced
- **`rebalance()`**: rebalances the current tree

## File Structure

- `Tree.js`: implementation of the `Tree` class and BST algorithms
- `index.js`: demo script with tree creation and method calls

## Technologies Used

- JavaScript (ES Modules)

---

Project developed following: [The Odin Project - Binary Search Trees](https://www.theodinproject.com/lessons/javascript-binary-search-trees)

📍 **Main repository with all projects**: [ChristoferLv/TheOdinProject](https://github.com/ChristoferLv/TheOdinProject)

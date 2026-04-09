import Tree from "./Tree.js";

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null || node === undefined) {
        return;
    }

    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
}

const numbers = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(numbers);

console.log("Árvore criada");
prettyPrint(tree.root);

console.log("Inclui 1: ", tree.includes(1));
console.log("Inclui 11: ", tree.includes(11));
console.log("Inclui 67: ", tree.includes(67));

console.log("Insere 1, 67 e 323");
tree.insert(1);
tree.insert(67);
tree.insert(323);

prettyPrint(tree.root);
console.log("Deleta 3, 5 e 67");
tree.deleteItem(3);
tree.deleteItem(5);
tree.deleteItem(67);
prettyPrint(tree.root);

function here(value) {
    console.log("Estive em: ", value);
}

console.log("Level order traversal: ");
tree.levelOrderForEach(here);

console.log("Inorder traversal: ");
tree.inOrderForEach(here);

console.log("Preorder traversal: ");
tree.preOrderForEach(here);

console.log("Postorder traversal: ");
tree.postOrderForEach(here);

prettyPrint(tree.root);
console.log("Height de 323", tree.height(323));
console.log("Height de 914", tree.height(914));

prettyPrint(tree.root);
console.log("Depth de 6345", tree.depth(6345));
console.log("Depth de 14", tree.depth(14));

prettyPrint(tree.root);
console.log("Is balanced: ", tree.isBalanced());

console.log("Insere 2, 3, 5, 777, 8888 e 6543");
tree.insert(2);
tree.insert(3);
tree.insert(5);
tree.insert(7777);
tree.insert(8888);
tree.insert(6543);
prettyPrint(tree.root);
console.log("Rebalanceia.");
tree.rebalance();
prettyPrint(tree.root);

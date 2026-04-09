/**
 * @typedef {Object} TreeNode
 * @property {number} data
 * @property {TreeNode} left
 * @property {TreeNode} right
 * 
 * @param {number} data 
 * @returns {TreeNode}
 */
function NodeMaker(data) {
    let left = null;
    let right = null;

    return { data, left, right };
}

class Tree {
    /**@type {TreeNode} */
    #root;

    get root() {
        return this.#root;
    }

    /**
     * 
     * @param {number[]} arr 
     */
    constructor(arr) {
        this.#root = this.#buildTree(arr);
    }

    /**
    * 
    * @param {number[]} arr 
    * @param {number} start 
    * @param {number} end 
    * @returns {TreeNode}
    */
    #treeBuilder(arr, start, end) {
        if (start > end) return null;
        const middle = Math.trunc(start + (end - start) / 2);
        const root = NodeMaker(arr[middle]);

        // (Otimização)É possível adicionar essa verificação antes da chamada recursiva para 
        // não fazer uma chamada inútil, pois como esse é a verificação do caso base, evitaria 
        // quase metade das chamadas que na verdade vão só retornar sem fazer nada, e então removeria 
        // a verificação if (start > end) return null; se essa linha estiver ativa, valido tambem para
        // a chamada do right
        // if (!(start > middle - 1))
        root.left = this.#treeBuilder(arr, start, middle - 1);
        // if (!(middle + 1 > end))
        root.right = this.#treeBuilder(arr, middle + 1, end);

        return root;
    }

    /**
     * 
     * @param {number[]} arr 
     * @returns {TreeNode}
    */
    #buildTree(arr) {
        const uniques = [...new Set(arr)];
        const sortedArr = uniques.sort((a, b) => a - b);
        return this.#treeBuilder(sortedArr, 0, sortedArr.length - 1);
    }

    /**
     * 
     * @param {TreeNode} node 
     * @param {number} value 
     * @returns {boolean}
     */
    #checkInclude(node, value) {
        if (node == null) return false;
        if (node.data == value) return true;
        else if (node.data > value) return this.#checkInclude(node.left, value);
        else return this.#checkInclude(node.right, value);
    }

    /**
     * 
     * @param {number} value
     * @returns {boolean}
     */
    includes(value) {
        return this.#checkInclude(this.#root, value);
    }

    /**
     * 
     * @param {TreeNode} node 
     * @param {number} value 
     */
    #makeInsert(node, value) {
        if (node.data == value) return;
        else if (node.data > value) {
            if (node.left == null) {
                node.left = NodeMaker(value);
            } else {
                this.#makeInsert(node.left, value);
            }
        }
        else {
            if (node.right == null) {
                node.right = NodeMaker(value);
            } else {
                this.#makeInsert(node.right, value);
            }
        }
    }

    /**
     * 
     * @param {number} value 
     */
    insert(value) {
        this.#makeInsert(this.#root, value);
    }

    /**
     * 
     * @param {TreeNode} node 
     * @returns {TreeNode}
     */
    #getInorderSuccessor(node) {
        if (node != null && node.left != null)
            return this.#getInorderSuccessor(node.left);
        return node;
    }

    /**
     * 
     * @param {TreeNode} node 
     * @param {number} value 
     * @returns 
     */
    #makeDelete(node, value) {
        if (node == null) return node;

        if (node.data > value) {
            node.left = this.#makeDelete(node.left, value);
        } else if (node.data < value) {
            node.right = this.#makeDelete(node.right, value);
        } else {
            if (node.left == null) {
                const tempNode = node.right;
                return tempNode;
            }
            if (node.right == null) {
                const tempNode = node.left;
                return tempNode;
            }
            const successor = this.#getInorderSuccessor(node.right);
            node.data = successor.data;
            node.right = this.#makeDelete(node.right, successor.data);
        }
        return node;
    }

    /**
     * 
     * @param {number} value 
     */
    deleteItem(value) {
        this.#makeDelete(this.#root, value);
    }

    /**
     * 
     * @param {TreeNode} node 
     * @param {Function} callback 
     */
    #traverseLevelOrder(node, callback) {
        const queue = [];
        queue.push(node);
        while (queue.length != 0) {
            const currNode = queue.shift();
            callback(currNode.data);
            if (currNode.left) queue.push(currNode.left);
            if (currNode.right) queue.push(currNode.right);
        }
    }

    /**
     * 
     * @param {Function} callback 
     * @param {TreeNode[]} queue 
     * @returns 
     */
    #traverseLevelOrderRecur(callback, queue) {
        if (queue.length == 0) return;
        const currNode = queue.shift();
        callback(currNode.data);
        if (currNode.left) queue.push(currNode.left);
        if (currNode.right) queue.push(currNode.right);
        this.#traverseLevelOrderRecur(callback, queue);
    }

    /**
     * 
     * @param {Function} callback 
     */
    levelOrderForEach(callback) {
        if (!callback) throw TypeError("undefined is not a function");
        if (this.#root == null) return;
        this.#traverseLevelOrder(this.#root, callback); //Iterativo
        // this.#traverseLevelOrderRecur(callback, [this.#root]); //Recursivo
    }

    /**
     * 
     * @param {TreeNode} node 
     * @param {Function} callback 
     * @returns 
     */
    #traverseInOrder(node, callback) {
        if (node == null) return;
        this.#traverseInOrder(node.left, callback);
        callback(node.data);
        this.#traverseInOrder(node.right, callback);
    }

    /**
     * 
     * @param {TreeNode} node 
     * @param {Function} callback 
     */
    #traversePreOrder(node, callback) {
        if (node == null) return;
        callback(node.data);
        this.#traversePreOrder(node.left, callback);
        this.#traversePreOrder(node.right, callback);
    }

    /**
     * 
     * @param {TreeNode} node 
     * @param {Function} callback 
     */
    #traversePostOrder(node, callback) {
        if (node == null) return;
        this.#traversePostOrder(node.left, callback);
        this.#traversePostOrder(node.right, callback);
        callback(node.data);
    }

    /**
     * 
     * @param {Function} callback 
     */
    inOrderForEach(callback) {
        if (!callback) throw TypeError("undefined is not a function");
        this.#traverseInOrder(this.#root, callback);
    }

    /**
     * 
     * @param {Function} callback 
     */
    preOrderForEach(callback) {
        if (!callback) throw TypeError("undefined is not a function");
        this.#traversePreOrder(this.#root, callback);
    }

    /**
     * 
     * @param {Function} callback 
     */
    postOrderForEach(callback) {
        if (!callback) throw TypeError("undefined is not a function");
        this.#traversePostOrder(this.#root, callback);
    }

    /**
     * 
     * @param {TreeNode} node 
     * @param {number} height 
     * @returns {number}
     */
    #checkHeigth(node, height) {
        if (node == null) return -1;
        const leftHeight = this.#checkHeigth(node.left, height);
        const rightHeight = this.#checkHeigth(node.right, height);
        if (leftHeight > rightHeight) return leftHeight + 1;
        return rightHeight + 1;
    }

    /**
     * 
     * @param {number} value Valor do nó que terá a altura verificada.
     * @returns {number|undefined} Retorna a altura ou undefined se o valor não for encontrado.
     */
    height(value) {
        let root = this.#root;
        while (root != null) {
            if (root.data == value) break;
            if (root.data > value) root = root.left;
            else root = root.right;
        }
        if (!root) return undefined;
        return this.#checkHeigth(root, 0);
    }

    /**
     * 
     * @param {number} value Valor do nó que terá a profundidade verificada.
     * @returns {number|undefined} Retorna a profundidade ou undefined se o valor não for encontrado.
     */
    depth(value) {
        let root = this.#root;
        let depth = 0;
        while (root != null) {
            if (root.data == value) break;
            if (root.data > value) root = root.left;
            else root = root.right;
            depth = depth + 1;
        }
        if (root == null) return undefined;
        return depth;
    }

    /**
     * 
     * @param {TreeNode} node 
     * @returns {number} Se retorno != -1, a árvore está balanceada.
     */
    #checkBalanced(node) {
        if (node.left == null && node.right == null) return 0;

        let leftHeight = 0;
        if (node.left != null) leftHeight = this.#checkBalanced(node.left);
        if (leftHeight == -1) return -1;

        let rightHeight = 0;
        if (node.right != null) rightHeight = this.#checkBalanced(node.right);
        if (rightHeight == -1) return -1;

        if (Math.abs(leftHeight - rightHeight) >= 2) return -1;

        if (leftHeight > rightHeight) return leftHeight + 1;
        return rightHeight + 1;
    }

    /**
     * 
     * @returns {boolean} Se a árvore esta balanceada ou não.
     */
    isBalanced() {
        return this.#checkBalanced(this.#root) != -1;
    }

    /**
     * 
     * @param {TreeNode} node 
     * @param {number[]} arr 
     */
    #getOrdered(node, arr) {
        if (node == null) return;
        this.#getOrdered(node.left, arr);
        arr.push(node.data);
        this.#getOrdered(node.right, arr);
    }

    rebalance() {
        const orderedArray = [];
        this.#getOrdered(this.#root, orderedArray);
        const newTree = this.#buildTree(orderedArray);
        this.#root = newTree;
    }
}

export default Tree;
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

export const preorderTraversal = (root) => {
    const result = [];
    const traversal = (node) => {
        if (node) {
            result.push(node.val);
            traversal(node.left);
            traversal(node.right);
        }
    };
    traversal(root);
    return result;
};

export const preorderTraversalIteration = (root) => {
    const result = [];
    const stack = [];

    if (root) stack.push(root);
    while (stack.length > 0) {
        const curNode = stack.pop();

        result.push(curNode.val);
        if (curNode.right) stack.push(curNode.right);
        if (curNode.left) stack.push(curNode.left);
    }
    return result;
};

export const inorderTraversal = (root) => {
    const result = [];
    const traversal = (node) => {
        if (node) {
            traversal(node.left);
            result.push(node.val);
            traversal(node.right);
        }
    };
    traversal(root);
    return result;
};

export const inorderTraversalIteration = (root) => {
    const result = [];
    const stack = [];
    let curNode = root;
    while (stack.length > 0 || curNode !== null) {
        if (curNode) {
            stack.push(curNode);
            curNode = curNode.left;
        } else {
            curNode = stack.pop();
            result.push(curNode.val);
            curNode = curNode.right;
        }
    }
    return result;
};

export const postorderTraversal = (root) => {
    const result = [];
    const traversal = (node) => {
        if (node) {
            traversal(node.left);
            traversal(node.right);
            result.push(node.val);
        }
    };
    traversal(root);
    return result;
};

export const postorderTraversalIteration = (root) => {
    const result = [];
    const stack = [];

    // 当根节点不为空的时候，将根节点入栈
    if (root) stack.push(root);
    while (stack.length > 0) {
        const curNode = stack.pop();
        // 根左右=>右左根
        result.unshift(curNode.val);

        if (curNode.left !== null) {
            stack.push(curNode.left);
        }
        if (curNode.right !== null) {
            stack.push(curNode.right);
        }
    }
    return result;
};
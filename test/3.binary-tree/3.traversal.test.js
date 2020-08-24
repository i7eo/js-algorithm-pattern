import {
    preorderTraversal,
    preorderTraversalWithoutRecursion,
    inorderTraversal,
    inorderTraversalWithoutRecursion,
    postorderTraversal,
    postorderTraversalWithoutRecursion
} from '../../3.binary-tree/basic/3.traversal.js'

const treeRoot1 = {
    left: null,
    val: 1,
    right: {
        left: {
            val: 2
        },
        val: 3,
        right: {
            left: {
                val: 4
            },
            val: 5,
        }
    }
}

const treeRoot2 = {
    left: {
        left: {
            left: {
                val: 1
            },
            val: 2,
            right: {
                val: 3
            }
        },
        val: 4,
        right: {
            left: {
                val: 5
            },
            val: 6,
            right: {
                val: 7
            }
        }
    },
    val: 8,
    right: {
        left: null,
        val: 9,
        right: {
            left: {
                val: 10
            },
            val: 11,
            right: {
                val: 12
            }
        }
    }
}

test('preorderTraversal:tree1', () => {
    expect(preorderTraversal(treeRoot1)).toEqual([1, 3, 2, 5, 4])
})

// test('preorderTraversal:tree2', () => {
//     expect(preorderTraversal(treeRoot2)).toEqual([1, 3, 2, 5, 4])
// })

// test('inorderTraversal:tree1', () => {
//     expect(inorderTraversal(treeRoot1)).toEqual([1, 3, 2, 5, 4])
// })

// test('inorderTraversal:tree2', () => {
//     expect(inorderTraversal(treeRoot2)).toEqual([1, 3, 2, 5, 4])
// })

// test('postorderTraversal:tree1', () => {
//     expect(postorderTraversal(treeRoot1)).toEqual([1, 3, 2, 5, 4])
// })

// test('postorderTraversal:tree2', () => {
//     expect(postorderTraversal(treeRoot2)).toEqual([1, 3, 2, 5, 4])
// })

// test('preorderTraversalWithoutRecursion:tree1', () => {
//     expect(preorderTraversalWithoutRecursion(treeRoot1)).toEqual([1, 3, 2, 5, 4])
// })

// test('preorderTraversalWithoutRecursion:tree2', () => {
//     expect(preorderTraversalWithoutRecursion(treeRoot2)).toEqual([1, 3, 2, 5, 4])
// })

// test('inorderTraversalWithoutRecursion:tree1', () => {
//     expect(inorderTraversalWithoutRecursion(treeRoot1)).toEqual([1, 3, 2, 5, 4])
// })

// test('inorderTraversalWithoutRecursion:tree2', () => {
//     expect(inorderTraversalWithoutRecursion(treeRoot2)).toEqual([1, 3, 2, 5, 4])
// })

// test('postorderTraversalWithoutRecursion:tree1', () => {
//     expect(postorderTraversalWithoutRecursion(treeRoot1)).toEqual([1, 3, 2, 5, 4])
// })

// test('postorderTraversalWithoutRecursion:tree2', () => {
//     expect(postorderTraversalWithoutRecursion(treeRoot2)).toEqual([1, 3, 2, 5, 4])
// })
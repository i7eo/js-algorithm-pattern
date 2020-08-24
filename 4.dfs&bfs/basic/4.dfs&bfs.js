export const dfsRecursion = (node) => {
    let result = []
    if (node) {
        const children = node.children
        // result.push(node)
        result.push(node.val)
        if(children) {
            for (let i = 0; i < children.length; i++) {
                result = result.concat(dfsRecursion(children[i]))
            }
        }
    }
    return result;
}

export const dfsIteration = (node) => {
    const result = []
    const stack = []

    if (node) {
        stack.push(node)
        while (stack.length) {
            const cur = stack.pop()
            const children = cur.children
            // result.push(cur)
            result.push(cur.val)
            //必须倒序, 否则则变为广度
            if(children) {
                for (let i = children.length - 1; i >= 0; i--) {
                    stack.push(children[i])
                }
            }
        }
    }

    return result;
}

export const bfsIteration = (node) => {
    const result = []
    const queue = []

    if (node) {
        queue.push(node)
        while (queue.length) {
            const cur = queue.shift()
            const children = cur.children
            // result.push(cur)
            result.push(cur.val)
            if(children) {
                for (let i = 0; i < children.length; i++) {
                    queue.push(children[i])
                }
            }
        }
    }

    return result
}
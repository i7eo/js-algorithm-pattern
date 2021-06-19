// [1,5,6,9,3,5,4]
// 每一次用当前的元素与前一个元素比较找出最小的元素并交换 O(n2)

function selectedSort (target) {
    let minIdx = 0
    for (let i = 0; i < target.length; i++) {
        for (let j = i + 1; j < target.length; j++) {
            if (target[j] < target[i]) {
                minIdx = j
                let temp = target[i]
                target[i] = target[minIdx]
                target[minIdx] = temp
            }
        }
    }
    return target
}

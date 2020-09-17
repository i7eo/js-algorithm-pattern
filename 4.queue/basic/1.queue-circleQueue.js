// leetcode: 622.设计循环队列

/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function (k) {
    this.size = k;
    this.head = -1;
    this.tail = -1;
    this.queue = [];
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (this.isFull()) {
        return false;
    }
    if (this.isEmpty()) {
        this.head = 0;
    }
    this.tail = (this.tail + 1) % this.size;
    this.queue[this.tail] = value;
    return true;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (this.isEmpty()) {
        return false;
    }
    if (this.head == this.tail) {
        this.head = this.tail = -1;
        return true;
    }
    this.head = (this.head + 1) % this.size;
    return true;
};

/**
 * Get the head item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    if (this.isEmpty()) {
        return -1;
    }
    return this.queue[this.head];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    if (this.isEmpty()) {
        return -1;
    }
    return this.queue[this.tail];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.head === -1;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return this.head === (this.tail + 1) % this.size;
};

var obj = new MyCircularQueue(3);
obj.enQueue(1);
obj.enQueue(2);
obj.enQueue(3);
obj.enQueue(4);
var param_2 = obj.deQueue();
var param_3 = obj.Front();
var param_4 = obj.Rear();
var param_5 = obj.isEmpty();
var param_6 = obj.isFull();
console.log(param_3);
console.log(param_4);
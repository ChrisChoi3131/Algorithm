class Queue {
  constructor() {
    this.dataStore = [];
  }
  enqueue(element) {
    this.dataStore.unshift(element);
  }
  dequeue() {
    return this.dataStore.pop();
  }
  peek() {
    return this.dataStore[this.dataStore.length - 1];
  }
  toString() {
    return this.dataStore.join("\n");
  }
  isEmpty() {
    return !this.dataStore[0];
  }
}

let queue = new Queue();
console.log();
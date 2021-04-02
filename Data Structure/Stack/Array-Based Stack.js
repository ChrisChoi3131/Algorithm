class Stack {
  constructor() {
    this.dataStore = [];
  }
  push(element) {
    this.dataStore.push(element);
  }
  pop() {
    return this.dataStore.pop();
  }
  peek() {
    return this.dataStore[this.dataStore.length - 1];
  }
  toArray() {
    return this.dataStore;
  }
  toString() {
    return this.dataStore.join("\n");
  }
  isEmpty() {
    return !this.dataStore[0];
  }
}

let stack = new Stack();
console.log();
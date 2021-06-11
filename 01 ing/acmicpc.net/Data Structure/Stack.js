class Stack {
  constructor() {
    this._arr = [];
  }
  push(value) {
    return this._arr.push(value);
  }
  pop() {
    if (this.isEmpty()) {
      return -1;
    } else {
      return this._arr.pop();
    }
  }
  size() {
    return this._arr.length();
  }
  isEmpty() {
    if (this._arr.length() === 0) {
      return 1;
    } else {
      return 0;
    }
  }
  top() {
    if (this.isEmpty()) {
      return -1;
    } else {
      return this._arr[this._arr.length() - 1];
    }
  }
}

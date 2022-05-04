class Logger {
  constructor() {
    this.map = new Map();
  }
}

/**
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function (timestamp, message) {
  if (this.map.get(message) === undefined) {
    this.map.set(message, timestamp + 10);
    return true;
  } else {
    if (timestamp >= this.map.get(message)) {
      this.map.set(message, timestamp + 10);
      return true;
    } else return false;
  }
};

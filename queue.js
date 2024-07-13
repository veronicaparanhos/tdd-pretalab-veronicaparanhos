class Queue {
  elements;
  constructor() {
    this.elements = [];
  }

  size() {
    return this.elements.length;
  }

  add(item) {
    return this.elements.push(item);
  }

  peek() {
    const primeiroItem = this.elements[0];
    return primeiroItem;
  }

  dequeue() {
    return this.elements.shift();
  }
}

module.exports = Queue;

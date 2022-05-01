const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor(...elements) {
    this._elements = [];

    if (elements.length > 0)
      elements.forEach((element) => this._elements.push(element));
  }

  push(...elements) {
    //push item to the stack
    elements.forEach((element) => this._elements.push(element));
    return this._elements;
  }

  pop(count = 0) {
    //pull out the topmost item (last item) from stack
    if (count === 0) return this._elements.pop();
    else return this._elements.splice(-count, count);
  }

  peek() {
    // see what's the last item in stack
    return this._elements[this._elements.length - 1];
  }
}

module.exports = {
  Stack,
};

module.exports = {
  Stack,
};

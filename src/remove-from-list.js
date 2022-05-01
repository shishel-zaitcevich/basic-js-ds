const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

// [1, 2, 3, 3, 4, 5]

function removeKFromList(l, k) {
  // throw new NotImplementedError("Not implemented");

  if (l == null) {
    //если список пустой  - венуть список
    return l;
  }
  while (l.value == k) {
    l = l.next; // не понял
  }
  let thisNode = l; // 2
  let nextNode = thisNode.next; //3_1
  while (nextNode != null) {
    // этот список не пуст
    if (nextNode.value == k) {
      //3_1
      //если след элемент равен к
      thisNode.next = nextNode.next; //3_2
      nextNode = thisNode.next; // 5
      // элементов больше нет, если удален последний элемент
      if (thisNode.next == null) break;
      // let current = this.root;
    } else {
      thisNode = thisNode.next; // 4
      nextNode = thisNode.next; // 5
    }

    //где-то нужно прописать рекурсию, чтобы она проверила, есть ли еще узел k
  }
  return l;
}

module.exports = {
  removeKFromList,
};

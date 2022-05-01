const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this.rootValue = null; // т.к. дерево пустое
  }

  root() {
    return this.rootValue;
  }

  add(data) {
    this.rootValue = addWithin(this.rootValue, data); // смотрим в корень поддерева

    function addWithin(node, data) {
      if (!node) {
        // если узна нет, можно сюда добавить нов узел
        return new Node(data); // добавляем
      }

      // if (data === this.root) {
      //   return this.root;
      // }

      if (node.data === data) {
        // если значение равно уже существующему, то возвр текущий узел
        return node;
      }

      if (data < node.data) {
        // если зн меньше текущ узла
        node.left = addWithin(node.left, data); // к лев потомку положим нов узел либо самого себя либо заново вызыв эддвисин
      } else {
        node.right = addWithin(node.right, data); // иначе в прав потомок текущ узла = тому, что вернет эддвисин в правом поддереве
      }

      return node;
    }
  }

  has(data) {
    return searchWithin(this.rootValue, data); //

    function searchWithin(node, data) {
      if (!node) {
        //если налл т.е.  узла нет
        return false;
      }

      if (node.data === data) {
        // если узел равен искомому
        return true; // если нашли значение, то вернем тру
      }

      return data < node.data
        ? searchWithin(node.left, data)
        : searchWithin(node.right, data);
    }
  }

  find(data) {
    return findData(this.rootValue, data); //

    function findData(node, data) {
      if (!node) {
        //если налл т.е.  узла нет
        return null;
      }

      if (node.data === data) {
        // если узел равен искомому
        return node; // если нашли значение, то вернем тру
      }

      return data < node.data
        ? findData(node.left, data)
        : findData(node.right, data);
    }
  }

  remove(data) {
    this.rootValue = removeNode(this.rootValue, data); // кладем в рут то, что получится в итоге

    function removeNode(node, data) {
      if (!node) {
        // если нет узла, то оставляем налл
        return null;
      }

      if (data < node.data) {
        //если искомое меньше текущего
        node.left = removeNode(node.left, data); // то в лев узле удалить искомое и положить в лев поддерево без удаленного узла
        return node; //вернуть  обновленное поддерево
      } else if (node.data < data) {
        node.right = removeNode(node.right, data); // фналогично лев
        return node;
      } else {
        // equal - should remove this item
        if (!node.left && !node.right) {
          //узел сущ-ет, знач-е равно тому, что нах-ся в узле и не имеет левых и правых потомков
          // put null instead of item
          return null; //удалили и вернули налл
        }

        if (!node.left) {
          //если нет левого потомка
          // set right child instead of item
          node = node.right; //помещаем правое поддерево
          return node; // возвр обновленный рез-т
        }

        if (!node.right) {
          // нет правого поддерева
          // set left child instead of item
          node = node.left;
          return node;
        }

        // both children exists for this item есть оба поддерева
        let minFromRight = node.right; //берем самый левый узел из правого поддерева
        while (minFromRight.left) {
          //искать начинаем с корня прав поддерева
          minFromRight = minFromRight.left; //начинаем искать в лев поддереве
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data); //обновляем прав поддерево с помощью удаления

        return node; //вернуть текущий узел
      }
    }
  }

  min() {
    if (!this.rootValue) {
      //есть ли корни дерева
      return;
    }

    let node = this.rootValue; // начинаем искать с корня
    while (node.left) {
      //до самого левого - самый маленький
      node = node.left;
    }

    return node.data; //возвращаем его знач
  }

  max() {
    if (!this.rootValue) {
      return;
    }

    let node = this.rootValue;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyList {
  constructor() {
    this._length = 0;
    this.head = null;
    this.tail = null;
  }

  add(value) {
    var node = new Node(value);
    var currentNode = this.head;

    // Use case #1: empty list
    if (!currentNode) {
      this.head = node;
      this.tail = node;
      this._length++;
      return node;
    }

    // Use case #2: non-empty list
    while (currentNode.next) {
      currentNode = currentNode.next;
    }


    currentNode.next = node;
    node.prev = currentNode;
    this.tail = node;
    this._length++;
    return node;
  }

  search(position) {
    var currentNode = this.head;
    var length = this._length;
    var count = 1;

    // Use case #1: invalid position
    if (length === 0 || position < 1 || position > length) {
      throw new Error("Node does not exist");
    }

    // Use case #2: valid position
    while (count < position) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  }

  remove(position) {
    var currentNode = this.head;
    var length = this._length;
    var count = 1;
    var beforeNodeToDelete = null;
    var nodeToDelete = null;
    var afterNodeToDelete = null;
    var deletedNode = null;

    // Use case #1: invalid position
    if (length === 0 || position < 1 || position > length) {
      throw new Error("Node does not exist");
    }

    // Use case #2: first node is being removed
    if (position === 1) {
      this.head = currentNode.next;
      currentNode.next.prev = null;
      deletedNode = currentNode;
      currentNode = null;
      this._length--;

      return deletedNode;
    }

    // Use case #3: any other node is removed
    while (count < position) {
      beforeNodeToDelete = currentNode;
      currentNode = currentNode.next;
      afterNodeToDelete = currentNode.next;

      count++;
    }

    nodeToDelete = currentNode;

    beforeNodeToDelete.next = nodeToDelete.next;
    afterNodeToDelete.prev = nodeToDelete.prev;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;

    return deletedNode;
  }
}

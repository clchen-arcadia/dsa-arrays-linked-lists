/** Node: node for a doubly linked list. */

class Node {
  val = null;
  next = null;
  prev = null;

  constructor(val) {
    this.val = val;
  }
}

class DoublyLinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** get(idx) returns a node at the given index */

  _get(idx) {
    if(this.length === 0) return null;
    if(idx < 0 || idx >= this.length) throw new Error();

    if(idx <= Math.floor(this.length/2)){
      let counter = 0;
      let node = this.head;
      while(counter !== idx){
        node = node.next;
        counter++;
      }
      return node;
    } else {
      let counter = this.length - 1;
      let node = this.tail;
      while(counter !== idx) {
        node = node.prev;
        counter--;
      }
      return node;
    }
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  /** pop(): remove last item & return its value */

  pop() {
    if(this.length === 0) {
      throw new Error();
    }
    if(this.length === 1){
      const removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return removedNode.val;
    }

    const removedNode = this.tail;
    this.tail.next = null;
    this.tail = this.tail.prev;
    this.length--;
    return removedNode.val;
  }

  /** shift(): remove first item & return its value */

  shift() {
    if(this.length === 0){
      throw new Error();
    }

    if(this.length === 1){
      const removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return removedNode.val;
    }

    const removedNode = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
    return removedNode.val;
  }

  /** getAt(idx): get val at idx.*/

  getAt(idx) {
   
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
   
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
   
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
   
  }

  /** return average (mean) of list values. */

  average() {
   
  }
}

module.exports = DoublyLinkedList;

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  // shift
  shift() {
    if (!this.head === 0) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  // unshift
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
//   get
get(index){
    if(index < 0 || index >= this.length) return null
    let counter = 0;
    let current = this.head
    while(counter !== index){
        current = current.next
        counter++
    }
    return current
}
// set
set(index,val){
  var foundNode = this.get(index)
  if(foundNode){
    foundNode.val = val
    return true
  }
  return false
}
// insert
insert(index, val){
  if(index < 0 || index> this.length)return false
  if(index === this.length) return !!this.push(val)
  if(index === 0)return !!this.unshift(val)
  var newNode = new Node(val)
var prev = this.get(index - 1)
var temp = prev.next
prev.next = newNode
newNode.next = temp
this.length++
return true; 
}
// remove
remove(index){
  if(index < 0 || index >= this.length) return undefined
  if(index === 0)return this.shift()
  if(index === this.length - 1)return this.pop()
  var previousNode = this.get(index - 1)
var removed = previousNode.next
previousNode.next = removed.next
this.length--
return removed
}
reverse(){
  var node = this.head
  this.head = this.tail
  this.tail = node
  var next;
  var prev = null;
  for(var i = 0; i < this.length; i++){
    next = node.next
    node.next = prev
    prev = node
    node = next;
  }
  return this;
}
print(){
  var arr = []
  var current = this.head
  while(current){
    arr.push(current.val)
    current = current.next
  }
}
}
let list = new SinglyLinkedList();

// code evolution linked list
class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(){
    this.head = null
    this.size = 0
  }
  isEmpty(){
    return this.size === 0
  }
  getSize(){
    return this.size
  }
  prepend(value){
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node
    }else{
      node.next = this.head
      this.head = node
    }
    this.size++
  }
  print(){
    if(this.isEmpty()){
      console.log('List is empty')
    }else{
      let curr = this.head
      let listValues = ''
      while(curr){
        listValues += `${curr.value}`
        curr = curr.next
      }
      console.log(listValues)
    }
  }
}
const lis = new LinkedList()


const list1 = [1, 2, 4];
 const list2 = [1, 3, 4];
 var mergeTwoLists = function (list1, list2) {
  
//  const re = list1.concat(list2)
//   console.log(list1.concat(list2));
//   console.log(re.sort())
//   return re.sort()
let node = new Node(0,null)
let currentNode = node
while(list1 && list2){
if(list1.val< list2.val){
  currentNode.next = list1
  list1 = list1.next
}else{
  currentNode.next = list2
  list2 = list2.next
}
currentNode = currentNode.next;
}
currentNode.next = list1 || list2
return node.next
 };

 console.log(mergeTwoLists(list1, list2));
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
// class Node {
//   constructor(value){
//     this.value = value
//     this.next = null
//   }
// }

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
  append(value){
    const node = new Node( value)
    if(this.isEmpty()){
      this.head = Node
    }else{
      let prev = this.head
      while(prev.next){
        prev= prev.next
      }
      prev.next = node
    }
    this.size++
  }
  insert(value, index){
    if(index < 0 || index > this.size){
      return

    }
    if(index === 0){
      this.prepend(value)
    }else{
      const node = new Node(value)
      let prev = this.head
      for(let i = 0; i< index-1; i++){
        prev = prev.next
        prev.next = node
        this.size++
      }

    }
  }
  removeFrom(index){
    if (index < 0 || index > this.size) {
      return;
    }
    let removedNode
    if(index === 0){
      removedNode = this.head
      this.head = this.head.next
    }else{
      let prev = this.head
      for(let i = 0; i < index - 1; i++){
        prev = prev.next
      }
      removedNode = prev.next
      prev.next = removedNode.next
    }
    this.size--
    return removedNode.value
  }
  removeValue(value){
    if(this.isEmpty()){
      return null
    }
    if(this.head.value === value){
      this.head = this.head.next 
      this.size--
      return value
    }else {
      let prev = this.head
      while(prev.next && prev.next.value !== val){
        prev = prev.next
      }
      if(prev.next){
      const  removedNode = prev.next
        prev.next = removedNode.next
        this.size--
        return value
      }
      return null
    }
  }
  search(value){
    if(this.isEmpty()){
      return -1
    }
    let i = 0
    let curr = this.head
    while(curr){
      if(curr.value === value){
        return i
      }
      curr = curr.next
      i++
    }
    return -1
  }
  reverse(){
    let prev = null
    let curr = this.head
    while(curr){
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    this.head = prev
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

 
 function listNode(val, next) {
     this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

 const head = [1, 1, 2];
 var deleteDuplicates = function (head) {
  if(head === null) return head
  let temp = head;
  while(temp && temp.next){
    if(temp.next.val === temp.val){
      temp.next = temp.next.next
    }else {
      temp = temp.next
    }
  }
 
  return head
 };

 console.log(deleteDuplicates(head))


 const hea = [3, 2, 0, -4]
 const pos = 1;
 var hasCycle = function (hea) {
  let temp = hea;

  while (temp && temp.next) {
    hea = hea.next;
    temp = temp.next.next;
    if (hea === temp) return true;
  }
  return false;
 };

 console.log(hasCycle(hea));


 const listA = [4, 1, 8, 4, 5];
 const listB = [5, 6, 1, 8, 4, 5];
 var getIntersectionNode = function (headA, headB) {
   if (!headA || !headB) return null;
   let A = headA,
     B = headB;
   while (A != B) {
     A = A ? A.next : headB;
     B = B ? B.next : headA;
   }
   return A;

  //  with hash method
  // let set = new Set();
  // while (headA) {
  //   set.add(headA);
  //   headA = headA.next;
  // }
  // while (headB) {
  //   if (set.has(headB)) return headB;
  //   headB = headB.next;
  // }
  // return null;
 };

 console.log(getIntersectionNode(listA, listB));

// const head = [1, 2, 3, 4, 5];
 var middleNode = function (head) {
   let fast = head;
   let slow = head;
   while (fast && fast.next) {
     slow = slow.next;
     fast = fast.next.next;
   }
   return slow;
 };

 var getDecimalValue = function(head) {
    let temp = head, len = 0, sum =  0
    while(temp){
      temp = temp.next
      len++
    }
};
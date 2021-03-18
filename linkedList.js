class Node{
    constructor(data){
        this.data = data,
        this.next = null
    }
}

class LinkedList{
    constructor() {
        this.head = null;  
    }
}
let list = new LinkedList();

LinkedList.prototype.insertElementAtLast = function(data){
    let newNode =  new Node(data);
  
    if(!this.head){
        this.head = newNode;
        return this.head;
    }

    let tail = this.head;
    while(tail.next){
        tail = tail.next;
    }
    tail.next = newNode;
    return this.head;
}
LinkedList.prototype.insertElementAtFront = function(data){
    let newNode = new Node(data);
    newNode.next = this.head;
    

    this.head = newNode;

    return this.head;
}
LinkedList.prototype.getAt = function(index){
    let counter = 0;
    let node = this.head;
    while (node) {
        if (counter === index) {
           return node;
        }
        counter++;
        node = node.next;
    }
    return null;
}

LinkedList.prototype.deleteAnElementAt = function(index){
    if(!this.head){
        this.head = newNode(data);
       
        return;
    }

    if(index === 0){
        this.head = this.head.next;
       
        return;
    }
    const previous = this.getAt(index - 1);
    
    if (!previous || !previous.next) {
        return;
    }
    
    previous.next = previous.next.next;  
      
    return this.head;
}

LinkedList.prototype.getLengthOfLinkedList = function(){
    let count = 0; 
    let node = this.head;
    while (node) {
        count++;
        node = node.next
    }
    return count;
}

console.log(LinkedList.prototype.insertElementAtFront(5)); //inserting element 5 at front
console.log(LinkedList.prototype.insertElementAtLast(6));  //inserting element 6 at last
console.log(LinkedList.prototype.insertElementAtLast(7));  //inserting element 7 at last
console.log(LinkedList.prototype.insertElementAtLast(8));  //inserting element 8 at last
console.log(LinkedList.prototype.insertElementAtLast(9));  //inserting element 9 at last
console.log(LinkedList.prototype.deleteAnElementAt(4));    //deleting element which is at position 4
console.log(LinkedList.prototype.deleteAnElementAt(2));    //deleting element which is at position 2
console.log(LinkedList.prototype.insertElementAtFront(1)); //inserting element 1 at front
console.log("Length of LinkedList:",LinkedList.prototype.getLengthOfLinkedList());


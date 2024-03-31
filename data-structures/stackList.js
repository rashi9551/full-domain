class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class stack{
    constructor(){
        this.head=null
        this.tail=null
    }
    push(value){
        let node=new Node(value)
        if(!this.head)
        {
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
    }
    display(){
        let curr=this.head
        while(curr){
            console.log(curr.value);
            curr=curr.next
        }
    }
    pop(){
        this.head=this.head.next
    }
}

const s=new stack()
s.push(1)
s.push(2)
s.push(3)
s.push(4)
s.pop()
s.display()

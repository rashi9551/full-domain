class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class queue{
    constructor(){
        this.head=null
        this.tail=null
    }
    enqueue(value){
        let node=new Node(value)
        if(!this.head)
        {
            this.head=node
            this.tail=node
        }else{
            node.next=this.head
            this.head=node
        }
    }
    print()
    {
        let curr=this.head
        while(curr){
            console.log(curr.value);
            curr=curr.next
        }
    }
    dequeue()
    {
        let curr=this.head
        let prev=null
        while(curr.next)
        {
            prev=curr
            curr=curr.next
        }
        prev.next=null
    }
}
const q=new queue()

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.dequeue()
q.print()
class Node{
    constructor(value){
        this.value=value
        this.prev=null
        this.next=null
    }
}
class list{
    constructor(){
        this.head=null
    }
    append(value){
        let node=new Node(value)
        let curr=this.head
        if(!this.head)
        {
            this.head=node
        }else{
            while(curr.next)
            {
                curr=curr.next
            }
            node.prev=curr
            curr.next=node
        }
    }
    prepend(value)
    {
        let node=new Node(value)
        if(!this.head)
        {
            this.head=node
        }else{
            node.next=this.head
            this.head.prev=node
            this.head=node
        }
    }
    print()
    {
        let curr=this.head
        if(!this.head)return null
        else{
            while(curr)
            {
                console.log(curr.value + " -> ");
                curr=curr.next
            }
        }
    }
    reverse() {
        let curr = this.head;
        let prev = null;
        while (curr) {
            let next=curr.next
            curr.prev=next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head = prev;
      }
    remove(value)
    {
    let curr=this.head
    if(this.head.value==value){
        this.head=this.head.next
        return
    }
    while(curr)
    {
        if(curr.value==value)
        {
            curr.prev.next=curr.next
        }
        curr=curr.next
    }
    }
}

const l=new list()
l.prepend(5)
l.prepend(4)
l.prepend(3)
l.append(6)
// l.reverse()
l.remove(3)
l.print()
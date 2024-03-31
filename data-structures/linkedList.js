class Node{
    constructor(value)
    {
        this.value=value;
        this.next=null
    }
}

class list{
    constructor(){
        this.head=null
    }
    prepend(value)
    {
        const node =new Node(value)
        if(!this.head){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }

    }
    print()
    {
        if(!this.head)
        {
            return null
        }
        let curr=this.head
        while(curr)
        {
            console.log(curr.value);
            curr=curr.next
        }
    }
    append(value)
    {
        const node=new Node(value)
        if(!this.head)
        {
            this.head=node
        }
        else{
            let curr=this.head
            while(curr.next)
            {
                curr=curr.next
            }
            curr.next=node
        }
    }
    middle()
    {
        let slow=this.head
        let fast=this.head
        while(fast &&fast.next)
        {
            slow=slow.next
            fast=fast.next.next
        }
        console.log("middley",slow);
    }
    middleDelete()
    {
        let prev=null
        let slow=this.head
        let fast=this.head
        while(fast &&fast.next)
        {
            prev=slow
            slow=slow.next
            fast=fast.next.next
        }
        prev.next=slow.next
    }
    deleteWithIndex(index)
    {
        if(index===0)
        {
            this.head=this.head.next
        }
        else{
            let curr=this.head
            for(let i=0;i<index-1;i++)
            {
                curr=curr.next
            }
            if(curr.next.next)
            {
                curr.next=curr.next.next
            }
            else{
                curr.next=null
            }
        }
    }
    reverse()
    {
        let prev=null
        let curr=this.head
        while(curr)
        {
            let next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev
    }
    
}

const l=new list()

l.append(5)
l.append(3)
l.append(8)
l.append(7)
l.append(1)
l.middle()
// l.middleDelete()
// l.deleteWithIndex(4)
l.reverse()
l.print()

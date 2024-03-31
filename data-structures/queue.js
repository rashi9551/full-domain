class queue{
    constructor(){
        this.queue=[]
    }
    enqueue(value){
        this.queue.unshift(value)
    }
    dequeue(){
        this.queue.shift()
    }
    display(){
        console.log(this.queue);
    }
}

const q=new queue()
q.enqueue(4)
q.enqueue(3)
q.enqueue(2)
q.enqueue(1)
q.dequeue()
q.display()
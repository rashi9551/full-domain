class heapey{
    constructor()
    {
        this.heap=[]
    }
    buildHeap(arr){
        this.heap=arr
        for(let i=this.parent(this.heap.length-1);i>=0;i--)
        {
            this.shiftDown(i)
        }

    }
    insert(value)
    {
        this.heap.push(value)
        this.shiftUp(this.heap.length-1)
    }
    remove()
    {
        this.swap(this.heap,this.heap.length-1,0)
        this.heap.pop()
        this.shiftDown(0)
    }
    shiftUp(currentIndex){
        let parentIndex=this.parent(currentIndex)
        while(currentIndex>0 && this.heap[parentIndex]>this.heap[currentIndex])
        {
            this.swap(this.heap,currentIndex,parentIndex)
            currentIndex=parentIndex
            parentIndex=this.parent(currentIndex)
        }
    }
    shiftDown(currentIndex)
    {
        let endIndex=this.heap.length-1
        let leftChild=this.leftChild(currentIndex)
        while(leftChild<=endIndex)
        {
            let indexToShift;
            let rightChild=this.rightChild(currentIndex)
            if(rightChild<endIndex && this.heap[leftChild]<this.heap[rightChild])
            {
                indexToShift=leftChild
            }else{
                indexToShift=rightChild
            }

            if(this.heap[currentIndex]>this.heap[indexToShift])
            {
                this.swap(this.heap,currentIndex,indexToShift)
                currentIndex=indexToShift
                leftChild=this.leftChild(currentIndex)
            }else{
                return
            }
        }
    }
    swap(arr,i,j)
    {
        return [arr[i],arr[j]]=[arr[j],arr[i]]
    }
    display()
    {
        console.log(this.heap);
    }
    parent(i)
    {
        return Math.floor((i-1)/2)
    }
    leftChild(i)
    {
        return 2*i+1
    }
    rightChild(i)
    {
        return 2*i+2
    }
    peek(){
        return this.heap[0]
    }
    heapSort()
    {
        let sort=[]
        while(this.heap.length>0)
        {
            let min=this.peek()
            sort.push(min)
            this.remove()
        }
        console.log(sort);
    }

}
let arr=[5,7,1,2,3,6]
const h=new heapey()
h.buildHeap(arr)
h.display()
h.heapSort()
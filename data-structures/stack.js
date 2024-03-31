class stacks{
    constructor()
    {
        this.stack=[]
    }
    push(value)
    {
        this.stack.push(value)
    }
    pop(){
        this.stack.pop()
    }
    display(){
        console.log(this.stack);
    }
}
const stackey=new stacks()
stackey.push(6)
stackey.push(5)
stackey.push(4)
stackey.push(3)
stackey.pop()
stackey.display()
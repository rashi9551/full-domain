// call 
let student={
    name:"rashid",
    printName:function (){
        console.log(this.name);
    }
}
let student2={
    name:"rinshiya",
    
}

student.printName.call(student2)


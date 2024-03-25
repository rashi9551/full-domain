// const obj={
//     firstName:"Muhammed",
//     lasttName:"Rashid T",
//     printName:function (){
//         console.log(this.firstName+" "+this.lasttName);
//     }
// }
// const obj2={
//     firstName:"Ihan",
//     lasttName:"Malik T"
// }

// obj.printName.call(obj2)

const obj={
    firstName:"Muhammed",
    lasttName:"Rashid T",
}
function printName(home){
    console.log(this.firstName+" "+this.lasttName+" "+home);
}
const obj2={
    firstName:"Ihan",
    lasttName:"Malik T"
}

printName.call(obj2 ,"thayyullathil")
printName.apply(obj ,["thayyullathil"])
const bind=printName.bind(obj ,["kadavathur"])

setTimeout(()=>{
    bind()
},5000)
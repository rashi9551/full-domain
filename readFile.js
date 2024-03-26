const fs=require('fs')

fs.readFile(('./js.js'),'utf8',(err,data)=>{
    if(err){
        console.log(err);

    }
    else{
        console.log(data);
    }
})
const data="let a=10; console.log(a)"
// fs.writeFile('./datas.txt',data,(err)=>{
//     if(err)
//     {
//         console.log(err);
//     }else{
//         console.log("written succesfully");
//     }
// })

// fs.mkdir('./sampl.js',(err)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     else{
//         console.log("created succesfully");
//     }
// })
fs.appendFile('./js.js',data,(err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("created succesfully");
    }
})
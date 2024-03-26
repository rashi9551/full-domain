// console.log("Start");

// setTimeout(() => {
//   console.log("setTimeout callback");
// }, 0);

// console.log("End");


const printText = (textToprint) => console.log(textToprint);

setTimeout(printText, 0, "setTimeout"); // arguments after callback and delay are callback parametters

setImmediate(printText, "setImmediate")

let arr=[1,2,3,4]
Array.prototype.kootal=function(){
    let res=[]
    for(i=0;i<this.length;i++)
    {
        if(this[i]%2===0)res.push(this[i])
    }
return res
}

console.log(arr.kootal());
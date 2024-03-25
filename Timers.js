// console.log("Start");

// setTimeout(() => {
//   console.log("setTimeout callback");
// }, 0);

// console.log("End");


const printText = (textToprint) => console.log(textToprint);

setTimeout(printText, 0, "setTimeout"); // arguments after callback and delay are callback parametters

setImmediate(printText, "setImmediate")
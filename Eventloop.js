// console.log("1");

// function event(callback) {
//     setTimeout(function() {
//         callback();
//     }, 1000); // Delay for 1 second (1000 milliseconds)
// }

// event(calback);

// console.log("2");

// function calback() {
//     console.log("This is a callback function");
// }




// console.log("hello");

// async function asyey() {
//     let data;
//     await new Promise((resolve) => {
//         setTimeout(() => {
//             data = 10;
//             resolve();
//         }, 3000);
//     });
//     console.log(data);
// }

// asyey();

// console.log("world");


function close()
{
    let a=10
    return function(){
        console.log(a);
    }
}
let res=close()
res()

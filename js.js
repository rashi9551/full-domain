// //   rest operator 

// function myBio(firstName, lastName, ...otherInfo) { 
//     console.log(otherInfo)
//   }
  
//   // Invoke myBio function while passing five arguments to its parameters:
//   myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");


// //   spread operator 
// function myBios(firstName, lastName, company) { 
//     console.log( `${firstName} ${lastName} runs ${company}`)
//   }
  
//   myBios(...["Oluwatobi", "Sofela", "CodeSweetly"]);


// //   default parameter 
// function multiplye(a, b = 1) {
//     return a * b;
//   }
  
//   console.log(multiplye(5, 2));
//   // Expected output: 10
  
//   console.log(multiplye(5));


// //   CompositionFunction 
// // Composition function
// const compose = (...functions) => input => {
//     return functions.reduceRight((value, func) => func(value), input);
//   };
  
//   // Example functions
//   const add = x => x + 1;
//   const multiply = x => x * 2;
//   const subtract = x => x - 3;
  
//   // Create a composed function
//   const composedFunction = compose(add, multiply, subtract);
  
//   // Apply the composed function to an input
//   console.log(composedFunction(5)); // Output: 13
  
//   const c="i am rashid"

//   module.exports=c
let a=10; console.log(a)
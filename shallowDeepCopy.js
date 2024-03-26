const lodash=require('lodash')

// deep copy 

const a1=[1,3,5,6,[2,4,5]]
const c=lodash.cloneDeep(a1)
c[4][2]=100
c[2]=100
console.log(a1);


// // shallow copy 
// const b=[...a1]
// b[2]=100
// console.log(a1);
// b[4][2]=100
// console.log(a1);
const map = new Map();
map.set('name', 'rashid');
map.set('age', '20');
let keys=map.keys()
console.log(keys,"iterating throgh key");
let value=map.values()
console.log(value,"iterating throgh value");
let entries=map.entries()
console.log(entries,"iterating throgh entries");
const obj = Object.fromEntries(map)
console.log("size of map",map.size);
console.log(map.get('name'))
map.delete('name')
console.log(map.has('age'));
map.clear()
console.log(map);
console.log("ithu obj",obj);
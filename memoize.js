function memoize(fn) {
    let map = new Map();
    return function(...args) {
        if(map.has(args)) {
            return map.get(args);
        }
        let foo = fn(...args);
        map.set(args, foo);
        console.log(map);
        return foo;
    };
}

    
function fn(a,b){
    return a+b
}
let ans=memoize(fn)(1,2)
let ans2=memoize(fn)(1,2)
let ans3=memoize(fn)(1,3)
console.log(ans);
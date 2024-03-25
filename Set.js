const set = new Set(['Beethoven', 'Mozart', 'Chopin', 'Chopin'])
for(let val of set)
{
    console.log(val);
}
for(let val of set.entries())
{
    console.log(val);
}
for(let val of set.keys())
{
    console.log(val);
}
for(let val of set.values())
{
    console.log(val);
}
// Delete an item
set.delete('Beethoven') // true
console.log(set);

// Check for the existence of an item
 // false
console.log(set.has('Beethoven'));

// Delete all keys from sets
set.clear()
console.log(set);

// Check the size of a Set
console.log(set.size);
// 0
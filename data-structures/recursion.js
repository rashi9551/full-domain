let str="malayalam"
function recursion(str,i,j){
    if(i>=Math.floor(str.length/2))
    {
        return true
    }
    if(str[i]!=str[j])
    {
        return false
    }

    return recursion(str,i+1,j-1)

}

let check=recursion(str,0,str.length-1)
console.log(check);



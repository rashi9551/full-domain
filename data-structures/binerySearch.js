let arr=[1,2,3,4,5,6,7,8,9]
let target=4

function binerySearch(arr,target,s=0,e=arr.length-1)
{
    if(s>e)
    {
        return null
    }
    let mid=Math.floor((e+s)/2)
    if(arr[mid]==target)return mid

    if(arr[mid]>target)
    {
        return binerySearch(arr,target,s,mid-1)
    }
    return binerySearch(arr,target,mid+1,e)
    
}
const res=binerySearch(arr,target)
console.log(res);
// bubble sort 

const { merge } = require("lodash")

let arr=[9,7,5,6,2]

// insertion sort 

// for(i=0;i<arr.length;i++)
// {
//     let j=i
//     while(j>0 && arr[j]<arr[j-1])
//     {
//         let temp=arr[j-1]
//         arr[j-1]=arr[j]
//         arr[j]=temp
//         j--
//     }
// }
// console.log(arr);

// selection sort 

// for(i=0;i<arr.length;i++)
// {
//     let min=i
//     for(j=i;j<arr.length;j++)
//     {
//         if(arr[j]<arr[min])
//         {
//             min=j
//         }
//     }
//     console.log(arr[min]);
//     let temp=arr[min]
//     arr[min]=arr[i]
//     arr[i]=temp
// }
// console.log(arr);
  
// quickSort 

// function quick(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let pivot=arr[0]
//     let left=[]
//     let right=[]
//     for(let i=1;i<arr.length;i++)
//     {
//         if(arr[i]>pivot)
//         {
//             right.push(arr[i])
//         }else{
//             left.push(arr[i])
//         }
//     }
//     return [...quick(left),pivot,...quick(right)]
// }
// let res=quick(arr)
// console.log(res);


// merge sort 

// function merge(arr){
//     if(arr.length<=1)
//     {
//         return arr
//     }
//     let mid=Math.floor(arr.length/2)
//     let left=arr.slice(0,mid)
//     let right=arr.slice(mid)
//     return mergeSort(merge(left),merge(right))
// }

// function mergeSort(left,right)
// {
//     const sort=[]
//     while(left.length&&right.length)
//     {
//         if(left[0]<right[0]){
//             sort.push(left.shift())
//         }
//         else{
//             sort.push(right.shift())
//         }
//     }
//     return[...sort,...left,...right]
// }
// let res=merge(arr)
// console.log(res);


// for(i=0;i<arr.length;i++)
// {
//     for(j=0;j<arr.length;j++)
//     {
//         if(arr[j]>arr[j+1])
//         {
//             [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//         }
//     }
// }
// console.log(arr);

// for(i=0;i<arr.length;i++)
// {
//     let min=i
//     for(j=i;j<arr.length;j++)
//     {
//         if(arr[j]<arr[min])
//         {
//             min=j
//         }
//     }
//     [arr[min],arr[i]]=[arr[i],arr[min]]
// }3
// console.log(arr);

// for(i=0;i<arr.length;i++)
// {
//     let j=i
//     while(j>0 && arr[j]<arr[j-1])
//     {
//         [arr[j],arr[j-1]]=[arr[j-1],arr[j]]
//         j--
//     }
// }
// console.log(arr);

// function quick(arr)
// {
//     if(arr.length<=1)
//     {
//         return arr
//     }
//     let pivot=arr[0]
//     let right=[]
//     let left=[]
//     for(i=1;i<arr.length;i++)
//     {
//         if(arr[i]>pivot)
//         {
//             right.push(arr[i])
//         }
//         else{
//             left.push(arr[i])
//         }
//     }
//     return [...quick(left),pivot,...quick(right)]
// }
// let res=quick(arr)
// console.log(res)

// function mergey(arr){
//     if(arr.length<=1)
//     {
//         return arr
//     }
//     let mid=Math.floor(arr.length/2)
//     let left=arr.slice(0,mid)
//     let right=arr.slice(mid)
//     return mergeSort(mergey(left),mergey(right))
// }

// function mergeSort(left,right){
//     let sort=[]
//     while(left.length&&right.length){
//             if(left[0]>right[0])
//         {
//             sort.push(right.shift())
//         }else{
//             sort.push(left.shift())
//         }
//     }
//     return [...sort,...left,...right]
// }

// let res=mergey(arr)
// console.log(res);


// ?20-nov-25
// * P-1 W.A.J.P  to reverse an array without using reverse method without creating new array   ip:[1,2,3] op:[3,2,1]

function arrayRev(){
    let temp=0
    // let arr=[1,2,3]
    let arr=[1,2,3,4]
    let i=0,j=arr.length-1
    while(i<j){
        temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
        i++
        j--
    }
    return arr
}
// console.log(arrayRev())

//? 10 + ques in phone photos. //completed some below

// ?22-Nov-2025

// find mx val in 

// ? wa js program to reverse a array without using reverse method
// let arr =[1,2,3]
// function rev_arr(){
//     let i =0,j=arr.length-1,temp=0
//     while(i<=j){
//         temp=arr[i]
//         arr[i]=arr[j]
//         arr[j]=temp
//         i++
//         j--
//     }
//     console.log(arr)
// }
// rev_arr()

// ? find the maximum element in the array

// let arr = [4,5,7,8]
// function arr_max(){
//     let max = arr[0]
//     for(let i = 0;i<arr.length;i++){
//         if(max<=arr[i]){
//             max=arr[i]
//         }
//     }
//     console.log(max)

// }
// arr_max()
// ? find the minimum element in tthe array

// let arr = [4,5,7,8]
// function arr_min(){
//     let min = arr[0]
//     for(let i = 0;i<arr.length;i++){
//         if(min>=arr[i]){
//             min=arr[i]
//         }
//     }
//     console.log(min)

// }
// arr_min()
// ? wa js program to count the frequency of elements

// const arr = [4, 2, 2, 3, 3, 3, 4, 4, 4, 4];

// const frequency = {};

// for (let i = 0; i < arr.length; i++) {
//     let element = arr[i];
//     console.log(element)
//     if (frequency[element]) {
//         frequency[element]++;
//     } else {
//         frequency[element] = 1;
//     }
// }

// console.log(frequency);

// ? wa js program to check if the array is sorted

// function arr_sorted(){
//     let arr = [1,2,3,4,56]
//     for(let i =0 ;i<arr.length;i++){
//         if(arr[i]>arr[i+1])
//             return "not sorted"
//     }
//     return "sorted"
// }
// console.log(arr_sorted())

// ? wa js program to find the sum of the array elements

// function arr_sum(){
//     let arr = [1,2,34,5],sum=0
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//     console.log(sum)
// }
// arr_sum()
// ? AVERAGE
// function arr_avg(){
//     let arr = [1,2,34,5],sum=0
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//     console.log(Math.round(sum/arr.length))
// }
// arr_avg()

// ? array linera search

// function arr_search(n){
// let arr =[24,3,44,3,22,3,4]
//     for(let i =0;i<arr.length;i++){
//         if(n=== arr[i]){
//             return "element found"
//         }
//     }
//     return "elemnt not found"
// }
// console.log(arr_search(22))

// ? 2nd largest
// let arr = [4,5,70,8]
// function arr_max(){
//     let max = arr[0]
//     let max2 = arr[0]
//     for(let i = 0;i<arr.length;i++){
//         if(max<=arr[i]){
//             max=arr[i]
//         }
//     }
//     for(let i =0 ;i<arr.length;i++){
//         if(max2<=arr[i]&& arr[i]!== max){
//             max2=arr[i]
//         }
//     }
//     console.log(max2)

// }
// arr_max()

function checkSorting(){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            return false
        }
            return true
    }
    
}
// console.log(checkSorting([1,2,3,4,5]))

function removeDuplicates(arr){
    let newArray=[]
    if(newArray.length===0){
        newArray.push(arr[0])
    }
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<newArray.length;j++){
            if(arr[i]===arr[j]){
                continue
            }
            else{
                newArray.push(arr[i])
            }
        }
    }
    console.log(newArray) 
}
// removeDuplicates([1,2,3,4,4,5,8,7,9,8,6])  //? error check phone and update


function secondMax(arr){
    let max=arr[0],secondmax=arr[1]
    for(let i=2;i<arr.length;i++){
        if(arr[i]>max){
            secondmax=max
            max=arr[i]
        }
        else if(arr[i]<max && arr[i]>secondmax){
            secondmax=arr[i]
        }
    }
    console.log(secondmax)
}
secondMax([10,2,3,4,23,45,29])

//?25-Nov-2025
// sort an array in ascending order 

function arrSortAsc(){
    let arr=[1,3,2,5,7,9,8]
    if(a>b){
        if(b<c){
            if()
        }
    }
}

// console.log(arrSortAsc())


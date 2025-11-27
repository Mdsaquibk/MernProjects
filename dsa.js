//? 25-Nov-25
// W.A.P to swap two variables
function swapvar(){
    let a=10,b=20;
    let c=a
    a=b
    b=c
   
    console.log(c)
}
// swapvar()

function swapvarr(){
    let a=10,b=20;
    [b,a]=[a,b] //rhs reference value of line no 15
    console.log(a)
    console.log(b)
}
// swapvarr()

    let a=10,b=20;
    a=a+b
    b=a-b
    a=a-b
    // console.log(a)
    // console.log(b)

// * swap the given array using bubble sort algorithm  ascending order
    function bubbleSort(){
        let arr=[5,4,1,2,3]
        for(i=0;i<arr.length;i++){
            let swapping=false
            for(j=0;j<arr.length-(i+1);j++){
                let temp
                if(arr[j]>arr[j+1]){
                    temp=arr[j]
                    arr[j]=arr[j+1]
                    arr[j+1]=temp
                    swapping=true
                }
            }
            if(!swapping){
                break
            }
        }
        return arr
    }
    // console.log(bubbleSort())

    function bubbleSort2(){
        let arr=[5,4,6,2,3]
        for(i=0;i<arr.length;i++){
            let swapping=false
            for(j=0;j<arr.length-(i+1);j++){
                let temp
                if(arr[j]>arr[j+1]){
                    [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                    swapping=true
                }
            }
            if(!swapping){
                break
            }
        }
        return arr
    }
    // console.log(bubbleSort2())

    //? 27-NOv-2025
//*insertion ip:[5,1,3,7,2]

function insertion() {
        let arr=[5,3,7,1,2]

    for(let i=1;i<arr.length;i++){
        let current=arr[i]
        let j=i-1
        while (j>=0) {
            console.log("hello")
            j--
        }
    }
    return  arr
    
}
// insertion()

function insertionsORT() {
    // let array=[5,3,7,1,2]
    // let array=[-5,3,-7,1,-2]
    let array=[5,5,7,2,2]
    for (let i =1 ; i < array.length; i++){
        let current = array[i];
        let j=i-1
        while (j>=0 && array[j] >current) {
            array[j+1]=array[j]
            j--
        }
       array[j+1]=current
    }
    return array
    
}
// console.log(insertionsORT())

// W.A.J.P T to count how many shifts inserion sort performs to sort an array ip:[8,4,3,5,1]

function countShifts() {
let array=[8,4,3,5,1],count=0
    for (let i =1 ; i < array.length; i++){
        let current = array[i];
        let j=i-1
        while (j>=0 && array[j] >current) {
            array[j+1]=array[j]
            j--
            count++
        }
       array[j+1]=current
    }
    return count    
}
// console.log(countShifts())

//* MERGE SORT

function mergeSort(arr) {
    let mid=Math.floor(arr.length/2)
    let leftarr=arr.slice(0,mid)
    let rightarr=arr.slice(mid)
    console.log(leftarr)
    console.log(rightarr)
    
}
// mergeSort([4,3,2,9,1])

//? Recursion example
//* W.A.J.P to find a factorial of a no.

function factorial(n){
    if(n==1 || n==0) return 1
    return n* factorial(n-1)
}
console.log(factorial(5))


//Task

// W.A.J.P to sum of elements in an array using recursion
// W.A.J.P to find nth fibonacci series by using recursion
// count digits in a number using recursion
// check a given string is a pallindrome or not using recursion
// sum of the digits in a given no. using recursion
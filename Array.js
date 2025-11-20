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
console.log(arrayRev())
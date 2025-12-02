//?CONTENT -SWAP,SORT-ALL,RECURSION

//? 25-Nov-25

// W.A.P to swap two variables
function swapvar() {
  let a = 10,
    b = 20;
  let c = a;
  a = b;
  b = c;

  console.log(c);
}
// swapvar()

function swapvarr() {
  let a = 10,
    b = 20;
  [b, a] = [a, b]; //rhs reference value of line no 15
  console.log(a);
  console.log(b);
}
// swapvarr()

let a = 10,
  b = 20;
a = a + b;
b = a - b;
a = a - b;
// console.log(a)
// console.log(b)

// * swap the given array using bubble sort algorithm  ascending order
function bubbleSort() {
  let arr = [5, 4, 1, 2, 3];
  for (i = 0; i < arr.length; i++) {
    let swapping = false;
    for (j = 0; j < arr.length - (i + 1); j++) {
      let temp;
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapping = true;
      }
    }
    if (!swapping) {
      break;
    }
  }
  return arr;
}
// console.log(bubbleSort())

function bubbleSort2() {
  let arr = [5, 4, 6, 2, 3];
  for (i = 0; i < arr.length; i++) {
    let swapping = false;
    for (j = 0; j < arr.length - (i + 1); j++) {
      let temp;
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapping = true;
      }
    }
    if (!swapping) {
      break;
    }
  }
  return arr;
}
// console.log(bubbleSort2())

//? 27-NOv-2025
//*insertion ip:[5,1,3,7,2]

function insertion() {
  let arr = [5, 3, 7, 1, 2];

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0) {
      console.log("hello");
      j--;
    }
  }
  return arr;
}
// insertion()

function insertionsORT() {
  // let array=[5,3,7,1,2]
  // let array=[-5,3,-7,1,-2]
  let array = [5, 5, 7, 2, 2];
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}
// console.log(insertionsORT())

// W.A.J.P T to count how many shifts inserion sort performs to sort an array ip:[8,4,3,5,1]

function countShifts() {
  let array = [8, 4, 3, 5, 1],
    count = 0;
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
      count++;
    }
    array[j + 1] = current;
  }
  return count;
}
// console.log(countShifts())

//* MERGE SORT

function mergeSort(arr) {
  let mid = Math.floor(arr.length / 2);
  let leftarr = arr.slice(0, mid);
  let rightarr = arr.slice(mid);
  console.log(leftarr);
  console.log(rightarr);
}
// mergeSort([4,3,2,9,1])

//? Recursion example



//* W.A.J.P to find a factorial of a no.

function factorial(n) {
  if (n == 1 || n == 0) return 1;
  return n * factorial(n - 1);
}
// console.log(factorial(5))

//Task

//* W.A.J.P to sum of elements in an array using recursion

// function sumArray(arr, n) {
//     if (n === 0) {
//         return 0;
//     }

//     return arr[n - 1] + sumArray(arr, n - 1);
// }

// const arr = [5, 10, 15, 20, 25];
// const result = sumArray(arr, arr.length);

// console.log("Sum of array elements =", result);

//* W.A.J.P to find nth fibonacci series by using recursion
// function fibonacci(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// let n = 10;
// console.log(`Fibonacci(${n}) =`, fibonacci(n));

//* count digits in a number using recursion
// function countDigits(num) {
//     num = Math.abs(num);

//     if (num < 10) {
//         return 1;
//     }

//     return 1 + countDigits(Math.floor(num / 10));
// }

// let number = 987654;
// console.log("Number of digits =", countDigits(number));

//* check a given string is a pallindrome or not using recursion
// function isPalindrome(str, start = 0, end = str.length - 1) {
//     if (start >= end) {
//         return true;
//     }

//     if (str[start] !== str[end]) {
//         return false;
//     }

//     return isPalindrome(str, start + 1, end - 1);
// }

// let text = "madam";

// if (isPalindrome(text)) {
//     console.log(`"${text}" is a palindrome.`);
// } else {
//     console.log(`"${text}" is NOT a palindrome.`);
// }

//* sum of the digits in a given no. using recursion

// function sumOfDigits(num) {
//     num = Math.abs(num);

//     if (num === 0) {
//         return 0;
//     }

//     return (num % 10) + sumOfDigits(Math.floor(num / 10));
// }

// // let number = 9875;
// console.log("Sum of digits =", sumOfDigits(number));

//? 28-Nov-2025
//* W.A.J.P to sum of elements in an array using recursion

let arr1 = [1, 2, 3, 4, 5];
function add(arr1) {
  if (arr1.length == 0) {
    return 0;
  }
  return (arr1[0] = add(arr1.slice(1)));
}
// console.log(add(arr1))

//* W.A.J.P to find nth fibonacci series by using recursion
function fibonacci(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// console.log(fibonacci(6))

//* count digits in a number using recursion

function count(n) {
  if (n == 0) {
    return 0;
  }
  return count(Math.floor(n / 10)) + 1;
}
// console.log(count(15763))
function count2(n, digits = 0) {
  if (n == 0) {
    return digits;
  }
  return count2(Math.floor(n / 10), digits + 1);
}
// console.log( count2(15763))

//* check a given string is a pallindrome or not using recursion

function pallindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return pallindrome(str.slice(1, -1));
}
// console.log(pallindrome("madaM"))
// console.log(pallindrome("madaM".toLowerCase))
// console.log(pallindrome("hellH"))

//* sum of the digits in a given no. using recursion

function sumDigits(n) {
  if (n == 0) {
    return 0;
  }
  return (n % 10) + sumDigits(Math.floor(n / 10));
}
// console.log(sumDigits(1573))

//! Merge sort
function merge(left, right) {
  let sorted = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sorted.push(left[i]);
      i++;
    } else {
      sorted.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    sorted.push(left[i]);
    i++;
  }
  while (j < right.length) {
    sorted.push(right[j]);
    j++;
  }
  return sorted;
}
// console.log(merge([5, 4, 9, 3, 6, 2]));


function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

// console.log(mergeSort([5, 4, 9, 3, 6, 2]));

//? 01-DEC-2025

//?Quicksort

function Quicksort(arr) {
  if (arr.length <=1) {
    return  arr
  }
  let pivot=arr[arr.length-1]
  let left=[],right=[]
  
  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i]<pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...Quicksort(left),pivot,...Quicksort(right)]
}
console.log(Quicksort([8,4,7,3,12,9,1]))

//searching algorithms


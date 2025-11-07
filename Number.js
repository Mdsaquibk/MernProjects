console.log("number");

//*P.1- W.A.Js.Fn. to check a given number is a +ve num or -ve num. if the number is +ve , return this num is +ve num , else return this num is a -ve num note: if the num is 0 , return 0

// const x = (n) => {
//   if (n > 0) {
//     return "+ve number";
//   } else if (n == 0) {
//     return "zero";
//   } else {
//     return "+ve number";
//   }
// };

// console.log(x(0));

// *P-2 W.A.Js.Fn to check a give no. is a single digit or double digit no, or triple digit no , if it is a single digit no. return this is one digit no .if it is 2 digit no return two digit no and so on upto 3 digits

// function checkDigit(n) {
//   if (n >= 0 && n <= 9) {
//     return "1 digit num";
//   } else if (n >= 10 && n <= 99) {
//     return "2 digit num";
//   } else if (n >= 100 && n < 1000) {
//     return "3 digit num";
//   }
// }

// console.log(checkDigit(33));

// ? 05-11-2025

// * P-3 W.A.J.P to check a given no is even or odd

// function evenOdd(x){

//     if(x%2==0){
//         return `${x} is a even no`
//     }
//     else{
//                 return `${x} is a odd no`
//     }
// }
// console.log(evenOdd(9))

//*P-4 W.AJ.P to check a given no is pallindrome or not

function isPallindrome(P) {
  for (let i = 1; i <= n; i++) {
    count++;
  }
}

// * P-5 W.A.J.P to check a given number is divisible by 5 or not

// function divbyfive(x){

//     if(x%5==0){
//         return `${x} is divisible by 5`
//     }
//     else{
//                 return `${x} is not  divisible by 5`
//     }
// }
// console.log(divbyfive(10))

// * P-6 W.A.J.P to print the sum of numbers from 1 to 100

const sumofNatNum = (sum) => {
  for (let i = 1; i <= sum; i++) {
    sum = sum + i;
  }
  return sum;
};
// console.log(sumofNatNum()) //undefined //? error

function sumnatnum() {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum = sum + i;
  }
  return sum;
}
// console.log(sumnatnum())

//* P-7 W.A.J.P to print the sum of values from 0 to given number
// let sum=0
function givenum(sum) {
  for (let i = 1; i <= sum; i++) {
    sum = sum + i;
  }
  return sum;
}
// console.log(sumnatnum(100))

//* P-8 W.A.J.P to print the sum of all even No. from 0 to 100

function evenSum() {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
      sum = sum + i;
    }
  }
  return sum;
}
// console.log(evenSum())
//* P-9 W.A.J.P to print the sum of all odd  No. from 0 to 100

function oddSum() {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      sum = sum + i;
    }
  }
  return sum;
}
// console.log(oddSum())

// * P-10 W.A.J.P  to print all the no. from 0 to 100 in a array format

const array = () => {
  let arr = [];
  for (let i = 0; i <= 100; i++) {
    arr[i] = i;
  }
  return arr;
};
// console.log(array())

//* P-11 W.A.J.P to print all the odd no.s from 1 to 100 inside an array

function printOddarr() {
  let arr = [];
  for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
      arr.push(i);
    }
  }
  console.log(arr);
  console.log(arr.length);
}
// printOddarr()

//* P-12 W.A.J.P to print all the even no.s from 1 to 100 inside an array

const evenArr = () => {
  let arr = [];
  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  console.log(arr);
};
// evenArr()

// * P-13 W.A.J.P to print a no is prime or not

const primeNo = (n) => {
  if (n == 1 || n == 0) {
    console.log("invalid input");
    return;
  }

  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  if (count > 2) {
    console.log(n + " is not a prime no");
  } else {
    console.log(n + "is a prime no");
  }
};
// primeNo(9)

//?  06-11-25

//* T.P-13 W.A.J.P find a prime between 1 -100 and store it insIde an array
// * T.P-14 - W.A.J.P find only three digits prime no  // 100-999
// ?

// efficient way , to reduce time complexity // * * P-12 W.A.J.P to print a no is prime or not
const primeNum = (n) => {
  let count = 2;
  let mid = Math.round(n / 2);
  for (let i = 2; i <= mid; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  if (count > 2) {
    return false;
  } else {
    return true;
  }
};
// console.log(primeNum(9))
// * P-15 W.A.J.P to find factors to teh given number
// i/P1: 10
// o/p1: [1,2,5,10]
// i/p2:11
// o/p2:[1,11]
// i/p3:0
// o/p:[]

const factorial = (n) => {
  let factors = [1];
  let mid = n / 2;
  for (let i = 2; i <= mid; i++) {
    if (n % i == 0) factors.push(i);
  }
  factors.push(n);
  return factors;
};
// console.log(factorial(10))

// * P-16 W.A.J.P to return the sum of the factors of a given Number

const factSum = (n) => {
  if (n === 0) {
    return 0;
  }
  let factors = 0;
  let mid = n / 2;
  for (let i = 1; i <= mid; i++) {
    if (n % i == 0) factors += i;
  }
  return factors + n;
};
// console.log(factSum(10))

// ? EFFICIENT WAY
const factor_sum = (n) => {
  if (n === 0) {
    return 0;
  }
  let factors = [1];
  let mid = n / 2;
  for (let i = 2; i <= mid; i++) {
    if (n % i === 0) factors.push(i);
  }
  factors.push(n);
  let sum = factors.reduce((acc, ele) => acc + ele);
  return sum;
};
// console.log(factor_sum(10))

//* P-17 W.A.J.P find the prime numbers of given  number from its factorial

//? INDIVIDUAL NUMBERS

//*P.18 ip:10 op:2 ip:5 op:1 ip:123 op:3

function no_of_digits(n) {
  if (n < 10 && n >= 0) {
    return 1;
  }
  let digits = 0;
  while (n > 0) {
    digits++;
    n = Math.floor(n / 10);
  }
  return digits;
}
// console.log(no_of_digits(4573))

//* P-19  W.A.J.P to return the sum of digits in a given num ip:10 op:1 ip:5 op:5 ip:134 op:8

function sum_ofDigits(n) {
  if (n < 10 && n >= 0) {
    return 1;
  }

  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.round(n / 10);
  }
  return sum;
}

// console.log(sum_ofDigits(134));

// *T.P-20 W.A.J.P to reverse a number without using reverse method

// *T.P-21 W.A.J.P to check a given no is a  pallindrome or not (without using inbuilt methods)
// *TP-22 W.A.J.P  to print the sum of square of each digit ip : 135 op:1**2+3**2+5**2 = 1+9+25 =35

function reverseNum(n) {
  let reverse = 0;
  while (n > 0) {
    reverse = reverse + (n % 10);
    n = Math.floor(n / 10);
  }
  return console.log(reverse);
}
// reverseNum(153) // error

function isPallind(n) {
  let dummy = n;
  let reverse = 0;
  while (n > 0) {
    reverse = reverse * 10  + (n % 10);
    n = Math.floor(n / 10);
  }
  if (dummy === reverse) {
    return true;
  } else {
    return false;
  }
}

  // console.log(isPallind(121))

function revSqSum(n) {
  let sum = 0;
  let reverse = 0;
  while (n > 0) {
    sum = sum + (n % 10) ** 2;
    n = Math.floor(n / 10);
  }
  return console.log(sum);
}

// revSqSum(12);
// ? 07-11-2025

// * W.A.J.P  to count how many zeros are present inside a given number  if it has one zero we need to return 1, if it has no zeros , invalid input

function checkZeros() {
  let num = 254006,
    digit = 0,
    count = 0;
  while (num > 0) {
    digit = num % 10;
    if (digit === 0) {
      count++;
    }
    num = Math.floor(num / 10);
  }
  console.log(count, "zeros are present");
}
// checkZeros();

// * W.A.J.P to find first digit and last digit of a number

function first_last_digit() {
  let num = 1457,
    ld = num % 10,
    fd = 0;
  while (num >=10) {
    num = Math.floor(num / 10);
  }
  fd = num;

  return console.log(fd, " first digit", ld, "last digit");
}
// first_last_digit();

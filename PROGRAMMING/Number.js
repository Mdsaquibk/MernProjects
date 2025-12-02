
console.log("number programs");

//*P.1- W.A.Js.Fn. to check a given number is a +ve num or -ve num. if the number is +ve , return this num is +ve num , else return this num is a -ve num note: if the num is 0 , return 0

const x = (n) => {
  if (n > 0) {
    return "+ve number";
  } else if (n == 0) {
    return "zero";
  } else {
    return "+ve number";
  }
};

// console.log(x(0));

// *P-2 W.A.Js.Fn to check a give no. is a single digit or double digit no, or triple digit no , if it is a single digit no. return this is one digit no .if it is 2 digit no return two digit no and so on upto 3 digits

function checkDigit(n) {
  if (n >= 0 && n <= 9) {
    return "1 digit num";
  } else if (n >= 10 && n <= 99) {
    return "2 digit num";
  } else if (n >= 100 && n < 1000) {
    return "3 digit num";
  }
}

// console.log(checkDigit(33));

// ? 05-11-2025

// * P-3 W.A.J.P to check a given no is even or odd

function evenOdd(x) {
  if (x % 2 == 0) {
    return `${x} is a even no`;
  } else {
    return `${x} is a odd no`;
  }
}
// console.log(evenOdd(9))

//*P-4 W.AJ.P to check a given no is pallindrome or not

function isPallindrome(P) {
  for (let i = 1; i <= n; i++) {
    count++;
  }
}

// * P-5 W.A.J.P to check a given number is divisible by 5 or not

function divbyfive(x) {
  if (x % 5 == 0) {
    return `${x} is divisible by 5`;
  } else {
    return `${x} is not  divisible by 5`;
  }
}
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

function reverseNum(n) {
  let reverse = 0;
  while (n > 0) {
    reverse = reverse + (n % 10);
    n = Math.floor(n / 10);
  }
  return console.log(reverse);
}
// reverseNum(153) // error

// *T.P-21 W.A.J.P to check a given no is a  pallindrome or not (without using inbuilt methods)

function isPallind(n) {
  let dummy = n;
  let reverse = 0;
  while (n > 0) {
    reverse = reverse * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  if (dummy === reverse) {
    return true;
  } else {
    return false;
  }
}

// console.log(isPallind(121))

// *TP-22 W.A.J.P  to print the sum of square of each digit ip : 135 op:1**2+3**2+5**2 = 1+9+25 =35

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

//* P-23 W.A.J.P  to count how many zeros are present inside a given number  if it has one zero we need to return 1, if it has no zeros , invalid input

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

//* P-24 W.A.J.P to find first digit and last digit of a number

function first_last_digit() {
  let num = 1457,
    ld = num % 10,
    fd = 0;
  while (num > 0) {
    fd = num % 10;
    num = Math.floor(num / 10);
  }
  return console.log(fd, " first digit", ld, "last digit");
}
// first_last_digit();

//* T.P-25 W.A.J.P to extract only even digits from a given number

function extractEvenDigits(num) {
  let evenDigits = 0;
  let place = 1;
  let temp = num;

  while (temp > 0) {
    let digit = temp % 10;
    if (digit % 2 === 0) {
      evenDigits = digit * place + evenDigits;
      place *= 10;
    }
    temp = Math.floor(temp / 10);
  }

  if (evenDigits === 0) console.log("No even digits found");
  else
    console.log("Even digits from the number " + num + " are: " + evenDigits);
}

// let number = parseInt(prompt("Enter a number: "));
// extractEvenDigits(number);
// extractEvenDigits(4689);

//* T.P-26 W.A.J.P to sum of the first and last digit of a given number

function sumOfFirstAndLastDigit(num) {
  let strNum = num.toString();

  let firstDigit = parseInt(strNum[0]);
  let lastDigit = parseInt(strNum[strNum.length - 1]);

  let sum = firstDigit + lastDigit;

  console.log("First digit: " + firstDigit);
  console.log("Last digit: " + lastDigit);
  console.log("Sum of first and last digit of " + num + " is: " + sum);
}

// let number = prompt("Enter a number: ");
// sumOfFirstAndLastDigit(number);
// sumOfFirstAndLastDigit(4658);

//* T.P-27 W.A.J.P to get the sum of digits present between 1st and last digit ip:1447 op:8
function sumBetweenFirstLast(num) {
  const str = num.toString();

  if (str.length <= 2) {
    return 0;
  }

  let sum = 0;
  for (let i = 1; i < str.length - 1; i++) {
    sum += parseInt(str[i]);
  }

  return sum;
}

// console.log("Sum of digits between first and last:", sumBetweenFirstLast(1528));

// ? 08-11-25

// *Repeat .P W.A.J.P to sum of the first and last digit of a given number

function sumofdld(n) {
  let fd = null,
    ld = n % 10;
  if (n < 10) return n;
  while (n > 0) {
    fd = n % 10;
    n = Math.floor(n / 10);
  }
  return fd + ld;
}
// console.log(sumofdld(1278) ,"is the sum of first dig and last dig")

// *Repeat .P- W.A.J.P to extract only even digits from a given number

function evendigits(n) {
  let evendig = [],
    odddig = [];
  if (n < 10) return n;
  while (n > 0) {
    if ((n % 10) % 2 === 0) {
      evendig.push(n);
    } else {
      odddig.push(n);
    }
    n = Math.floor(n / 10);
  }
  console.log(evendig);
  console.log(odddig);
}
// evendigits(1278)

// * Repeat.P W.A.J.P to get the sum of digits present between 1st and last digit ip:1447 op:8

function sumofDig(n) {
  let fd = null,
    ld = n % 10,
    sd = 0;
  if (n < 10) return n;
  while (n > 0) {
    sd = sd + (n % 10);
    fd = n % 10;
    n = Math.floor(n / 10);
  }
  return sd - (fd + ld);
}

// console.log(sumofDig(1447))
// *-------------************************

function sumdig(n) {
  let sum = 0;
  n = Math.floor(n / 10);
  if (n < 10) return n;
  while (n > 10) {
    sum = sum + (n % 10);
    n = Math.floor(n / 10);
  }
  return sum;
}
// console.log(sumdig(11))

// *P-28 Armstrong number

function armstrongnum(n) {
  let count = 0,
    sum = 0,
    dummy = n,
    temp = n;
  while (temp > 0) {
    temp = Math.floor(temp / 10);
    count++;
  }
  temp = n;
  while (temp > 0) {
    let digit = temp % 10;
    sum = sum + digit ** count; //153 3 5 1 0 0
    console.log(sum);
    temp = Math.floor(temp / 10);
  }
  if (dummy === sum) {
    return `${dummy} ,"is a armstrong number"`;
  } else {
    return `${dummy} ,"is not  a armstrong number"`;
  }
}
// console.log(armstrongnum(153));

// *---------******-------------------

function armstrongNum(n) {
  let sum = 0,
    temp = n,
    count = 0;

  for (let t = n; t > 0; t = Math.floor(t / 10)) count++;

  for (let t = n; t > 0; t = Math.floor(t / 10)) sum += (t % 10) ** count;

  return sum === n
    ? `${n} is an Armstrong number`
    : `${n} is not an Armstrong number`;
}

// console.log(armstrongNum(153));
// console.log(armstrongNum(123));

// ?TASK

//* T.P-29 factorial of a number

// function factorial(n) {
//   let fact = 1;

//   for (let i = 1; i <= n; i++) {
//     fact = fact * i;
//   }

//   return fact;
// }
//* -------------**************------------------

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;           // base case
//   } else {
//     return n * factorial(n - 1);  // recursive step
//   }
// }

//* T.P-30 Strong number ip:145 op:strong num explanation: 1!+4!+5!=145

function isStrongNumber(num) {
  let digits = num.toString().split("");

  let sum = digits.reduce((acc, d) => acc + factorial(Number(d)), 0);

  return sum === num;
}

// function factorial(n) {
//   if (n === 0 || n === 1) return 1;
//   let fact = 1;
//   for (let i = 2; i <= n; i++) {
//     fact *= i;
//   }
//   return fact;
// }

let number = 145;
// if (isStrongNumber(number)) {
//   console.log(`${number} is a Strong Number.`);
// } else {
//   console.log(`${number} is NOT a Strong Number.`);
// }

// * -------------- * *  * *   *  *   * ---------------------
// function factorial(n) {
//   let fact = 1;
//   for (let i = 1; i <= n; i++) {
//     fact *= i;
//   }
//   return fact;
// }

function isStrongNumber(num) {
  let original = num;
  let sum = 0;

  while (num > 0) {
    let digit = num % 10;
    sum += factorial(digit);
    num = Math.floor(num / 10);
  }

  return sum === original;
}

// Example usage

// let number = 145;

// if (isStrongNumber(number)) {
//   console.log(number + " is a Strong Number.");
// } else {
//   console.log(number + " is NOT a Strong Number.");
// }

//* T.P-31 ip:28 perfect num explanation:1+2+4+7+14(sum of all the factors except the original number)=28  op:perfect num

function isPerfectNumber(num) {
  let sum = 0;

  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  return sum === num;
}

// let number = 28;

// if (isPerfectNumber(number)) {
//   console.log(number + " is a Perfect Number.");
// } else {
//   console.log(number + " is NOT a Perfect Number.");
// }

//* T.P-32 Neon number : ip:9 exp:9**2 =81=8+1=9 op:neon number

function isNeonNumber(num) {
  let square = num * num;
  let sum = 0;

  while (square > 0) {
    let digit = square % 10;
    sum += digit;
    square = Math.floor(square / 10);
  }

  return sum === num;
}

// let number = 9;

// if (isNeonNumber(number)) {
//   console.log(number + " is a Neon Number.");
// } else {
//   console.log(number + " is NOT a Neon Number.");
// }

// ?10-NOV-25

// *Repeat P-28 Armstrong number

function find_digits(n) {
  let digit = 0;
  while (n > 0) {
    digit++;
    n = Math.floor(n / 10);
  }
  return digit;
}

const isArmstrong = (x) => {
  let dummy = x,
    digit = find_digits(x),
    sum = 0;
  while (x > 0) {
    sum += (x % 10) ** digit;
    x = Math.floor(x / 10);
  }
  if ((dummy = sum)) {
    return true;
  } else {
    return false;
  }
};

// console.log(isArmstrong(153))

//* Repeat T.P-31 ip:28 perfect num explanation:1+2+4+7+14(sum of all the factors except the original number)=28  op:perfect num

const isPerfect = (n) => {
  let org = n,
    fact = [1];
  for (let i = 2; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) {
      fact.push(i);
    }
  }
  let sum = fact.reduce((acc, ele) => acc + ele);
  return sum === org;
};
// console.log(isPerfect(28))

//*Repeat T.P-32 Neon number : ip:9 exp:9**2 =81=8+1=9 op:neon number

function sumofDigits(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

function isNeon(n) {
  let square = n ** 2,
    result = sumofDigits(square);
  return n === result;
}
// console.log(isNeon(9))
// * T.P-33 Automorphic number ip:76 op:automorphic number exp:76^2 =5776 (ends with 76) num whose sq end with the same number
//? 11-NOV-2025

// ! using inbuilt methods

function isAutomorphic() {
  let n = String(76);
  let square = String(76 ** 2);
  return square.endsWith(n);
}
// console.log(isAutomorphic())

function isautomorphic() {
  let n = 82;
  let sq = n ** 2;
  while (n > 0) {
    if (n % 10 !== sq % 10) {
      return false;
    }
    n = Math.floor(n / 10);
    sq = Math.floor(sq / 10);
  }
}
// console.log(isautomorphic())

// * T.P-34 SPY NUMBER IP:1124 EXP: SUM=8 PROD=8 SUM OF ITS DIGITS EQ THE PROD OF ITS DIGITS

// * T.P-35 DISARIUM NUMBER  IP:135 EXP:1^1+3^2+4^3=135

function isDisarium(n) {
  let numbers = String(n).split("");
  let sum = numbers.reduce((acc, ele, i) => {
    return (acc = acc + ele ** (i + 1)); //implicit tye conversion is happening string to number
  }, 0);
  return sum === n;
}
// console.log(isDisarium(135));

// without inbuilt methods

function countDigit(n){
  let count=0
  while(n>0){
    count++
    n=Math.floor(n/10)
  }
  return count
}

function Disarium(n){
  let temp=n, digits=countDigit(n),sum=0
  while(temp>0){
    sum=sum + (temp%10) ** digits
    digits--
    temp=Math.floor(temp/10)
  }
  return sum ===n
}
// console.log(Disarium(135))

// * T.P-36 Harshad number/Niven number ip:18 exp: 1+8=9 , 18/9=0

function isHarshad(n) {
  const digits = String(n).split("").map(Number);
  const sum = digits.reduce((acc, digit) => acc + digit, 0);
  return n % sum === 0;
}

// console.log(isHarshad(18)); 
// console.log(isHarshad(19)); //true
// console.log(isHarshad(21)); 
// console.log(isHarshad(81));   //true


// * T.P-37 Happy number ip:19

function isHappy_num(n){
  let num=n,result={}
  while (n!==1 && !result[num]) {
    let sum=0,temp=num 
    result[num]=true
    while(temp>0){
      sum+=(temp%10)**2
      temp=Math.floor(temp/10)
    }
    num=sum
  }
  return num===1
}
// console.log(isHappy_num(19))

// * T.P-38 DUCK NUMBER ip:507 op:true ip:0123 op:false  num contains zeros not at the beggining

 
//* T.P-39 given  number , function need to return a binary number  0:0 1:1 2:10 3:11 4:100

// ? 13-NOV-2025

function binaryNum(k){
  let res=""
while(k>0){
  res= (k%2) +res
  // console.log(res)
  k=Math.floor(k/2)
}
return res
}
// console.log(binaryNum(9))
// console.log(binaryNum(10))

function toBinary(){
  let bin=""
  bin=(9).toString(2)
  return bin
}
console.log(toBinary())
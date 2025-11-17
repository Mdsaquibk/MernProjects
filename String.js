console.log("string prog");

//? 13-nov-2025

// *P-1 W.A.J.P  to calculate length of a given string

function stringLength() {
  let count = 0,
    str = "abcdef";

  while (str[count] !== undefined) {
    count++;
  }
  return count;
}
// console.log(stringLength())

// *P-2 W.A.J.P to count how many vowels are there inside a given string

function countVowels() {
  let count = 0,
    str = "apple";
  str = str.toLowerCase();
  for (i = 0; i < str.length; i++) {
    if (str[i] == "a" || str[i] == "e" ||str[i] == "i" ||str[i] == "o" || str[i] =="u") {
      count++;
      //   vowels = str;
      //   console.log(vowels);
    }
  }
  return count;
}
// console.log(countVowels());

// * *P-3 W.A.J.P to count how many consonants are there inside a given string

function countConsonants() {
  let count = 0,
    str = "apple34";
  str = str.toLowerCase();
  for (i = 0; i < str.length; i++) {
    let cnt = str[i];
    if (cnt != "a" && cnt != "e" && cnt != "i" && cnt !="o" &&cnt != "u" && cnt >"a" && cnt <"z") {
      count++;
    }
  }
  return count;
}
// console.log(countConsonants());

// ? 14-NOV-2025

// *P-4 W.A.J.P to check the given string is a pallindrome or not

function isPallindrome(){
  let n="dad", dummy=n ,reverse="",i=0
while(i<n.length){
  reverse = reverse+n[i]
  i++
}
if(dummy===reverse){
  return true
}
else{
  return false
}
}
// console.log(isPallindrome())


// * Using inbuilt methods

function pallindromeCheck(){
  let n="madam" , dummy=n ,reverse=" "

  reverse=n.split("").reverse().join("")
  return dummy===reverse
}
// console.log(pallindromeCheck())

// ? Time complexity -DSA -two pointer search


function isPallindrome2(){
  // let str="malayalam"  //true
  let str="banana" //false
  let left=0 ,right=str.length-1
  while(left<right){
    if(str[left] !== str[right]){
      return false
    }
    left++
    right--
  }
  return true
}
console.log(isPallindrome2())

// *P-5 W.A.J.P to find or to count how many words in a sentence 

function count_Words(){
  let count=0 , sentence ="hello welcome to DSA" ,str=""
      count++
      str=sentence.trim().split(" ")
  // for(i=0;i<sentence.length;i++){
    
  // }
  return count
}
console.log(count_Words())

function cword(){
  let sentence = "hello welcome to DSA";
let count = 0;
 if(sentence.length>0 && sentence[0] != " ")
 {
  count++
 }
for (let i = 0; i < sentence.length-1; i++) {
  if (
    // sentence[i] !== " " &&  //? not required wrote in 115 line 
    (sentence[i] === " " && sentence[i + 1] !== " ")
  ) {
    count++;
  }
}
return count
}
console.log(cword())

function eachWord(){
  let str="I love js" , word=[] ,ch=""

  for(i=0;i<str.length;i++){
    if(str !== " "){
      ch=ch + str[i]
    }
    else{
        word.push(ch)
        ch=""
    }
  }
    if(ch !==" "){
        word.push(ch)
        ch=""
    }
   return word 
}
console.log(eachWord())

// *P-6 W.A.J.P  to find biggest and smallest words in the given string . I/P: I LOVE JAVASCIPT O/P:I


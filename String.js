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

// *P-7 W.A.J.P to remove the vowels in a given string ip:hello  o/p:hll

function removeVowels(){
  let str="hello" ,string=str, rvow=[] ,ch=""

  for(i=0;i<string.length;i++){
    if( ch!=="a" || ch!=="e" || ch!=="i" || ch!=="o" || ch!=="u"){
      ch= ch+string[i]
      rvow.push(i)
    }
    else{
      ch=""
    }
  }
  return rvow
}
// console.log(removeVowels()) //error or incomplete

function rVowels(){
  let vowels="aeiou",res="",str="hello"
  for(let i=0;i<str.length;i++){
    if(str[i] !="a" ||str[i] !="e" || str[i] !="i" || str[i] !="o" || str[i] !="u" ){
      res+=str[i]
    }
  }
  return res
}
console.log(rVowels())

function removeVowels(){
  let vowels="aeiou",res="",str="hello"
  for(let i=0;i<str.length;i++){
    if(vowels.includes(str[i])){
      continue
    }
    else{
      res+=str[i]
    }
  }
  return res
}
// console.log(removeVowels())

// *P-8 Reverse a string without using inbuilt methods

//  function revString(){
//   let str="madam" ,rev=""
//  }                         //* INCOMPLETE 


//  ?19-nov-2025

function countWords(){
  let str="Hello World"
let count=0

if(str[0]!= " " && str.length>0){
  count++
}
for(let i=0;i<str.length-1;i++){
  if(str[i]=" "&& str[i+1] !=" " && i<str.length){
    count++
  }
}
return count
}
console.log(countWords())


function getWords(){
  let str="Hello world" ,res=[],word=""
  for(let i=0;i<str.length;i++){
    if(str[i]!==""){
      word+=str[i]
    }
    else{
      if(word.length>0){
        res.push(word)
        word=""
      }
    }
  }
  if(word.length>0){
    res.push(word)
    word=""
  }
  return res
}
console.log(getWords()) //check and verify and write the question

// __________________
function revWord(word){
 let res=""
 for(let i=word.length-1;i>=0;i--){
  res+=word[i]
 }
 return res
}

function revwordsen(){
let str="hello world"
let res="",word=""
for(let i=0;i<str.length;i++){
  if(str[i]!==0){
    word+=str[i]
  }
  else{
    if(word.length>0){
      res+= revWord(word)+" "
      word=""
    }
  }
}
if(word.length>0){
  res+=revWord(word)
  word=""
}
return res
}
console.log(revwordsen())

function anagrams(){
  let st1="listen" , st2="silent" 
  return st1.split("").sort().join("")==st2.split("").sort().join("")
}
console.log(anagrams())


// ? 20-Nov-2025 
// * P W.A.J.P to fins the frequency of a character in a given a string

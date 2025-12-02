//1.Reverse a string without using inbuilt method
const reverse=(str)=>{
    let rev=""
    for(let i=str.length-1;i>=0;i--){
        rev+=str[i]
    }
    return rev
}
console.log(reverse("hello"));


// 2.Check if a string is a palindrome
//with inbuilt
function checkPalindrom(str){
    let rev=str
    return rev===str.split("").reverse().join("")
}
console.log(checkPalindrom("oreo"));

//without inbuilt
function checkPalindrom(str){
    let left=0
    let right=str.length-1
    while(left<right){
        if(str[left]!==str[right]){
            return false
        }
        left++
        right--
    }
    return true
}
console.log(checkPalindrom("malayalam"));


// 3.Count vowels and consonants in a string

//with inbuilt
function countVowelsConsonant(str){
    let vowels="aeiou", consonant="bcdfghjklmnpqrstvwxyz"
    let v=0,c=0
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            v++
        }else if(consonant.includes(str[i])){
            c++
        }

    }
    console.log("Vowels=" +v+ " Consonant= "+c);
    
}
countVowelsConsonant("the quick brown fox jumps over the lazy dog")


function countVowelsConsonant(str){
    let v=0,c=0
    str=str.toUpperCase()
    for(let i=0;i<str.length;i++){
        if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
           if(str.charCodeAt(i)!=65 && str.charCodeAt(i)!=69 && str.charCodeAt(i)!=73 && str.charCodeAt(i)!=79 && str.charCodeAt(i)!=85){
            c++
           }
           else{
            v++
           }
        }

    }
    console.log("Vowels=" +v+ " Consonant= "+c);   
}
countVowelsConsonant("The quick brown fox jumps over the lazy dog")

//4.Find the length of a string without using length
function lengthOfString(str){
    let length=0, i=0
    while(str[i]!==undefined){
        length++
        i++
    }
    return length
}
console.log(lengthOfString(" hello world"));

//5.Count the number of words in a sentence
const wordFromSentence=(str)=>{
    let strArray=[]
    let dummy=""
    for(let i=0;i<str.length;i++){
        if(str[i]!==" "){
            dummy+=str[i]            
        }else if(dummy!==""){
            strArray.push(dummy)
            dummy=""
        }
    }
    if(dummy!==""){
        strArray.push(dummy)
        dummy=""
    }
    return strArray.length
}
console.log(wordFromSentence(" I loveeeee  javascript  "));

//6.Remove all spaces from a string
function removeSpace(str){
    let newStr=""
    for(let i=0;i<str.length;i++){
        if(str[i]===" "){
            continue
        }
        else{
            newStr+=str[i]
        }
    }
    return newStr
}
console.log(removeSpace("The quick brown fox jumps over the lazy dog"));

// 7.Convert a string to uppercase/lowercase manually(ASCII-based)
function convertCase(str){
    let newstr=""
    for (let i = 0; i < str.length; i++) {
        if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
           newstr+= String.fromCharCode(str.charCodeAt(i)+32);
           
        }else if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122){
            // str.charCodeAt(i)-=32
            newstr+=String.fromCharCode(str.charCodeAt(i)-32)
        }else{
            newstr+=str[i]
        }
    }
    return newstr
}
console.log(convertCase("Dukh Dard Pida 24*7"));

//8.Find the first non-repeating character
function findChar(str){
    for(let i=0;i<str.length;i++){
        let count=0,j=0
        while(j<str.length && count<2){
            if(str[i]===str[j]){
                count++
            }
            j++
        }
        if(count===1){
            return str[i]
        }
    }
}
console.log(findChar("abbacddefef"));

//9.check if 2 strings are anagrams
function checkAnagrams(str1,str2){
    str1=str1.toLowerCase()
    str2=str2.toLowerCase()
    let s1=countOccurance(str1),s2=countOccurance(str2)
    console.log(s1);
    console.log(s2);
    if(str1.length===str2.length){
        for(k1 in s1){
            for(k2 in s2){
                if((k1 === k2) && s1[k1]!==s2[k2]){
                    return false
                }
            }
        }
        return true
    }
    return false
}
function countOccurance(str){
    str=str.toLowerCase()
    let s={},i=0
    while(i<str.length){
        let j=0,count=0
        while(j<str.length){
            if(str[i]==str[j]){
                count++
            }
            j++
        }
        s[str[i]]=count
        i++
    }
    return s
}
console.log(checkAnagrams("stop", "post"));

// 10.Count the occurance of each character in a string
function countOccurance(str){
    str=str.toLowerCase()
    let s={},i=0
    while(i<str.length){
        let j=0,count=0
        while(j<str.length){
            if(str[i]==str[j]){
                count++
            }
            j++
        }
        s[str[i]]=count
        i++
    }
    return s
}
console.log(countOccurance("the quick brown fox jumps over the lazy dog"));

//P.1  W.A.J.P  to print each character from a given string
function eachCharacter(){
    let str = "hello";

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}
eachCharacter()
}
// without inbuilt

function eachChar(){
    let str = "hello";
let i = 0;

while (str[i] !== undefined) {
    console.log(str[i]);
    i++;
}
}
eachChar()

// P.5 Find the ASCII value of each character in a given string 

function asciiVal(){
    
}

// P.11 Print each character of a string one by one.

let str = "Hello";

for (let ch of str) {
    console.log(ch);
}

let str = "Hello";

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

// 2.Count uppercase and lowercase letters separately.

let str = "HeLLo WorLD";
let upper = 0;
let lower = 0;

for (let ch of str) {
    if (ch >= 'A' && ch <= 'Z') {
        upper++;
    } else if (ch >= 'a' && ch <= 'z') {
        lower++;
    }
}

console.log("Uppercase:", upper);
console.log("Lowercase:", lower);

// ____
let str = "HeLLo WorLD";
let upper = 0;
let lower = 0;

for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    // Compare directly with character ranges
    if (ch >= 'A' && ch <= 'Z') {
        upper++;
    } else if (ch >= 'a' && ch <= 'z') {
        lower++;
    }
}

console.log("Uppercase:", upper);
console.log("Lowercase:", lower);

// 3. Check if a string starts with a vowel.

let str = "Apple";

let first = str.charAt(0).toLowerCase();

if ("aeiou".includes(first)) {
    console.log("Starts with a vowel");
} else {
    console.log("Does not start with a vowel");
}

// __________

let str = "Apple";

let ch = str[0];  

if (
    ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U' ||
    ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'
) {
    console.log("Starts with a vowel");
} else {
    console.log("Does not start with a vowel");
}


// 4.
let str = "Abc";
let result = "";

for (let ch of str) {
    if (ch === ch.toUpperCase()) {
        result += ch.toLowerCase();
    } else {
        result += ch.toUpperCase();
    }
}

console.log(result);

// ___w inbuilt

let str = "Abc";
let result = "";

for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch >= 'A' && ch <= 'Z') {
        result += String.fromCharCode(ch.charCodeAt(0) + 32); // make lowercase
    } else if (ch >= 'a' && ch <= 'z') {
        result += String.fromCharCode(ch.charCodeAt(0) - 32); // make uppercase
    } else {
        result += ch;
    }
}

console.log(result);


// 5.
let str = "ABcd";

for (let ch of str) {
    console.log(ch, ch.charCodeAt(0));
}
//  _______
let str = "abc@123";

if (/@|#|\$|%|&/.test(str)) {
    console.log("Contains special character");
} else {
    console.log("No special character");
}
// -------
// with inbuilt

let str = "ABcd";

for (let ch of str) {
    console.log(ch, ch.charCodeAt(0));
}

// 6. wid inbuilt
let str = "abc@123";

if (/@|#|\$|%|&/.test(str)) {
    console.log("Contains special character");
} else {
    console.log("No special character");
}

// wdout inbuilt
let str = "abc@123";
let found = false;

for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch === '@' || ch === '#' || ch === '$' || ch === '%' || ch === '&') {
        found = true;
        break;
    }
}

console.log(found ? "Contains special character" : "No special character");

// 7. 
// wid inbuilt
let str = "a1b23c4";
let count = 0;

for (let ch of str) {
    if (!isNaN(ch) && ch !== " ") count++;
}

console.log(count);
// widout inb
let str = "a1b23c4";
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
        count++;
    }
}

console.log(count);
// 8.
let str = "a1b2c3";
let result = str.replace(/[0-9]/g, "");
console.log(result);

// widout inbuilt
let str = "a1b2c3";
let result = "";

for (let i = 0; i < str.length; i++) {
    if (!(str[i] >= '0' && str[i] <= '9')) {
        result += str[i];
    }
}

console.log(result);
// 9. 
// wid inb

let str = "a@b#c%";
let result = str.replace(/[@#$%&]/g, "");
console.log(result);

// wdout inbuilt
let str = "a@b#c%";
let result = "";

for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (!(ch === '@' || ch === '#' || ch === '$' || ch === '%' || ch === '&')) {
        result += ch;
    }
}

console.log(result);
 
// 10.
// wid inb

let str = "hello world";
let words = str.split(" ");
let result = "";

for (let w of words) {
    result += w.charAt(0).toUpperCase() + w.slice(1).toLowerCase() + " ";
}

console.log(result.trim());

// wdout inb
let str = "hello world";
let result = "";
let makeUpper = true;

for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (makeUpper && ch >= 'a' && ch <= 'z') {
        result += String.fromCharCode(ch.charCodeAt(0) - 32); // lowercase → uppercase
        makeUpper = false;
    } 
    else if (!makeUpper && ch >= 'A' && ch <= 'Z') {
        result += String.fromCharCode(ch.charCodeAt(0) + 32); // uppercase → lowercase
    } 
    else {
        result += ch;
    }

    if (ch === " ") makeUpper = true;
}

console.log(result);

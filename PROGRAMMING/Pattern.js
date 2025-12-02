console.log("welcome to node.js");

// * 30-OCT-2025

// TP -9
// 1 0 1 0 1
// 1 0 1 0 1
// 1 0 1 0 1
// 1 0 1 0 1
// 1 0 1 0 1

// const n=7
// for (var i = 1; i <= n; i++) {
//         var x=""
//   for (var j = 1; j <= n; j++) {
//     if (j % 2 === 0) {
//       x += " 0";
//     } else {
//       x += " 1";
//     }
//     // console.log("-");
//   }
//       console.log(x);
// }

// TP-10
//  1 0 0 0 0 0 0
//  0 1 0 0 0 0 0
//  0 0 1 0 0 0 0
//  0 0 0 1 0 0 0
//  0 0 0 0 1 0 0
//  0 0 0 0 0 1 0
//  0 0 0 0 0 0 1

// const n=7
// for (var i = 1; i <= n; i++) {
//         var row=""
//   for (var j = 1; j <= n; j++) {
//     if (i==j) {
//       row += " 1";
//     } else {
//       row += " 0";
//     }
//   }
//       console.log(row);
// }

// T-P-11
//  0 0 0 0 1
//  0 0 0 1 0
//  0 0 1 0 0
//  0 1 0 0 0
//  1 0 0 0 0

// const n=5
// for (var i = 1; i <= n; i++) {
//         var row=""
//   for (var j = 1; j <= n; j++) {
//     if (i+j==n+1) {
//       row += " 1";
//     } else {
//       row += " 0";
//     }
//   }
//       console.log(row);
// }

// P-12
// 1 0 0 0 1
// 0 1 0 1 0
// 0 0 1 0 0
// 0 1 0 1 0
// 1 0 0 0 1

// const n = 5;
// for (var i = 1; i <= n; i++) {
//   var row = "";
//   for (var j = 1; j <= n; j++) {
//     if (i == j) {
//       row += "1 ";
//     } else if (i + j == n + 1) {
//       row += "1 ";
//     } else {
//       row += "0 ";
//     }
//   }
//   console.log(row);
// }

// const m = 5;
// for (var i = 1; i <= m; i++) {
//   var row = "";
//   for (var j = 1; j <= m; j++) {
//     if (i == j || i+j==m+1) {
//       row += "1 ";
//     }
//      else {
//       row += "0 ";
//     }
//   }
//   console.log(row);
// }

//? P-13

// 0 0 1 0 0
// 0 0 1 0 0
// 1 1 1 1 1
// 0 0 1 0 0
// 0 0 1 0 0

// const n = 5;
// for (var i = 1; i <= n; i++) {
//   var row = "";
//   for (var j = 1; j <= n; j++) {
//     if (i ==(Math.ceil(n/2)) || j==(Math.ceil(n/2))) {
//       row += "1 ";
//     } else {
//       row += "0 ";
//     }
//   }
//   console.log(row);
// }

// ? TP-14

// 1 1 0 1 1
// 1 1 0 1 1
// 1 1 0 1 1
// 0 0 1 0 0
// 0 0 1 0 0

// const n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n; j++) {
//     if (
//       (i <= Math.round(n/2) && ( j !== (n/2))) ||
//       (i > Math.round(n/2) && j == Math.round(n/2))
//     ) {
//       row += "1 ";
//     } else {
//       row += "0 ";
//     }
//   }
//   console.log(row);
// }

//? TP -15

// 0 0 0 1 1
// 0 0 0 1 1
// 0 0 0 1 1
// 1 1 1 0 0
// 1 1 1 0 0

// const n=5
// for (let i=1;i<=n;i++){
//     let row=""
//     for(let j=1;j<=n;j++){
//         if((i<=Math.round(n/2) && j<=Math.round(n/2)) || (i> Math.round(n/2) && j>Math.round(n/2))){
//             row +="0 "
//         }
//         else
//         {
//             row+="1 "
//         }
//     }
//     console.log(row)
// }

// ? TP-16

// 1  2  3  4  5
// 6  7  8  9  10
// 11 12 13 14 15
// 16 17 18 19 20
// 21 22 23 24 25

// const n = 5;
// let num = 1;

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n; j++) {
//     if(i<=Math.floor(n/2)){
//         row+=num + "  "
//     }
//     else{
//         row+=num + " "
//     }
//     num++;
//   }
//   console.log(row);
// }

// ? TP-17

// 0 1  0 1   0
// 0 4  0 16  0
// 0 9  0 81  0
// 0 16 0 256 0
// 0 25 0 625 0

// const n = 5;

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n; j++) {
//     if (j % 2 !== 0) {
//       row += "0   ";
//     } else if (j === 2) {
//       row += (i**2 ) + "    ";
//     } else if (j === 4) {
//       row += (i**4) + "    ";
//     }
//   }
//   console.log(row);
// }

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n; j++) {
//     if (j % 2 === 0) {
//       row += i**j + " ";
//     }
//     else{
//         row+= "0 "
//   }
// }
//   console.log(row);
// }

// ?31-10-2025

//? P-18

// 1 1 1 1 1
// 1 0 0 0 1
// 1 0 0 0 1
// 1 0 0 0 1
// 1 1 1 1 1

// const n=5
// for(let i=1;i<=n;i++){

// }incomplete

// P-19

// 1 0 0 0 1
// 1 1 0 1 1
// 1 0 1 0 1
// 1 1 0 1 1
// 1 0 0 0 1

// const n=5
// for (let i=1;i<=n ;i++){
//     let row=""
//     for(let j=1;j<=n;j++){
//         if(j===1 || j===n || i===j || i+j===n+1){
//             row+="1 "
//         }
//         else{
//             row+="0 "
//         }
//     }
//     console.log(row)
// }
// T.P-20

// * 0 0 0 0
// * * 0 0 0
// * * * 0 0
// * * * * 0
// * * * * *

// const n=5
// for(let i=1;i<=n;i++){
//     row=""
//     for(let j=1;j<=n;j++){
//         // if( i>=j)
//            if(j<=i)
//             {
//             row+= "* "
//         }else{
//             row+="0 "
//         }
//     }
//     console.log(row)
// }

// T.P-21
// * * * * *
// * * * * 0
// * * * 0 0
// * * 0 0 0
// * 0 0 0 0

// const n=5
// for(let i=1;i<=n;i++){
//     row=""
//     for(let j=1;j<=n;j++){
//         if( i+j<=n+1){
//             row+= "* "
//         }else{
//             row+="0 "
//         }
//     }
//     console.log(row)
// }

// T.P-22
// 0 0 0 0 *
// 0 0 0 * *
// 0 0 * * *
// 0 * * * *
// * * * * *

// const n=5
// for(let i=1;i<=n;i++){
//     row=""
//     for(let j=1;j<=n;j++){
//         if(i+j>=n+1){
//             row+= "* "
//         }else{
//             row+="0 "
//         }
//     }
//     console.log(row)
// }

// T.P-23
// * * * * *
// 0 * * * *
// 0 0 * * *
// 0 0 0 * *
// 0 0 0 0 *

// const n=5
// for(let i=1;i<=n;i++){
//     row=""
//     for(let j=1;j<=n;j++){
//         if(i<=j){
//             row+= "* "
//         }else{
//             row+="0 "
//         }
//     }
//     console.log(row)
// }

// T.P-24

// 0 0 * 0 0
// 0 * * * 0
// * * * * *
// 0 * * * 0
// 0 0 * 0 0

// const n=5
// for(let i=1;i<=n;i++){
//     row=""
//     for(let j=1;j<=n;j++){
//         if(j==Math.round(n/2) || i==Math.round(n/2) || i %2 ==0 && j % 2 ==0 ){
//             row+= " * "
//         }

//         else{
//             row+=" 0 "
//         }
//     }
//     console.log(row)
// }

//? 01-NOV-2025

// * P-25

// *
// * *
// * * *
// * * * *
// * * * * *

// const n=5
// for(let i=1;i<=n;i++){
//     row=""
//     for(let j=1;j<=i;j++){
//             row+= "* "
//     }
//     console.log(row)
// }

// ? P-26

// * * * * *
// * * * *
// * * *
// * *
// *

// const n=5
// for(let i=n;i>=1;i--){
//     row=""

//     for(let j=1;j<=i;j++){

//             row+= "* "
//     }
//     console.log(row)
// }
// ? Sol-2
// const n=5
// for(let i=1;i<=n;i++){
//     row=""

//     for(let j=1;j<=(n+1)-i;j++){

//             row+= "* "
//     }
//     console.log(row)
// }

//? P-27

//         *
//       * *
//     * * *
//   * * * *
// * * * * *

// const n = 5;
// for (let i = 1; i <= n; i++) {
//   row = "";

//   for (let j = 1; j <= n; j++) {
//     if (i + j >= n + 1) {
//       row += "* ";
//     } else {
//       row += "  ";
//     }
//   }
//   console.log(row);
// }

//? P-28

//  1  1  1  1  *  0  0  0  0 
//  1  1  1  1  *  0  0  0  0
//  1  1  1  1  *  0  0  0  0
//  1  1  1  1  *  0  0  0  0
//  1  1  1  1  *  0  0  0  0

// const n = 5;
// for (let i = 1; i <= n; i++) {
//   row = "";
//   for (let j = 1; j < n * 2 ; j++) {
//     if (j < n) {
//       row += "1 ";
//     } else if (j > n) {
//       row += "0 ";
//     } else {
//       row += "* ";
//     }
//   }
//   console.log(row);
// }


// ? T.P-29

// *
// * *
// * * *
// * * * * 
// * * * * *
// * * * *
// * * * 
// * * 
// *

//? wrong o/p check
// const n=5
// for(let i=1;i<=2*n;i++){
//         let row=""
//         for(let j=1;j<=n;j++){
//                 if((i>=j) && (i+j<=2*n)){
//                         row+="* "
//                 }
//         }
//         console.log(row);
// }


// ? T.P-30
//         *
//       * *
//     * * *
//   * * * *
// * * * * *
//   * * * *
//     * * *
//       * *
//         *

// const n=5
// for(let i=1;i<2*n;i++){
//         let row=""
//         for(let j=1;j<=n;j++){
//                 if((i<=n && i+j>=n+1 ) || (i>n && i-j<n)){
//                         row+="* "
//                 }
//                 else{
//                         row+="  "
//                 }
//         }
//         console.log(row)
// }

// ?T.P-31
//           *
//         * * * 
//     * * * * * *
//   * * * * * * * *
// * * * * * * * * * *

// ? T.P -32

// * * * * * * * * * *
//   * * * * * * * * 
//     * * * * * * 
//       * * * *
//          *

// ? T.P -33

//         * 
//       * * * 
//     * * * * * 
//   * * * * * * * 
// * * * * * * * * * 
//   * * * * * * * 
//     * * * * * 
//       * * * 
//         * 

// T.P -34

// *                 *
// * *             * *
// * * *         * * *
// * * * *     * * * *
// * * * * * * * * * *
// * * * *     * * * *
// * * *         * * *
// * *             * *
// *                 *

// T.P-35


// * * * * *
// *   *   *
// *   *   *
// *   *   *
// * * * * *
// *   *   *
// *   *   *
// *   *   *
// * * * * *

//? 03-11-25

// T.P-36

// *
// * *
// *   *
// *     *
// * * * * *

// let n = 5; 

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     if (j === 1 || j === i || i === n) {
//       row += "* ";
//     } else {
//       row += "  "; 
//     }
//   }
//   console.log(row);
// }

//*  hollow pyramid

// const n=5
//  for(let i=1;i<=n*2;i++){
//     let row=""
//     for(let j=1;j<=n;j++){
//         if(j==1 || (j==i && i<=n) ||  i+j==2*n ){
//             row+="* "
//         }
//         else{
//             row+="  "
//         }
//     }
//     console.log(row)
//?  } wr

// ? 04-11-25

// T.P-37

//*  hollow pyramid

// i+j=n+1 || i-j=n-1
// i+j=n+1 || j-i=n-1

// const n=5 
// for(let i=1;i<=2n;i++){
//     let row=""
//     for(let j=1;j<=n;j++){
//         if(i+j==n+1 || i-j==n-1){
//             row+="* "
//         }
//         else{
//             row+="  "
//         }
//     }
//     console.log(row)
//?  } er

// * inverted pyramid

// const n=5
//  for(let i=1;i<=n*2;i++){
//     row=""
//     for(let j=1;j<=n;j++){
//         if((i==j && j<=n) || i==1 || i+j==2*n){
//             row+="* "
//         }
//         else{
//             row+=" "
//         }
//     }
//     console.log(row)
//?  } er


// alphabet pattern * diamond hollow pattern


//     *    
//    ***   
//   *****  
//  ******* 
// *********
//  ******* 
//   *****  
//    ***   
//     *    


// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let line = "";

//   for (let j = i; j < n; j++) {
//     line += " ";
//   }

//   for (let j = 1; j <= (2 * i - 1); j++) {
//     line += "*";
//   }

//   console.log(line);
// }

// for (let i = n - 1; i >= 1; i--) {
//   let line = "";

//   for (let j = n; j > i; j--) {
//     line += " ";
//   }

//   for (let j = 1; j <= (2 * i - 1); j++) {
//     line += "*";
//   }

//   console.log(line);
// }

//     *    
//    * *   
//   *   *  
//  *     * 
// *       *
//  *     * 
//   *   *  
//    * *   
//     *    

// let n = 5; 

// for (let i = 1; i <= n; i++) {
//   let line = "";

//   for (let j = i; j < n; j++) {
//     line += " ";
//   }

//   for (let j = 1; j <= (2 * i - 1); j++) {
//     if (j === 1 || j === (2 * i - 1)) {
//       line += "*"; 
//     } else {
//       line += " "; 
//     }
//   }

//   console.log(line);
// }

// for (let i = n - 1; i >= 1; i--) {
//   let line = "";

//   for (let j = n; j > i; j--) {
//     line += " ";
//   }

//   for (let j = 1; j <= (2 * i - 1); j++) {
//     if (j === 1 || j === (2 * i - 1)) {
//       line += "*"; 
//     } else {
//       line += " "; 
//     }
//   }

//   console.log(line);
// }

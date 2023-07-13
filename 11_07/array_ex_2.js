// var arr = [
//     [3, 4, 3, 4],
//     [2, 8, 2, 4],
//     [3, 3, 1, 3],
// ]

// var sum = 0;
// for (i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr[i].length; j++) {
//         sum += arr[i][j];
//     }
// }
// console.log(sum);
// var a = [
//     [[1,1],[2,2],[3,3]],
//     [[10,10],[20,20],[30,30]],
//     [[100,100],[200,200],[300,300]],
// ]
// var str1 ='';
// var str2 ='';
// var str3 ='';
// for(let i = 0;i<a.length;i++) {
//     str1 = '';
//     for(j = 0; j<a[i].length; j++) {
//         for(k = 0; k<a[i][j].length;k++){
//             str1 += a[i][j][k] + " ";
//         }
//         str1 += " ";
//     } 
//     console.log(str1);

// }
// var arr = [
//     [3, 1, 5, 3],
//     [4, 4, 2, 2],
//     [1, 1, 1, 1],
//     [3, 0, 3, 5]
// ]
// sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     for ( let j = 0; i < arr[i].length; i++) {
//         if ((i + j) == 3){
//             console.log(a[i][j])
//     }
// }}
// bài tập: 1. in ra các cột chẵn
//          2. tính tổng các số ở đường viền của mảng
//          3. tính tổng các số trên các tam giác của mảng 
//          4. tính tổng các số nguyên tố trong mảng
//          5. tìm ra vị trí [i][j] của số chẵn đầu tiên

//  --------------------------------------------------------------------
//bài 1: in ra các cột chẵn
// var a = [
//         [3, 1, 5, 3],
//         [4, 4, 2, 2],
//         [1, 1, 1, 1],
//         [3, 0, 3, 5]]

//         for(let i = 0; i < a.length; i++){
//             var str1 = '';
//             for(let j = 0; j <a[i].length; j++){
//                 if((j%2) == 0) {
//                     str1 += a[i][j] + "    ";
//                 }
//             }
//             console.log(str1);
//         }

//  --------------------------------------------------------------------
// bai2: tính tổng các số ở đường viền của mảng

// var a = [
//     [3, 1, 5, 3],
//     [4, 4, 2, 2],
//     [1, 1, 1, 1],
//     [3, 0, 3, 5]]
//  var sum = 0;
//  for( let i = 0 ;i <a.length ; i++){
//  for(let j = 0; j< (a[i].length); j++){
//     if ((i == 0) || (i == a.length - 1) || (j == 0) || (j == a[i].length-1))
// {
//     // console.log(a[i][j]);
//     sum += a[i][j];
// }}
// }
// console.log(sum);
//  --------------------------------------------------------------------
// bài 3: tính tổng các số trên các tam giác của mảng 

// var a = [
//     [3, 1, 5, 3],
//     [4, 4, 2, 2],
//     [1, 1, 1, 1],
//     [3, 0, 3, 5]]
//  var sumTG1 = 0;
//  var sumTG2 = 0;
//  var sumTG3 = 0;
//  var sumTG4 = 0;
//  for(let i = 0; i< a.length; i++){
//     for(let j = 0; j <a[i].length; j++){
//         if(i >= j){
//             sumTG1 += a[i][j];
//         }
//         if(i <= j){
//             sumTG4 += a[i][j];
//         }
//         if((i + j) >= 3){
//             sumTG2 += a[i][j];
//         }
//         if((i+j) <= 3){
//             sumTG3 += a[i][j];
//         }
//     }
//  }
// console.log(" Tổng của tam giác 1 là : " + sumTG1);
// console.log(" Tổng của tam giác 2 là : " + sumTG2);
// console.log(" Tổng của tam giác 3 là : " + sumTG3);
// console.log(" Tổng của tam giác 4 là : " + sumTG4);
//---------------------------------------------------------------------

// bài 4: tính tổng các số nguyên tố trong mảng

// var a = [
//         [3, 1, 5, 3],
//         [4, 4, 2, 2],
//         [1, 1, 1, 1],
//         [3, 0, 3, 5]]
// var sumNt
// function sNT(a){
//     var a;
//     var cout = 0;
//     if (a == 0 || a == 1){ 
//         return false;
//     }
//     if(a == 2 || a == 3){
//     return true;
// } else { 
//     for(i = 2; i < a; i++)
//     {
//         if ((a % i) == 0){
//             cout +=1;
//         }
//     }
//     if(cout == 0){
//         return true;
//     }
//     else {
//         return false;
//     }

// }
// }
//         for(let i = 0; i< a.length; i++){
//             var str1 = '';
//             for(let j = 0; j <a[i].length; j++){
//                 if(sNT(a[i][j])){
//                 str1 += a[i][j] + '  ';
//             } else str1 = str1 + '   ';
//         }
//         console.log(str1);
//     }
//-------------------------------------------------------------------

// bài 5: tìm ra vị trí [i][j] của số chẵn đầu tiên
// var a =[[1, 1, 1, 3],
//         [3, 1, 1, 1],
//         [1, 4, 1, 1],
//         [3, 0, 3, 5]]
// var count = 0;
//         for(let i = 0; i< a.length; i++){
//             for(let j = 0; j <a[i].length; j++){
//                 if((a[i][j] % 2) == 0){
//                     console.log("Số chẵn đầu tiên là : " + a[i][j] + " ------ ở vị trí hàng : " + (i+1) + " và cột : " + (j+1));
//                     count++;
//                     break;
//                 }
//         }
//         if(count == 1){
//         break;
// }}

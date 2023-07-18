// //Bài 1: tìm giá trị lớn nhất của mảng

// // let arr = [1,4,3,"t",2,"r",9];
// // function maxInArray(arrayIn){
// //     let max = 0;
// //     for(let i = 0; i < arrayIn.length; i++)
// //     { if(parseInt(arrayIn[i]) > max)
// //         { max = arrayIn[i]
// //         } 
// //     }
// //     return max;
// // }
// // console.log(maxInArray(arr));

// // --------------------------------------------
// Bài 2: tìm giá trị lớn thứ 2 trong mảng

// let arr = [1,4,3,"t",5,"r",3];
// function maxInArray(arrayIn){
//     let max = 0;
//     for(let i = 0; i < arrayIn.length; i++)
//     { if(parseInt(arrayIn[i]) > max)
//         { max = arrayIn[i]
//         } 
//     }
//     return max;
// }
// console.log(maxInArray(arr));
// function max2InArray(arrayIn_2){
//     var max_1 = maxInArray(arrayIn_2);
//     var max_2 = 0;
//     for( let i = 0; i < arrayIn_2.length; i++)
//     {   if((arrayIn_2[i] > max_2) &&( arrayIn_2[i]) < max_1) {
//         max_2 = arrayIn_2[i];
//     }

//     }
//     return max_2;
// }
// console.log(max2InArray(arr));
// --------------------------------------------------------------------------------------------

// Bài 3: Tính tổng 3 giá trị lẻ đầu tiên


// let arr = [1,7,3,4,5,3,3];

// function sum_3_Odd(arr1){
// var sum = 0;
// var count = 0;
// for(let i = 0; i < arr1.length; i++)
// {
//     if(((arr1[i]) % 2) == 1){
//         sum += arr1[i];
//         count ++;
//     };
//     if (count == 3) {return sum;}
// }   
// }
//  console.log(sum_3_Odd(arr));

// ---------------------------------------------------------------------------

// Bài 4: Đảo ngược mảng

// let arr = [1,7,3,4,5,3,3];

// function reverseArr(arrIn){
//     var temp = 0;
//     for(let i = 0; i <= arrIn.length/2; i++)
//  {
//     temp = arrIn[i];
//     arrIn[i] = arrIn[arrIn.length -1 -i];
//     arrIn[arrIn.length- 1 - i] = temp;
//  }
//  return arrIn;
// }
// console.log(reverseArr(arr));
// ------------------------------------------------------------------------------

// Bài 5: nối mảng b vào mảng a

// var a = [1,"w",3,4,5];
// var b = [6,7,"a",9,0];

// function connectArr(arrA, arrB)
// {
//     let newArr = [];
//     for(i = 0 ; i < arrA.length + arrB.length ; i++)
    
//         if(i <= arrA.length-1)
//     {
//         newArr[i] = arrA[i];

//     } else {
//         newArr[i] = arrB[i-(arrA.length)]
//     }
//     return newArr;
// }

// console.log(connectArr(a, b));

//-------------------------------------------------------------------------------

// Bài 6: tính tổng các số nguyên tố trong mảng

// let arr = [1,7,3,4,5,3,3];

// function primeShow(number){
//     if(number < 2) return false;
//     for(let i = 2; i <number-1; i++)
//     { if((number % i) == 0) 
//         return false;
//     }    
//     return true
// }
//   function sumPrimeInArray_1(arrIn){
//     var sum = 0;
//     for(let i = 0; i< arrIn.length; i++)
//     {
//         if(primeShow(arrIn[i])) {
//             console.log(arr[i]);

//             sum += arrIn[i];
//         }

//     }
//     console.log();
//     return sum;

//   }

//   console.log(sumPrimeInArray_1(arr));
// --------------------------------------------------------

// Bài 7: tính trung bình các số chính phương trong mảng

// var arr = [
//     [1,4,2,5,4],
//     [5,2,7,5,6],
//     [2,3,9,5,1],
//     [7,8,6,5,9]
// ]
//  function tbcChinhPhuong(arrIn){
//     var tbc = 0;
//     var sum = 0;
//     var count = 0;
//     for(let i = 0; i < arrIn.length; i++) {
//         for(let j =0; j < arrIn[i].length; j++){
//             if((arrIn[i][j] == Math.sqrt(arrIn[i][j])*Math.sqrt(arrIn[i][j])) && (arrIn[i][j] > 0))
//             {
//                 sum += arrIn[i][j];
//                 count++;
//                 console.log(arrIn[i][j]);
//             }

//         }

//     }
   
//     return tbc = sum/count;
    
//  }
//  console.log(tbcChinhPhuong(arr))
// --------------------------------------------------------------
// Bài 8: hiển thị các cột chẵn
    // var arr = [
    //     [1,4,2,5,4],
    //     [5,2,7,5,6],
    //     [2,3,9,5,1],
    //     [7,8,6,5,9]
    // ]
    //  function hienThiCotChan(arrIn){

    //     for(let i = 0; i < arrIn.length; i++) {
    //         var str = '';
    //         for(let j =0; j < arrIn[i].length; j++){
    //             if((j % 2) == 0)
    //             { str += arrIn[i][j] + '     '}
    //         }
    //         console.log(str);
    //     }
    // }

    //             hienThiCotChan(arr);

// --------------------------------------------------------------
// Bài 9: Tính tổng các giá trị đường viền

// var arr = [
//         [1,4,2,5,4],
//         [5,2,7,5,6],
//         [2,3,9,5,1],
//         [7,8,6,5,9]
//     ]
//      function tongDuongVien(arrIn){
//         var sum = 0;
//         for(let i = 0; i < arrIn.length; i++) {
//             for(let j =0; j < arrIn[i].length; j++){
//                 if((i == 0) || (j == 0) || (i == arrIn.length-1) || (j == arrIn[i].length -1)){
//                     sum += arrIn[i][j];
//                 }
//             }
//          } 
//          return sum;
//         }
//     console.log(tongDuongVien(arr));
// -------------------------------------------------------------
// Bài 10: Tìm ra vị trí [i,j] của số chẳn đầu tiên

// var arr = [
//         [1,3,5,5,5],
//         [5,3,7,5,7],
//         [2,3,9,5,1],
//         [7,8,6,5,9]
//     ]
//      function timViTriSoChanDauTien(arrIn){
//         for(let i = 0; i < arrIn.length; i++) {
//             for(let j =0; j < arrIn[i].length; j++){
//                 if((arrIn[i][j] % 2) == 0){
//                 return console.log("Số chẵn đầu tiên tại vị trí i = " + i + " và j = " + j);}

                
//             }
//         }
//     }
//     timViTriSoChanDauTien(arr)
// ------------------------------------------------------------------
// Bài 11: Tính tổng các số nguyên tố trong mảng 2 chiều
// var arr = [
//             [1,3,5,5,5],
//             [5,3,7,5,7],
//             [2,3,9,5,1],
//             [7,8,6,5,9]
//         ]

//         function primeShow(number){
//                 if(number < 2) return false;
//                 for(let i = 2; i <number-1; i++)
//                 { if((number % i) == 0) 
//                     return false;
//                 }    
//                 return true
//             }

//          function tongCacSoNguyenTo(arrIn){
//             var sum = 10;
//             for(let i = 0; i < arrIn.length; i++) {
//                 for(let j = 0; j < arrIn[i].length; j++){
//                     if(primeShow(arrIn[i][j]) == true)
//                     {
//                         sum += arrIn[i][j];
//                     }
//                 }

//             }
//             return sum;
  
//         }

//         console.log(tongCacSoNguyenTo(arr))
// ----------------------------------------------------------------------
// Bài 12: Tính tổng: tam giác trên trái, trên phải, dưới trái, dưới phải
    //     var arr = [
    // [3, 1, 5, 3],
    // [4, 4, 2, 2],
    // [1, 1, 1, 1],
    // [3, 0, 3, 5]]

    // function tinhCacHinhTamGiac(arrIn){
    //     var sumTG1 = 0;
    //     var sumTG2 = 0;
    //     var sumTG3 = 0;
    //     var sumTG4 = 0;
    //     for(let i = 0; i< arrIn.length; i++){
    //        for(let j = 0; j <arrIn[i].length; j++){
    //            if(i >= j){
    //                sumTG1 += arrIn[i][j];
    //            }
    //            if(i <= j){
    //                sumTG4 += arrIn[i][j];
    //            }
    //            if((i + j) >= 3){
    //                sumTG2 += arrIn[i][j];
    //            }
    //            if((i+j) <= 3){
    //                sumTG3 += arrIn[i][j];
    //            }
    //        }
    //     }
    //    console.log(" Tổng của tam giác 1 là : " + sumTG1);
    //    console.log(" Tổng của tam giác 2 là : " + sumTG2);
    //    console.log(" Tổng của tam giác 3 là : " + sumTG3);
    //    console.log(" Tổng của tam giác 4 là : " + sumTG4);

    // }
    // tinhCacHinhTamGiac(arr);

// ----------------------------------------------------------------------------
// Bài 1: Tính tổng các giá trị lớn hơn giá trị đứng liền trước nó trong mảng 1 chiều các số thực
// var arr = [
//     [3, 1, 5, 3],
//     [4, 4, 2, 2],
//     [1, 1, 1, 1],
//     [3, 0, 3, 5]]

//     function tinhTongCacGiaTriLonHonLienTruoc(arrIn){
//         var sum = 0;
//         for(let i = 0; i< arrIn.length; i++){
//            for(let j = 0; j <arrIn[i].length; j++){
//                if(arrIn[i][j+1]  > arrIn[i][j]){
//                 sum += arrIn[i][j+1];
//                }
//             }
//         }
//         console.log(sum);
//     }
//     tinhTongCacGiaTriLonHonLienTruoc(arr);


// ------------------------------------------------------------------------
// Bài 2: Tính trung bình cộng các số dương trong mảng 1 chiều các số thực

// var arr = [3, 1, 5, 3];
//     var sum = 0;
//     var count = 0;
//     var tbc = 0;
//     function tinhTrungBinhCongCacSoDuong(arrIn){
//         for(let i = 0; i< arrIn.length; i++){
//             if (arrIn[i] > 0) {
//                 sum += arrIn[i];
//                 count ++;
//             }
//         }
//         return tbc = sum/count;
//     }

// console.log(tinhTrungBinhCongCacSoDuong(arr));
// ---------------------------------------------------------------
// Bài 3: Đưa các số chia hết cho 3 về đầu mảng
// var arr = [
//         [2, 1, 0, 3],
//         [4, 4, 3, 6],
//         [1, 1, 6, 1],
//         [3, 9, 2, 3]]
    
//         function duaCacSoChiaHetChoBaVeDau(arrIn){
//             for(let i = 0; i< arrIn.length; i++){
//                 var temp = 0;
//                 count = 0;
//                for(let j = 0; j < arrIn[i].length; j++){
//                    if((arrIn[i][j] % 3) == 0) {
//                     // console.log(arrIn[i][j]);
//                         temp = arrIn[i][j];
//                         arrIn[i][j] = arrIn[i][arrIn[i].length - 1- count]
//                         arrIn[i][arrIn[i].length -1- count] = temp;
//                         count++;
//                    }
//                 }
//                 console.log(temp);
//             }
//         }
// console.log(duaCacSoChiaHetChoBaVeDau(arr));


// var arr = [3, 1, 5, 3, 8 ,9 ,2 ,0];
//     function chiaHetChoBa(arrIn){
//         var temp = 0;
//         var count = 0;
//         for(let i = 0; i< arrIn.length; i++){
//             if ((arrIn[i] % 3) == 0) {
//                 temp = arrIn[i];
//                 arrIn[i] = arrIn[arrIn.length -i]
//             }
//         }
//     }



// ---------------------------------------------------------------
// Bài 4: Đảo ngược mảng ban đầu

// var arr = [3, 1, 5, 3, 8 ,9 ,2 ,0];
        
//             function daoNguocMang(arrIn){
//                 for(let i = 0; i< arrIn.length/2; i++){
//                      var temp = arrIn[i];
//                     arrIn[i] = arrIn[(arrIn.length - 1) -i];
//                     arrIn[(arrIn.length - 1) -i] = temp;
//                 }
//                 return arrIn;
//             }

//             console.log(daoNguocMang(arr));
// ---------------------------------------------------------------
// Bài 5: Hãy liệt kê các số trong mảng 1 chiều các số thực thuộc đoạn [x, y] cho trước



// ---------------------------------------------------------------

// Bài 6: Hãy liệt kê các giá trị trong mảng mà thỏa điều kiện lớn hơn giá trị tuyệt đối của giá trị đứng liền sau nó
// ---------------------------------------------------------------

// Bài 7: Hãy liệt kê các vị trí mà giá trị tại đó là số chính phương trong mảng 1 chiều các số nguyên
// ---------------------------------------------------------------

// Bài 8: Đếm số dương chia hết cho 7 trong mảng
// ---------------------------------------------------------------

// Bài 9: Đếm số nguyên tố trong mảng
// ---------------------------------------------------------------

// Bài 10: Hãy xác định số lượng phần tử kề nhau mà cả 2 đều chẵn
// ---------------------------------------------------------------

// Bài 11: Kiểm tra mảng có đối xứng không? Có trả về 1, không có trả về 0
// ---------------------------------------------------------------

// Bài 12: Kiểm tra mảng có tăng dần hay không
// ---------------------------------------------------------------

// Bài 13: Hãy cho biết tất cả các phần tử trong mảng a có nằm trong mảng b không
// ---------------------------------------------------------------

// Bài 14: Kiểm tra ma trận 2 chiều có toàn dương hay không
// ---------------------------------------------------------------

// Bài 15: Kiểm tra một cột ma trận có giảm dần hay không
// ---------------------------------------------------------------

// Bài 16: Kiểm tra ma trận có tồn tại số lẻ hay không

// var arr = [
//                 [2, 1, 0, 3],
//                 [4, 4, 3, 1],
//                 [1, 1, 6, 1],
//                 [8, 6, 2, 0]]
            
//                 function kiemTraSoLe(arrIn){
//                     for(let i = 0; i< arrIn.length ; i++){
//                        for(let j = 0; j < arrIn[i].length -1; j++){
//                             if((arrIn[i][j] % 2) == 1)
//                             {
//                                 return console.log("Mảng có tồn tại số lẻ")
//                             }

//                         }
//                     }
//                     return console.log("Mảng không tồn tại số lẻ")
//                 }
//  kiemTraSoLe(arr)

// -------------------------------------------------------------

// let a = [
//     [5,3,2,1],
//     [4,1,2,2],
//     [1,1,1,1],
//     [3,1,3,5]
// ]
// function hang_1(arr){
//     for (let i=0; i<arr.length; i++){
//        var flag = 0
//         for (let j=0; j<arr[i].length - 1 ; j++){
//             if (arr[i][j] >= arr[i][j+1] ){s
//                 flag == 1;
//                 }
//                 else { 
//                     flag == 0;
//                 break;}
//             } 
//      if(flag == 1){console.log(arr[i]) }
//     }

//     }
//     hang_1(a);
// ---------------------------------------------------------------

// Bài 17: Liệt kê các dòng giảm dần trong ma trận

// var arr = [
//             [2, 1, 0, 3],
//             [4, 4, 3, 1],
//             [1, 1, 6, 1],
//             [8, 6, 2, 0]]
        
//             function dongGiamDan(arrIn){
//                 for(let i = 0; i< arrIn.length ; i++){
//                     var flag = true;
//                    for(let j = 0; j < arrIn[i].length -1; j++){
//                        if(arrIn[i][j+1] > arrIn[i][j]) {
//                         flag = false;
//                         break;
//                        }
//                     }
//                     if(flag == true){
//                         console.log(arrIn[i])
//                     }
//                 }
//             }
//         dongGiamDan(arr);


// ---------------------------------------------------------------

// Bài 18: Tìm số chẵn đầu tiên trong ma trận
// ---------------------------------------------------------------

// Bài 19: Tìm số chẵn lớn nhất trong ma trận
// ---------------------------------------------------------------

// Bài 20: Liệt kê các dòng có tổng lớn nhất

// var arr = [
//             [9, 1, 9, 9],
//             [4, 4, 3, 1],
//             [1, 1, 6, 1],
//             [8, 6, 2, 0]]
        
//             function printSumMax(arrIn){
//                 var arrSum = new Array(arr.length)
//                 for(let i = 0; i< arrIn.length ; i++){
//                     var sum = 0;
//                    for(let j = 0; j < arrIn[i].length; j++){
//                        sum += arrIn[i][j];
//                    }
//                    arrSum[i] = sum;
//                 }
//             var maxSum = 0;
//             for(var k = 0; k < arrSum.length; k++)
//             {
//                 if(arrSum[k] > maxSum)
//                 {
//                     maxSum = arrSum[k];
//                     return arrIn[k];
//                 }
//             }

//             }
//         console.log(printSumMax(arr));
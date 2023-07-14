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


function checkPrime(number){
    if(number <2){
        return false;
    }
    for(let i = 2; i<number;i++){
        if(number % i == 0){
            return false;
        }
    }
    return true;
}

function printPrime(number){
    let count  = 0;
    let i = 2;
    while(count < number){
        let check = checkPrime(i);
        if(check == true){
            console.log(`${i} là số nguyên tố ${count + 1}`);
            count++;
        }
        i++;
        
    }
}

printPrime(1115);
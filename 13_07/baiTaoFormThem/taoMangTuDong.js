// // var A = [
// //     ['','','','',],
// //     ['','','','',],
// //     ['','','','',],
// //     ['','','','',],
// //     ['','','','',],
// // ];






var A = taoMangTuDong(5, 5);
     var sumTG1 = 0;
     var sumTG2 = 0;
     var sumTG3 = 0;
     var sumTG4 = 0;
     for(let i = 0; i< A.length; i++){
        for(let j = 0; j <A[i].length; j++){
            if(i >= j){
                sumTG1 += A[i][j];
            }
            if(i <= j){
                sumTG4 += A[i][j];
            }
            if((i + j) >= 3){
                sumTG2 += A[i][j];
            }
            if((i+j) <= 3){
                sumTG3 += A[i][j];
            }
        }
     }
    console.log(A);
    console.log(" Tổng của tam giác 1 là : " + sumTG1);
    console.log(" Tổng của tam giác 2 là : " + sumTG2);
    console.log(" Tổng của tam giác 3 là : " + sumTG3);
    console.log(" Tổng của tam giác 4 là : " + sumTG4);
 
 function taoMangTuDong(b, c){
    var b ;
    var c ;
    var A = new Array(b).fill(new Array(c));
    
     for(let i = 0; i < b; i++)
     {
        for(let j = 0; j < c; j++){
            A[i][j] = (Math.floor(Math.random() * 9) + 1);  
        }
     }
 return A;};


// var arr = Array(5).fill(Array(2));
// // arr[0][0] = 'foo'; // also modifies arr[1][0]
// console.info(arr);
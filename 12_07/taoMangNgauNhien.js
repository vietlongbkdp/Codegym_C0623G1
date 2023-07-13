var matrix = new Array(5).fill(new Array(5));
for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = Math.floor((Math.random() * 10));
    }
}
// var matrix = [
//     [1,2,3,4],
//     [3,5,2,5],
//     [5,7,3,4],
//     [1,5,6,4]
// ]
console.log(matrix);
// for(let i = 0; i < matrix.length; i++) {
//     var str1 = '';
//     for (let j = 0; j < matrix[i].length; j++) {
//         if (i == j) {
//             matrix[i][j] = 0;
//         }
//         str1 += matrix[i][j] +'  '
//     }
//     console.log(str1);
// }
console.log(matrix[1]);
console.log(matrix[2][1]);
console.log(matrix[3]);
console.log(matrix[4]);
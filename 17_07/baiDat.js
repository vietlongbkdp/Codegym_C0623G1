var arr = [
    [1, 2, 5, 2, 12],
    [12, 2, 5, 8, 6],
    [10, 7, 5, 3],
    [1, 3, 9, 4, 6, 7, 8, 2]
]
function listMaxSumRow(array) {
    let maxSumRow = 0;
    for (let i = 0; i < array.length; i++) {
        var sum = 0;
        for (let j = 0; j < array[i].length; j++) {
            sum += array[i][j];
        }
        // console.log(sum);
        if(sum > maxSumRow){
            maxSumRow = sum;
        }
    

        //     if (count == 0) {
        //         sum[i] += array[i][j];
        //         maxSumRow = sum[i];
        //         count = 1;
        //     }
        //     else
        //         sum[i] += array[i][j];
        // }
    //     if (sum[i] > maxSumRow) {
    //         maxSumRow = sum[i];
    //     }
    }
    return maxSumRow;
}

console.log(listMaxSumRow(arr));
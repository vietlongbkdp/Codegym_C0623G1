
let arr = [1, 7, 3, 4, 5, 3, 3];

function primeShow(number){
    if(number < 2) return false;
    for(let i = 2; i <number-1 ; i++)
    { if((number % i) === 0) 
        return false;
    }    
    return true;
}
  function sumPrimeInArray_1(arrIn){
    let sum = 0;
    for(let i = 0; i < arrIn.length; i++)
    {
        if(primeShow(arrIn[i])) {
            console.log(arrIn[i]);

            sum += arrIn[i];
        }

    }
    console.log();
    return sum;

  }

  console.log(sumPrimeInArray_1(arr));
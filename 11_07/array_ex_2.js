var A = [4,5,1,5,7,-1];
for( let i = 0; i < A.length/2; i++)
{
    var temp = A[i];
    A[i]=A[A.length-1-i];
    A[A.length-1-i] = temp;

}
console.log(A);
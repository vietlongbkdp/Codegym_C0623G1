let x = [-3, 5, 1, 3, 2, 10];
for(let i = 0; i < x.length/2; i++)
{
    var temp;
    temp = x[i];
    x[i] = x[(x.length-1)-i];
    x[(x.length-1)-i] = temp;

}
console.log(x);
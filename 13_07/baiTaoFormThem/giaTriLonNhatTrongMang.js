let numbers = [-3, 5, 1, 3, 2, 10];
var max = 0;
for(let i = 0; i< numbers.length;i++)
{ 
    if(numbers[i] > max) 
    max = numbers[i]
}
console.log('Max của mảng là : ' + max )
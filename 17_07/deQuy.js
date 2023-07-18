// var string = 'qwertrewq';
// var arr = string.split('');
// // console.log(arr)
// function isPalindrome(s) {
//     if (s[0] === s[s.length - 1]) {
//         var news = [];
//         for (i = 1; i < s.length - 1; i++) {
//             news[i - 1] = s[i];
//         }
//         if (news.length == 0) {
//             return 1;
//         } else
//             s = news;
//         isPalindrome(s);
//     }
//     else
//         return 0;
// }
// console.log(isPalindrome(arr));


var string = 'zxcbnnbcxz';
var arr = string.split("");
function isPalindrome(a){

    if(a[0] === a[a.length -1]){
        var newArr = [];
        for(let i = 1; i < a.length-1; i++){
            newArr[i-1] = a[i];
        }
        if(newArr.length == 0){
            return true
        }
        else {
        a = newArr;
        return isPalindrome(a);
        }
    }else
    {
    return false;}
}
console.log(isPalindrome(arr));

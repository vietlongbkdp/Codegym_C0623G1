// module.exports = {
//     oddNumbers
//   };
  
  function oddNumbers() {
      var arr = [];
      for(let i = 1; i<50; i+2){
          arr.push(i);
      }
      return arr; 
  }
  console.log(oddNumbers());
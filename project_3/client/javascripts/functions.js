//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) => Array.from({
  length: (stop - start) / step + 1}, (_, i) => start + (i * step));

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);

let bitBatBotOrNot = (n) => {
  let result = "";
  //is n divisible by 3?
  if(n % 3 == 0){
    result = `${result}Bit`;
  };
  //is n divisible by 5?
  if(n % 5 == 0){
    result = `${result}Bat`;
  };
  //is n divisible by 7?
  if(n % 7 == 0){
    result = `${result}Bot`;
  };
  if(n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0){
    result = `${result}Not`
  }
  return result;
}

let findAllbitBatBotOrNots1 = (arr) => {
  let result = "";
  let num;
  let newArr = arr.map(function(num){
    //is num divisible by 3?
    if(num % 3 == 0){
      result = ": Bit";
    };
    //is num divisible by 5?
    if(num % 5 == 0){
      result = ": Bat";
    };
    //is num divisible by 7?
    if(num % 7 == 0){
      result = ": Bot";
    };
    //is num not divisible by 3, 5, or 7?
    if(num % 3 !== 0 && num % 5 !== 0 && num % 7 !== 0){
      result = ": Not";
    }
    return num + result;
  })
  return newArr;
}

let findAllbitBatBotOrNots2 = (arr) => {
   //your code goes here
   //use for statement
}

let findAllbitBatBotOrNots3 = (arr) => {
   //your code goes here
   //use for..of statement
}

let findAllbitBatBotOrNots4 = (arr) => {
   //your code goes here
   //use forEach method
}

//test the functions

findAllbitBatBotOrNots1(arrOf1To100)

findAllbitBatBotOrNots2(arrOf1To100)

findAllbitBatBotOrNots3(arrOf1To100)

findAllbitBatBotOrNots4(arrOf1To100)

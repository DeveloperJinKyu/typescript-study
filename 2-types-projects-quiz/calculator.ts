/**
 * Let's make a calculator 🧮
 */

type Methods = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';
type Calculate = number | Error;
function calculate(methods:Methods, num1:number, num2:number): Calculate{
  switch(methods){
    case 'add':
      return num1 + num2;
    case 'substract':
      return num1 - num2;
    case 'multiply' :
      return num1 * num2;
    case 'divide' :
      return num1 / num2;
    case 'remainder' :
      return num1 % num2;
    default: 
      throw Error('알 수 없는 methods입니다.');
  }
}
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1

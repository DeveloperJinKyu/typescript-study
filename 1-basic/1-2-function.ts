{
  // // Javascript의 함수
  function javascriptAdd(num1, num2) {
    return num1 + num2;
  }
  console.log(javascriptAdd(1, 2));

  // // TypeScript의 함수
  function typeScriptAdd(num1: number, num2: number): number {
    return num1 + num2;
  }
  console.log(typeScriptAdd(1, 2));

  // // Javascript Promise
  function javascriptPromise(id) {
    return new Promise((resolve, reject) => {
      resolve(parseInt(id));
    });
  }
  javascriptPromise('1').then((result) => {
    console.log(result);
  });

  // TypeScript Promise
  function typeScriptPromise(id: string): Promise<number> {
    return new Promise((resolve, reject) => {
      resolve(parseInt(id));
    });
  }
  typeScriptPromise('1').then((result) => {
    console.log(result);
  });

  // Optional Parameters
  function optionalParameters(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  optionalParameters('John', 'doe');
  optionalParameters('John');


  function optionalParameters2(firstName: string, lastName: string | undefined) {
    console.log(firstName);
    console.log(lastName);
  }
  // Optional Parameters with undefined인 경우 꼭 undefined를 명시적으로 지정해야 한다.
  optionalParameters2('John', undefined);

  // Default Parameters
  function defaultParameters(firstName: string, lastName: string = 'default name') {
    console.log(firstName);
    console.log(lastName);
  }
  defaultParameters('John');
  defaultParameters('John', 'doe');

  // Rest Parameters
  // Rest Parameters는 함수의 파라미터 개수를 정해놓지 않고, 동적으로 파라미터를 받을 수 있다.
  // Rest Parameters는 함수의 마지막 인자로만 사용할 수 있다.
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  console.log(addNumbers(1, 2, 3, 4, 5));
  console.log(addNumbers(1, 2, 3));
}
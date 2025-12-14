{
  // Javascript의 함수
  function javascriptAdd(num1, num2) {
    return num1 + num2;
  }
  console.log(javascriptAdd(1, 2));

  // TypeScript의 함수
  function typeScriptAdd(num1: number, num2: number): number {
    return num1 + num2;
  }
  console.log(typeScriptAdd(1, 2));

  // Javascript Promise
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
}
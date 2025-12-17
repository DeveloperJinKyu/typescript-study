{
  // assertion: 타입 단언
  // assertion은 타입을 강제하는 것으로 지양하는게 좋다. 
  function jsStrFunc(): any {
    return 'hello';
  }

  const result = jsStrFunc();
  console.log((result as string).length);
  
  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1));
  // assertion을 사용하면 타입 체크를 무시하고 타입을 강제할 수 있다.
  // 하지만 잘못된 상황에서 assertion을 사용하면 애플리케이션 레벨에서 오류를 발생시킬 수 있다.

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // 느낌표를 붙이면 무조건 undefined가 아니라고 단언하는 것
  // 실시간으로 애플리케이션이 죽을 수도 있다..

  const button = document.querySelector('button');
  button!.addEventListener('click', () => {
    console.log('click');
  });
}
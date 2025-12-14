{
  /**
   * Javascript의 데이터 타입
   * Primitive types:
   * - Number
   * - String
   * - Boolean
   * - Null
   * - Undefined
   * - Symbol
   * - BigInt
   * Reference types:
   * - Object
   * - Array
   * - Function
   * - Date
   * - RegExp
   * - Error
   * - Promise
   * - Map
   * - Set
   */

  // TypeScript의 데이터 타입

  // Number
  const age:number = 5;
  
  // String
  const name:string = 'hello';

  // Boolean
  const isStudent:boolean = true;

  // undefined: 값이 있는지 없는지 아직 결정되지 않은 경우
  let num: number | undefined = 1;

  // null: 값이 없다는 것을 명시적으로 표시하는 경우
  let person: string | null = null;

  // 단독적으로 null 또는 undefined를 사용하는 경우는 거의 없다.
  // 데이터 타입이 아직 결정되지 않은 경우 | undefined 를 사용한다.

  function findUser(): number | undefined {
    return undefined;
  }

  // unknown: 아직 결정되지 않은 데이터 타입
  let notSure: unknown = 42;
  notSure = 'hello';
  // unknown 타입은 어떤 타입이든 할당할 수 있다.
  // unknown 타입은 가능한 지양한다.

  // any: 모든 타입을 할당할 수 있다.
  let anything: any = 42;
  anything = 'hello';
  anything = true;
  // any 타입도 가능한 지양한다.

  // void: 함수에서 반환값이 없을 때 사용
  function voidFunction(): void {
    console.log('void');
  }
  voidFunction();

  // never: 절대 반환하지 않는 함수
  function throwError(message: string): never {
    throw new Error(message);
  }
  // throwError('error message');

  function infiniteLoop(): never {
    while (true) {
      console.log('infinite loop');
    }
  }
  // infiniteLoop();

  // object: 객체 타입
  let personObj: object = { name: 'John', age: 30 };
  console.log(personObj);
  let personArray: object[] = [personObj, personObj];
  console.log(personArray);
  // object 타입은 원시 타입을 제외한 모든 타입을 의미한다.
  
  // object는 상세한 타입을 지정하는 것을 지향한다.
  let personObj2: { name: string, age: number } = { name: 'John', age: 30 };
  console.log(personObj2);
}
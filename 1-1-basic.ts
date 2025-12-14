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
}
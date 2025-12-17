{
  // Javascript에서 enum 사용 방법
  const DAYS_ENUM = Object.freeze({
    MONDAY: 0,
    TUESDAY: 1,
    WEDNESDAY: 2,
    THURSDAY: 3,
    FRIDAY: 4,
    SATURDAY: 5,
    SUNDAY: 6,
  })
  const day = DAYS_ENUM.MONDAY;

  // TypeScript에서 enum 사용 방법
  // enum은 값을 입력하지 않으면 숫자가 0부터 자동 할당된다.
  enum Days {
    MONDAY, // 0
    TUESDAY, // 1
    WEDNESDAY, // 2
    THURSDAY, // 3
    FRIDAY, // 4
    SATURDAY, // 5
    SUNDAY, // 6
  }

  let typescriptEnum: Days = Days.MONDAY;
  console.log(typescriptEnum);
  // typescriptEnum = 10; // 타입 추론으로 인해 오류 발생
  // Typescript 5.0부터 enum 타입 체크가 더 엄격해졌다.
  // 타입 안전성을 높이기 위해 enum 멤버만 허용하도록 변경됨.

  // union타입으로 심플하게 대체 가능한 경우라면 union 사용하고, 복잡해지면 Enum 사용
  type UnionErrors = 'error message simple version' | 'error message complicated version' | 'error message complicated detail version';
  enum EnumErrors {
    Short = 'error message simple version' ,
    Long = 'error message complicated version',
    Detail = 'error message complicated detail version',
  }

  let unionError: UnionErrors = 'error message simple version';
  let enumError: EnumErrors = EnumErrors.Short;

  console.log(unionError);
  console.log(enumError);
}
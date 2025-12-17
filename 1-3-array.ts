{
  // Array
  const fruits: string[] = ['사과', '바나나'];
  const scroes: number[] = [1, 2, 3];
  const numArr: Array<number> = [1, 2, 3];

  // readonly 사용을 지향하기
  function printArray(fruits: readonly string[]){
    // fruits.push()
  }

  // Tuple: 배열 안에 각각 다른 타입에 아이템들이 혼합되어 있음
  // Tuple 사용 권장 x -> interface, type alias, class로 대체 가능
  // Tuple 사용하는 경우 -> 동적으로 관련있는 타입을 묶어서 사용하는 경우 ex: react의 useState
  let student: [string, number];
  student = ['name', 123];
  const [name, age] = student;
}
{
  // Type Alias: 타입을 사용자가 직접 지정할 수 있다.

  type Text = string;
  const name:Text = 'jinkyu';

  type Student = {
    name: string;
    age: number;
  }
  const student: Student = {
    name: 'hong',
    age: 12,
  }

  // String Literal Types: 타입을 문자열로 지정
  type Name = 'name';
  let jinkyuName: Name;
  jinkyuName = 'name';
}
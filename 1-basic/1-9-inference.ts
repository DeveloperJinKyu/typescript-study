{
  // type inference: 타입 추론
  let text = 'hello';
  //text = 123; // 오류 발생 -> 타입 추론으로 인해 오류 발생하지 않음

  // function의 파라미터에 타입을 지정하지 않으면 any 타입으로 추론된다.
  function print (message){
    console.log(message);
  }
  
  function print2 (message = 'default message'){
    console.log(message);
  }

  // function의 파라미터 값이 모두 number 타입이면 반환값도 자동으로 number 타입으로 추론된다.
  function add (x: number, y: number){
    return x + y;
  }
  console.log(add(1, 2));

  // 원시 타입처럼 아주 간단한 타입 추론이 가능한 경우라면 타입 추론을 사용하고, 복잡해지면 타입 지정을 사용한다.
}
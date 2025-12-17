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
}



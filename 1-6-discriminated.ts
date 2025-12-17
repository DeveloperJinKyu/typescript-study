{
  // Discriminated Union: Union 타입을 사용할 때 공통된 속성을 가져서 구분하기 쉽게 만든다.
  type SuccessState = {
    status: 200
    response: {
      body: string;
    };
  }
  type FailState = {
    status: 400
    error:{
      message: string;
    };
  }
  type LoginState = SuccessState | FailState

  function printLoginState(state: LoginState):void{
    if(state.status === 200){
      console.log(`success! ${state.response.body}`);
    }else{
      console.log(`success! ${state.error.message}`);
    }
  }
}
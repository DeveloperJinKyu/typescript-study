{
  // Union Types: 또는 OR
  // Union Types은 활용도가 높다

  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction){
    console.log(direction);
  }
  move('down')

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 8;

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  }
  type FailState = {
    error:{
      message: string;
    };
  }
  type LoginState = SuccessState | FailState
  function login(): LoginState {
    return {
      response: {
        body: 'success login!'
      }
    };
  }

  // printLoginState(state)
  // function printLoginState(state: LoginState):void{
  //   if('response' in state){
  //     console.log(`success! ${state.response.body}`);
  //   }else{
  //     console.log(`success! ${state.error.message}`);
  //   }
  // }
}
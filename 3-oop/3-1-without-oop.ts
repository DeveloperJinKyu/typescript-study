{
  // 절차지향적으로 커피기계 만들기
  
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAMM_PER_SHOT: number = 7;

  let coffeeBeans: number = 0;

  function makeCoffee(shots: number): CoffeeCup{
    if(coffeeBeans < shots * BEANS_GRAMM_PER_SHOT){
      throw new Error('원두가 충분하지 않습니다.');
    }
    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }

  coffeeBeans += 21;
  console.log('만들기 전 원두', coffeeBeans);
  const coffee = makeCoffee(4);
  console.log('만들어진 커피: ', coffee);
  console.log('만든 후 원두', coffeeBeans);
}
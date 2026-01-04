{
  // abstraction 추상화 시켜보기
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 추상화는 외부에서 사용자가 선택할 수 있는 옵션을 간소화해서 간편하게 사용할 수 있도록 해준다.
  // ex) 내부적으로 어떻게 작동하는지는 알 수 없지만, 버튼 하나만 누르면 원두를 추출하는 커피머신.
  // 추상화는 private 접근 제어자를 사용하는 방법과 interface를 사용하는 방법 이렇게 2가지가 있다.

  interface CoffeeMaker {
    fillCoffeeBean(coffeeBeans: number): void;
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker{
    private static BEANS_GRAM_PER_SHOT: number = 7; 
    private coffeeBeans: number = 0; 

    // 생성자 함수에 private를 사용하면 생성자 함수를 호출할 수 없고 다른 생성 함수를 사용해야 한다는 의미이다.
    private constructor(coffeeBeans: number){
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine{
      return new CoffeeMachine(coffeeBeans);
    }

    // 클래스 내부의 속성 값을 외부로 노출하지 않고 내부에서 조건부 로직을 활용하여 안전하게 속성값을 변경
    fillCoffeeBean(coffeeBeans: number){
      if(coffeeBeans < 0){
        throw new Error('정상적인 원두 채우기가 아닙니다.');
      }
      this.coffeeBeans += coffeeBeans;
    }

    private grindBeans(shots: number): void{
      console.log(`${shots}샷을 위한 원두 분쇄하는중...`);
      if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT){
        throw new Error('원두가 충분하지 않습니다.');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat(): void{
      console.log(`커피머신 예열중...🔥`);
    }

    private extract(shots: number): CoffeeCup{
      console.log(`${shots}샷 커피 추출중...☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }
  
    makeCoffee(shots: number): CoffeeCup{
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  const maker = CoffeeMachine.makeMachine(7);
  maker.fillCoffeeBean(21);
  console.log(maker.makeCoffee(2));

  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(7);
  maker2.fillCoffeeBean(14);
  console.log(maker2.makeCoffee(2));

}
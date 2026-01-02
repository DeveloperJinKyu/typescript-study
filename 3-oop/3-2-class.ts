{
  // 클래스기반 객체지향적으로 커피기계 만들기

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    // static이 있으면 클래스 레벨, 없으면 인스턴스 레벨
    // 인스턴스 레벨에 두면 생성된 인스턴스마다 해당 필드를 갖고 있으므로 메모리 낭비가 발생
    static BEANS_GRAM_PER_SHOT: number = 7; // 클래스 레벨
    coffeeBeans: number = 0; // 멤버 변수 (인스턴스 레벨)

    constructor(coffeeBeans: number){
      this.coffeeBeans = coffeeBeans;
    }

    // static은 함수에도 사용할 수 있다.
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }
  
    makeCoffee(shots: number): CoffeeCup{
      if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT){
        throw new Error('원두가 충분하지 않습니다.');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(21);
  console.log(maker);
  console.log(maker.makeCoffee(2));
  const maker2 = CoffeeMaker.makeMachine(3);
  // Math.random() 이 메서드도 static method이다.
}
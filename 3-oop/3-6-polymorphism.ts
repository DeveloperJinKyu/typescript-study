{
  // Inheritance 상속으로 다양한 커피 기계 만들기
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; 
    private coffeeBeans: number = 0; 

    constructor(coffeeBeans: number){
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine{
      return new CoffeeMachine(coffeeBeans);
    }

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

    clean(): void {
        console.log('커피 머신기를 소독중...🧼');
    }
  }

  class CaffeLatteMachine extends CoffeeMachine{

    constructor(coffeeBeans:number, public readonly serialNumber: string){
      super(coffeeBeans)
    }

    private steamMilk(): void {
      console.log('우유 스팀하는중...');
    }

    // 오버라이딩(덮어쓰기): 자식 클래스에서 부모 클래스에 있는 메서드를 재정의하는 경우 super 키워드를 사용하여 부모 클래스의 메서드를 호출할 수 있다.
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {...coffee, hasMilk: true}
    }
  }

  class SweetCoffeeMachine extends CoffeeMachine{
    private addSugar(): void {
      console.log('설탕 추가하는중...');
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.addSugar();
      return {...coffee, hasSugar: true}
    }
  }
  // 다형성이란 하나의 인터페이스나 또는 부모 클래스를 상속받은 자식 클래스들이
  // 인터페이스나 부모 클래스에 있는 메서드를 다른 방식으로 다양하게 구성함으로써 다양성을 가지는 것을 의미한다.
  const machines: CoffeeMaker[] = [new CoffeeMachine(16), new CaffeLatteMachine(16, '123'), new SweetCoffeeMachine(16)];
  machines.forEach(machine => {
    console.log('--------------------------------');
    console.log(machine.makeCoffee(1));
    console.log('--------------------------------');
  });
}
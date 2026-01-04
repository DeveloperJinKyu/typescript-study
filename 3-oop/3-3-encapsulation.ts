{
  // Encapsulation 캡슐화 시켜보기
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public: 외부에서 접근가능
  // private: 외부에서 접근 불가능
  // protected: 상속받은 클래스 내에서만 접근 가능
  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; 
    private coffeeBeans: number = 0; 

    // 생성자 함수에 private를 사용하면 생성자 함수를 호출할 수 없고 다른 생성 함수를 사용해야 한다는 의미이다.
    private constructor(coffeeBeans: number){
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker{
      return new CoffeeMaker(coffeeBeans);
    }

    // 클래스 내부의 속성 값을 외부로 노출하지 않고 내부에서 조건부 로직을 활용하여 안전하게 속성값을 변경
    fillCoffeeBean(coffeeBeans: number){
      if(coffeeBeans < 0){
        throw new Error('정상적인 원두 채우기가 아닙니다.');
      }
      this.coffeeBeans += coffeeBeans;
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

  // const maker = CoffeeMaker.makeMachine(7);
  // maker.fillCoffeeBean(7);
  // console.log(maker.makeCoffee(2));

  // Getter & Setter
  class User{
    // Getter는 호출한 시점에 접근한다.
    // 함수 형태로 선언하고 사용할 때는 일반 멤버 변수처럼 사용한다.
    get fullName(): string{
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number{
      return this.internalAge;
    }
    set age(num: number){
      if(num < 0){
        throw new Error('유효한 나이값이 아닙니다.');
      }
      this.internalAge = num;
    }
    // 생성자 함수 인자에 private를 붙이면 자동으로 외부에서 생성할 때 전달받은 값이 내부 private 변수로 선언 및 할당된다.
    constructor(private firstName: string, private lastName: string){
    }
  }

  const user = new User('jinkyu','kim');
  console.log(user.fullName);
  console.log(user.age);
  user.age = 6;
  console.log(user.age);
}
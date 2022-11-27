type Human = {
  name: string
  mail?: string
  age?: number
}

class Person {
  human:Required<Human>

  constructor(nm: string, ml: string, ag: number) {
    this.human = { name: nm, mail: ml, age: ag }
  }

  print(): void {
    console.log(`${this.human.name}: ${this.human.age}: ${this.human.mail}`)
  }
}

const taro = new Person('taro', 'taro@yamada', 65)
taro.print()

class Animal {
  _name = "";
  constructor(name) {
    this._name = name;
  }
  running() {
    console.log(`${this._name} is running`);
  }
}

class Dog extends Animal {
  static age = 10;
  constructor(name) {
    super(name);
  }
  bark() {
    console.log(`${this._name} is barking`);
  }
  running() {
    super.running();
    console.log("running");
  }
  static food() {
    console.log("this is food method " + this.age);
  }
}

let dog = new Dog("Tommy");
dog.bark();
dog.running();
// Dog.food();

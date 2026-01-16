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

// dynamic curring function

function fun(val) {
  return function (val2) {
    if (val2 === undefined) return val;
    return fun(val + val2);
  };
}

let result = fun(10)(20)(30)();
console.log(result);

const double = (x) => x * 2;
const square = (x) => x * x;

const compose = (f, g) => (x) => f(g(x));

console.log(compose(double, square)(3)); // 18
console.log(compose(square, double)(3)); // 18

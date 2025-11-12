let intervalId = setInterval(() => {
  console.log("interval");
}, 100);

setTimeout(() => {
  console.log("time up");
  clearInterval(intervalId);
}, 0);

class Human {
  running() {
    // setTimeout(() => {
    //   console.log(this);
    // }, 1000);
  }
}

const human = new Human();
human.running();

(function (a = 0, b = 0, c = 0) {
  console.log(a, b, c);
})();

let add = () => {
  let text = "hello";
  if (true) {
    let text = "hi";
  }
  return text;
};

let result = add();
console.log(result);

console.clear();
// closures
function parent() {
  let count = 0; // lexical scope variable
  return {
    inc() {
      count++;
      console.log(count);
    },
    dec() {
      count--;
      console.log(count);
    },
  };
}

let counter = parent();
counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.dec();
// let fun1 = parent();
// fun1();
// fun1();

// variables, hoisting, functions and type of function , Scoping

// js => sync in nature
// one thread
// setTimeout
// setInterval
// api call (XHR / fetch)
// DOM
// Promises

// All sync and then async code runs
console.clear();
function div(a, b) {
  try {
    if (b === 0) throw new Error(`Can't divide by zero`);
    console.log(a / b);
  } catch (error) {
    console.error(error.message);
  }
}
div(10, 0);

// api

// 5mb => 100kb => 2s

// async and try catch => promises

// old
function compressImageOld(file) {
  return new Promise((resolve, reject) => {
    let operations = true;
    let compFile = "jwehr4387567yueiwgdshjt34675rteyughjdf";
    if (operations) {
      resolve(compFile);
    } else {
      reject("Unable to compress, try again");
    }
  });
}

// new

async function compressImageNew(file) {
  let operations = true;
  let compFile = "jwehr4387567yueiwgdshjt34675rteyughjdf";
  if (operations) {
    return Promise.resolve(compFile);
  } else {
    return Promise.reject("Unable to compress, try again");
  }
}

compressImageNew()
  .then((result) => {})
  .catch((error) => {});

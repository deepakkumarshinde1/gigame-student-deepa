// Basic
async function handelRequest() {
  return Promise.resolve("message");
  return Promise.reject("Error message");
}

// async function
//  await step-1 (promise)
//  await step-2 (promise)
//  await step-3 (promise)

function checkTimeOut(controller) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      controller.abort("Time out");
    }, 50);
  });
}
async function getData() {
  try {
    const controller = new AbortController();
    const signal = controller.signal;
    let url = `https://jsonplaceholder.typicode.com/users`;
    let response = await Promise.race([
      checkTimeOut(controller),
      fetch(url, { signal }),
    ]);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

//getData();

async function getData1() {
  try {
    let url1 = `https://jsonplaceholder.typicode.com/users`;
    let url2 = `https://jsonplaceholder.typicode.in/users/1`;
    let [response1, response2] = await Promise.allSettled([
      fetch(url1),
      fetch(url2),
    ]);
    let data = null;
    let data2 = null;

    if (response1.status === "fulfilled") {
      data = await response1.value.json();
    } else {
      console.log("response 1 failed");
    }
    if (response2.status === "fulfilled") {
      data2 = await response2.value.json();
    } else {
      console.log("response 2 failed");
    }
    console.log(data);
    console.log(data2);
    //
    //
    // console.log(data);
    // console.log(data2);
  } catch (error) {
    console.error(error);
  }
}

//getData1();

let product = {
  name: "Dell",
  price: "10000",
  unit: "Nos",
};
// console.log(product);

function printRecords(a, b, c) {
  console.log(this.name);
  console.log(a, b, c);
}

printRecords.call(product, 10, 20, 30);
printRecords.apply(product, [100, 200, 300]);
let newFun = printRecords.bind(product);
newFun(1000, 2000, 3000);

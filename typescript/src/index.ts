let text: number | string;
text = 20;
text = "Deepakkumar";

let mobile: null = null;
let address: undefined = undefined;

let list: number[] = [10, 20, 30, 40];
let list2: Array<string> = ["Deepakkumar"];

let data: [number, string] = [10, "deepak"];

// enum
enum subscription {
  GUEST = "G",
  PRIME = "P",
  GOLD = "GO",
}

console.log(subscription.GOLD); // "GO"

let text1: unknown;

function add(): void {
  console.log("hi");
}

function setMessage(): never {
  throw new Error("This is error");
}

let text2: string = "hi";

function sub(a: number, b: number): number {
  return a - b;
}

function printData<T>(a: T, b: T, c?: T) {
  return String(a) + String(b);
}

printData<number>(2, 2); // 4
printData<string>("Deepak", "kumar"); // deepakkumar
let r = printData<boolean>(true, true);
console.log(r);

type Student = {
  name: string;
  rollNo: number;
  passingYear?: number;
};

let student: Student = {
  name: "Deepakkumar",
  rollNo: 50,
};

let exStudent: Student = {
  name: "Sai",
  rollNo: 51,
  passingYear: 2026,
};

type EmployeeOfficeDetails = {
  empId: number;
  salary: number;
  designation: string;
};

type EmployeePersonalDetails = {
  name: string;
  dob: string;
  address: string;
  mobile: string;
};

type Employee = EmployeeOfficeDetails & EmployeePersonalDetails;

let text4: unknown = "deepakkumar";

// let length1:number = (text4 as string).length;
let length1: number = (<string>text4).length;

text4 = 10;

(<number>text4).toFixed(2);

abstract class Animal {
  abstract running(): void;

  walking() {}
}
class Human extends Animal {
  public name: string = "deepak";
  protected age: number = 20;
  private dob: string = "10-10-90";

  running(): void {}
}

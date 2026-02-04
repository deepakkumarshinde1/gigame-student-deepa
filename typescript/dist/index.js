"use strict";
let text;
text = 20;
text = "Deepakkumar";
let mobile = null;
let address = undefined;
let list = [10, 20, 30, 40];
let list2 = ["Deepakkumar"];
let data = [10, "deepak"];
// enum
var subscription;
(function (subscription) {
    subscription["GUEST"] = "G";
    subscription["PRIME"] = "P";
    subscription["GOLD"] = "GO";
})(subscription || (subscription = {}));
console.log(subscription.GOLD); // "GO"
let text1;
function add() {
    console.log("hi");
}
function setMessage() {
    throw new Error("This is error");
}
let text2 = "hi";
function sub(a, b) {
    return a - b;
}
function printData(a, b, c) {
    return String(a) + String(b);
}
printData(2, 2); // 4
printData("Deepak", "kumar"); // deepakkumar
let r = printData(true, true);
console.log(r);
let student = {
    name: "Deepakkumar",
    rollNo: 50,
};
let exStudent = {
    name: "Sai",
    rollNo: 51,
    passingYear: 2026,
};
let text4 = "deepakkumar";
// let length1:number = (text4 as string).length;
let length1 = text4.length;
text4 = 10;
text4.toFixed(2);
class Animal {
    walking() { }
}
class Human extends Animal {
    constructor() {
        super(...arguments);
        this.name = "deepak";
        this.age = 20;
        this.dob = "10-10-90";
    }
    running() { }
}

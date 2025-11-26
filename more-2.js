// storages
// ===> local / session / cookies
// prototype

String.prototype.getMoreStringDetails = function () {
  let string = this.toString();
  return {
    len: string.length,
    text: string,
    uc: string.toUpperCase(),
    lc: string.toLowerCase(),
  };
};

let string = "Deepakkumar";
let student = "Deepa";
console.log(student.getMoreStringDetails());
// oop

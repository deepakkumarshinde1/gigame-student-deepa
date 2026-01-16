// Set Class
// A Set is a collection of unique values. You can add, delete,
//  and check for values in a Set.
const mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add(5); // Duplicate, will not be added
mySet.add("some text");

// main site => 6 => too many request , please try later
// payment gateway
// sms service
let map = new Map();
map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");
map.set(true, "isAdmin");

map.get(true); // 'isAdmin'

// iterators
const array = ["a", "b", "c"];
const iterator = array[Symbol.iterator]();

console.log(iterator.next()); // { value: 'a', done: false }
console.log(iterator.next()); // { value: 'b', done: false }
console.log(iterator.next()); // { value: 'c', done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// lets say i am creating a carousal and will have next and previous button
// create with Symbol.iterator
let carousal = {
  items: ["item1", "item2", "item3"],
  [Symbol.iterator]() {
    let index = 0;
    const items = this.items;
    return {
      next() {
        if (index < items.length) {
          return { value: items[index++], done: false };
        } else {
          index = 0; // reset index for infinite loop
          return { value: items[index++], done: false };
        }
      },
      prev() {
        if (index > 0) {
          return { value: items[--index], done: false };
        } else {
          index = items.length - 1; // reset index for infinite loop
          return { value: items[index--], done: false };
        }
      },
    };
  },
};
carousal.items = [
  {
    id: 1,
    name: "item1",
    imageLink: "https://via.placeholder.com/150",
    desc: "This is item 1",
  },
  {
    id: 2,
    name: "item2",
    imageLink: "https://via.placeholder.com/150",
    desc: "This is item 2",
  },
];
const carousalIterator = carousal[Symbol.iterator]();

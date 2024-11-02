// 1st problem
// Array filtering and Mapping

const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 28, gender: "male" },
  { name: "Diana", age: 22, gender: "female" },
];

const getMaleNames = (people) => {
  return people
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
};

console.log(getMaleNames(people));

// 2nd problem
// Object Manipulation
const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
];

const getBookTitles = (books) => {
  return books.map((book) => book.title);
};

console.log(getBookTitles(books));

// 4th problem
// Sorting Objects

const cars = [
  { make: "Toyota", model: "Camry", year: 2018 },
  { make: "Honda", model: "Accord", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2020 },
];

const sortCarsByYear = (cars) => {
  return cars.sort((a, b) => a.year - b.year);
};

console.log(sortCarsByYear(cars));

// 5th problem
// Find and Modify

const users = [
  { name: "Sam", age: 24 },
  { name: "Tyler", age: 22 },
  { name: "Brook", age: 26 },
];

const findUpdateUserAge = (people, peopleName, age) => {
  people.map((person) => {
    if (person.name === peopleName) {
      person.age = age;
    }
  });
  return people;
};

console.log(findUpdateUserAge(users, "Sam", 30));

// 7th problem
// Leap Year Checker

const isLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isLeapYear(2020));

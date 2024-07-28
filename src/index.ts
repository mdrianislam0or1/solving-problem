// Problem Solving:

// 1.Task: Array Filtering and Mapping

// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.
interface Person {
  name: string;
  age: number;
  gender: string;
}

const people: Person[] = [
  { name: "Alice", age: 30, gender: "female" },
  { name: "Bob", age: 25, gender: "male" },
  { name: "Charlie", age: 28, gender: "male" },
];

const filterAndMap = (persons: Person[]): string[] => {
  return persons
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
};

console.log(filterAndMap(people));

// 2.Task: Object Manipulation

// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

interface Book {
  title: string;
  author: string;
  year: number;
}

const books: Book[] = [
  { title: "Book One", author: "Author One", year: 2000 },
  { title: "Book Two", author: "Author Two", year: 2005 },
  { title: "Book Three", author: "Author Three", year: 2010 },
];

const getBookTitles = (books: Book[]): string[] => {
  return books.map((book) => book.title);
};

console.log(getBookTitles(books));

// 3.Task: Function Composition

// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

const square = (num: number): number => num * num;
const double = (num: number): number => num * 2;
const addFive = (num: number): number => num + 5;

const composeFunctions = (num: number): number => addFive(double(square(num)));

console.log(composeFunctions(3));

// 4.Task: Sorting Objects

// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
interface Car {
  make: string;
  model: string;
  year: number;
}

const cars: Car[] = [
  { make: "Toyota", model: "Corolla", year: 2015 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Ford", model: "Focus", year: 2018 },
];

const sortCarsByYear = (cars: Car[]): Car[] => {
  return cars.sort((a, b) => a.year - b.year);
};

console.log(sortCarsByYear(cars));

// 5.Task: Find and Modify

// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.
const updatePersonAge = (
  persons: Person[],
  name: string,
  newAge: number
): Person[] => {
  return persons.map((person) => {
    if (person.name === name) {
      return { ...person, age: newAge };
    }
    return person;
  });
};

console.log(updatePersonAge(people, "Alice", 35));

// 6.Task: Array Reduction

// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
const numbers: number[] = [1, 2, 3, 4, 5, 6];

const sumOfEvenNumbers = (numbers: number[]): number => {
  return numbers.reduce((sum, num) => {
    return num % 2 === 0 ? sum + num : sum;
  }, 0);
};

console.log(sumOfEvenNumbers(numbers));

// 7.  Task: Leap Year Checker

// Write a function that determines whether a given year is a leap year.

// Example: Happy New Year
const isLeapYear = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

console.log(isLeapYear(2020));
console.log(isLeapYear(2021));

// 8. Task: Unique Values

// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

const values: number[] = [1, 2, 2, 3, 4, 4, 5];

const getUniqueValues = (numbers: number[]): number[] => {
  return [...new Set(numbers)];
};

console.log(getUniqueValues(values));

// 9.  Task: Find Maximum Value:

// Write a function that takes an array of numbers and returns the maximum value.
const findMaxValue = (numbers: number[]): number => {
  return Math.max(...numbers);
};

console.log(findMaxValue([1, 2, 3, 4, 5]));

// 10.Task: Advanced Sorting

// Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.
interface Student {
  name: string;
  grades: number[];
}

const students: Student[] = [
  { name: "John", grades: [90, 85, 88] },
  { name: "Jane", grades: [80, 90, 92] },
  { name: "Jim", grades: [70, 75, 78] },
];

const sortStudentsByAverageGrade = (students: Student[]): Student[] => {
  return students.sort((a, b) => {
    const avgA =
      a.grades.reduce((sum, grade) => sum + grade, 0) / a.grades.length;
    const avgB =
      b.grades.reduce((sum, grade) => sum + grade, 0) / b.grades.length;
    return avgB - avgA;
  });
};

console.log(sortStudentsByAverageGrade(students));

// 11. Task: Functional Programming - Reduce

// Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview
interface Item {
  quantity: number;
  price: number;
}

const items: Item[] = [
  { quantity: 2, price: 100 },
  { quantity: 3, price: 200 },
  { quantity: 1, price: 150 },
];

const getTotalValue = (items: Item[]): number => {
  return items.reduce((total, item) => total + item.quantity * item.price, 0);
};

console.log(getTotalValue(items));

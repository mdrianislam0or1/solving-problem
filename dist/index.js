"use strict";
// Problem Solving:
const people = [
    { name: "Alice", age: 30, gender: "female" },
    { name: "Bob", age: 25, gender: "male" },
    { name: "Charlie", age: 28, gender: "male" },
];
const filterAndMap = (persons) => {
    return persons
        .filter((person) => person.gender !== "female")
        .map((person) => person.name);
};
console.log(filterAndMap(people));
const books = [
    { title: "Book One", author: "Author One", year: 2000 },
    { title: "Book Two", author: "Author Two", year: 2005 },
    { title: "Book Three", author: "Author Three", year: 2010 },
];
const getBookTitles = (books) => {
    return books.map((book) => book.title);
};
console.log(getBookTitles(books));
// 3.Task: Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
const square = (num) => num * num;
const double = (num) => num * 2;
const addFive = (num) => num + 5;
const composeFunctions = (num) => addFive(double(square(num)));
console.log(composeFunctions(3));
const cars = [
    { make: "Toyota", model: "Corolla", year: 2015 },
    { make: "Honda", model: "Civic", year: 2012 },
    { make: "Ford", model: "Focus", year: 2018 },
];
const sortCarsByYear = (cars) => {
    return cars.sort((a, b) => a.year - b.year);
};
console.log(sortCarsByYear(cars));
// 5.Task: Find and Modify
// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.
const updatePersonAge = (persons, name, newAge) => {
    return persons.map((person) => {
        if (person.name === name) {
            return Object.assign(Object.assign({}, person), { age: newAge });
        }
        return person;
    });
};
console.log(updatePersonAge(people, "Alice", 35));
// 6.Task: Array Reduction
// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
const numbers = [1, 2, 3, 4, 5, 6];
const sumOfEvenNumbers = (numbers) => {
    return numbers.reduce((sum, num) => {
        return num % 2 === 0 ? sum + num : sum;
    }, 0);
};
console.log(sumOfEvenNumbers(numbers));
// 7.  Task: Leap Year Checker
// Write a function that determines whether a given year is a leap year.
// Example: Happy New Year
const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
console.log(isLeapYear(2020));
console.log(isLeapYear(2021));
// 8. Task: Unique Values
// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.
const values = [1, 2, 2, 3, 4, 4, 5];
const getUniqueValues = (numbers) => {
    return [...new Set(numbers)];
};
console.log(getUniqueValues(values));
// 9.  Task: Find Maximum Value:
// Write a function that takes an array of numbers and returns the maximum value.
const findMaxValue = (numbers) => {
    return Math.max(...numbers);
};
console.log(findMaxValue([1, 2, 3, 4, 5]));
const students = [
    { name: "John", grades: [90, 85, 88] },
    { name: "Jane", grades: [80, 90, 92] },
    { name: "Jim", grades: [70, 75, 78] },
];
const sortStudentsByAverageGrade = (students) => {
    return students.sort((a, b) => {
        const avgA = a.grades.reduce((sum, grade) => sum + grade, 0) / a.grades.length;
        const avgB = b.grades.reduce((sum, grade) => sum + grade, 0) / b.grades.length;
        return avgB - avgA;
    });
};
console.log(sortStudentsByAverageGrade(students));
const items = [
    { quantity: 2, price: 100 },
    { quantity: 3, price: 200 },
    { quantity: 1, price: 150 },
];
const getTotalValue = (items) => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
};
console.log(getTotalValue(items));

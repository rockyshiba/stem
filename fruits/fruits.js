//ARRAYS

//arrays are lists of things that are stored in variables. They are not strings nor numbers, they are of type arrays

//here is an empty array
var fruits = [];

//arrays can store strings. Each item is separated by a comma
fruits = ["banana", "apple", "orange"];

//arrays can store numbers
var numbers = [1, 2, 3, 4, 5];

//arrays can store variables
var car1 = "Honda";
var car2 = "Volkswagon";
var car3 = "Volvo";

var cars = [car1, car2, car3];

//arrays can store a combination of strings, numbers, and variables
var anyArray = ["banana", 2, car2];

//arrays can even store other arrays (remember that arrays are variables too!)
var mixedArray = [fruits, numbers, cars];

//arrays have addresses called indices. The first item has an index of 0 and goes on from there by 1. The first item is the furthest to the left.
//to access an index of an array, we enclose the index with []
console.log("Index 0 of fruits is: " + fruits[0]);
console.log("Index 1 of fruits is: " + fruits[1]);

//arrays within arrays can be accessed as well. You just need to declare addtional indices
console.log("Item in an array that's in another array: " + mixedArray[2][1]);

//arrays have a property called "length" and it returns the number of items in an array
console.log("Numbers has " + numbers.length + " array items");

//the length property is useful to find the index of the last item of an array
//remember that arrays start with the index 0 so the last item of an array is always the length of the array minus 1
console.log("The last item of cars is " + cars[cars.length - 1]); //cars[2]

//you can alter arrays in a number of ways

//you can replace an index of an array by assignment
//fruits[1] = "tangerine";

//you can add to an array by assignment
//console.log(numbers[5]);
//numbers[5] = 6;
//console.log(numbers[5]);

//you can add to an array using the push method. What you give to push makes it [0] of an array. Be mindful that the index of each item will go up by one
//fruits.push("pineapple");
//console.log(fruits[0]);

//if you console.log an array push, it returns the new length of the array
//console.log(fruits.push("cucumber"));

//array items can be removed using the unshift method. The index of each item may change depending on where you removed the item
//fruits.unshift("banana");
//just like push, unshift returns the new length of the array
//console.log(fruits.unshift("orange"));
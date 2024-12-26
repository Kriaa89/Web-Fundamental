// Array Challenges
// Objectives
// Get comfortable with loops: for and while.
// Get comfortable with conditionals: if/else.


// 1. alaways hungry
// Write a function that is given an array and each time the value is "food" it should console log
//  "yummy". If "food" was not present in the array console log "I'm hungry" once.
// steps
// we create a function called alwaysHungry and give it a parameter called arr 
// we create a loop that will go throught the array 
// we declare a variable called food and set it to false as a boolean to keep track the value of the array
// we gonna use a condidtion to change the value of the variable food to yummy if the value of the array is food 
// if the value of the array is not food we gonna console log "I'm hungry"

function alwaysHungry(arr) {
    var food = false;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === "food"){
            console.log("yummy");
            food = true;// set the value of the varaible food to true if the value of the array is food 
        }
    }
    if(food === false){ // if the value of the array is not food we gonna console log "i'm hungry"
        console.log("i'm hungry")
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


// High Pass Filter
// Given an array and a value cutoff, return a new array containing only the values larger than cutoff.
// steps 
// we have array with values and a cutoff value we need to create a function that filter the array and return a new array with value larger than the cutoff value 
// we create a function called highPass and give it two parameters arr and cutoff the parameter 
// we create a varaible called filteredArr and set it to an emty array to store the values that are larger than the cutoff value 
// we create a loop that will go throught the array and chack if the value of the array is larger than the cutoff value
// if the value of the array is larger than the cutoff value we gonna push that value to the filteredArr
// if the value of the array is not larger than the cutoff value we wil contine looping to the next value 
// and then we gonna return the filtereadArr
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0; i<arr.length; i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


// Better than average
// Given an array of numbers return a count of how many of the numbers are larger than the average.
// steps
// we have an array of numbers we need to create a function that will calculate the average of the numbers in the array and reurn the count of how many number are larger than the average 
// we create a function called betterThanAverage and give it parameter arr 
// we declare a varaible called sum and set it to 0 to store the sum of the numbers in the array 
// we gonna use a loop to go throught the array and calculate the sum of the numbers in the array 
// we calculate the average by dividing the sum by the length of the array and we gonna need variable to store the average
// create a varaible called count and set it to 0 to store the count of how many numbers are larger than the average
// we gonna use a loop to go throught the array and check if the value of the array is larger than the avreage 
// we gonna use condition to increament the  count by 1 if the value of the array is larger than the avreage
// we gonna return the count

function betterThanAverage(arr) {
    var sum = 0;
    for(var i =0; i<arr.length; i++){
        sum += arr[i];// calculate the sum of the numbers in the arrays and store it in the sum vaiable
    }
    // dvide the sum by the length of the array to get the average
    var average = sum / arr.length;
    var count = 0
    for(var i = 0; i<arr.length; i++){
        if(arr[i] > average){
            count = count + 1;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// Array Reverse
// Write a function that will reverse the values an array and return them.
// steps
// we have an array of values we need to create a function that will reverse the values of the array and return them
// we gonna use a loop to go throught the array 
// we gonna use a varaible to store the reversed array




function reverse(arr) {
    
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

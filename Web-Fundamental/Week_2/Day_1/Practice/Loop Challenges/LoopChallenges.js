// Objectives
// Get comfortable with loops: for and while.
// Get comfortable with conditionals: if/else.

// challenge 1
// print odds number from 1 to 20 
// steps
// 1 create a loop goes through all the numbers from 1 to 20 
// 2 cheks if the number is odd if 
// 3 print the number 

for (var i = 1; i<=20; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}

// challenge 2
// Decreasing Multiples of 3
// Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0
// steps
// 1 create a loop that goes throught all the numbers from 100 to 0
// 2 loop starts at 100 and ends at 0
// 3 check if the number is divisible by 3
// 4 print the number 
var start = 100;
var ends = 0;
while(start >= ends){
    if(start % 3 == 0){
        console.log(start)
        
    }
    start--;
}
// Print the sequence
// Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.
// steps 
// 1 we have a list of numbers from 4 to -3.5 // he's taking 1.5 steps back
// 2 we gonna use for loop start 4 and goes step back with -1.5 until -3.5
// 3 prints all the numbers in the sequesnce 
for (var i = 4; i >= -3.5; i-=1.5){
    console.log(i);
}

// Sigma
// Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.
// steps 
// declare a varaibale sum and set it to 0
// we gonna use for loop to got throught all the numbers from 1 to 100
// in each iteration we gonna add the number(i) to the sum
// add each number with sum 
// print the sum 

var sum = 0;
for (var i = 1; i <=100; i++){
    sum += i;
}
console.log(sum);

// Factorial
// Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.
// steps
// declare a varaible product and set it to 1
// we gonna use for loop to go throught all the number from 1 to end 12 and by 1 steps and multiply each number with product that is 1 
// print the product
var product = 1;
for(var i = 1; i <= 12; i++){
    product = product * i;
}
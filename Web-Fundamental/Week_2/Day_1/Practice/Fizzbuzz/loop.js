// we have array inside this aray we have number from 1 to 100 
// we gonna go throught this array using for loop 
// for each number that is a multiple of 3 we gonna print fizz 
// for each number that is multiple of  print buzz
// for numbers which are multiple of both 3 and 5 we gonna print fizzbuzz
// for all other numbers we gonna print the numbers itself

function fizzBuzz(){
    for(var i = 1; i <= 100; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz");
        }else if(i % 3 == 0){
            console.log("Fizz");
        }else if(i % 5 == 0){
            console.log("Buzz")
        }else {
            console.log(i)
        }
    }
}
fizzBuzz()
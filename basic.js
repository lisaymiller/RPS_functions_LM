//example function

// function saySomething(something) {
// 	console.log(something);
// };

// saySomething("Good Morning function!");


//functions have to have a return

// function add(number1,number2) {
// 	return number1 + number2;
// }

// var sum = add(5,2);
// console.log(sum);

//Key concepts for functions: 1) define the function with arguments (yes, the argument section can be blank). 2) You have to run/execute the function. 3) To return a value, we need to explicitly tell it to return a value to us in the body of the function.


//arguments

// function add(a,b,c,d,e) {
// 	console.log(a,b,c,d,e);
// }

// add();
// add(1);
// add(1,2,3,4,5);


//predefined arguments, overwriting predefined arguments, should be using return a + b; instead of console.log

// function add (a=1,b=2) {
// 	console.log(a+b);
// };

// add(5,3);


// function add() {

// 	var sum=0;
// 	for(var i=0; i<arguments.length; i++)
// 	{
// 		sum += arguments[i];
// 	}
// 	return sum;
// };

// console.log(add(1,2,3,4,5,6,7,8));


//exercise 1

// var billAmount = 78.50;

// function gratuity() {
// 	return billAmount * 0.2;
// }

// function totalWithGrat(amount){
// 	return gratuity() + amount;

// }

// console.log("Your total, including gratuity, is: $" + totalWithGrat(billAmount).toFixed(2));


//function as variable

// var add = function(a,b)
// {
// 	return a + b;
// };

// console.log(add(3,5));


// function declaration

// hoisted ();

// function hoisted ()
// {
// 	console.log("foo");
// };

//function assignment

// notHoisted();

// var notHoisted = function()
// {
// 	console.log("bar");
// };

//anonymous functions

// var calculator = 
// {
// 	add: function(a,b)
// 	{
// 		return a+b;
// 	}
// }

// console.log(calculator.add(2,3));


//functions as an array

// var arrayOfMystery = [
// 	['anonymous','array'],
	
// 	{
// 		name: 'anonymous object'
// 	},

// 	function(a,b)
// 	{
// 		return a+b
// 	}
// ];

// console.log(arrayOfMystery[2](3,5));


// //scope within a function

// //global variable
// greeting="Whatsup!";

// //function that has an in scope variable
// function getGreeting(name)
// {
// 	var greeting="Hello ";
// 	return greeting + name;
// };

// console.log(getGreeting('Shane'));

// //local variable
// var greeting="Kumasta!"

// console.log(greeting);
// //global variable gets overwritten by local variable


//immediately invoked function expression

// (function ()
// {
// 	var myVar = "look mom, private variables!";
// 	//do some stuff with myVar...
// }
// )();

// console.log(myVar); //undefined


//scope something??

// var city = 'New Orleans';
// var greet = function()
// {
// 	console.log('Hello ' + city);
// }

// greet();


//nested scope

// function outer ()
// {
// 	var x = 'x';
// 	function inner ()
// 	{
// 		var y = 'y';
// 		console.log(y);
// 	}
// console.log(x);
// };
// outer().inner();


//exercise 2

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice <0.34){
    computerChoice = "rock";
}else if(computerChoice <=0.67){
    computerChoice = "paper";
}
else{
    computerChoice = "scissors";
}
var compare = function(choice1,choice2){
    if(choice1==choice2){
        return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is a tie!";
    }
    if(choice1=="rock"){
        if(choice2=="scissors"){
            return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou won!";
        }
        else{
            return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou lost!";
        }
    }
    if(choice1=="paper"){
        if(choice2=="rock"){
            return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou won!";
        }
        else{
            return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou lost!";
        }
    }
    if(choice1=="scissors"){
        if(choice2=="rock"){
            return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou won!";
        }
        else{
            return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou lost!";
        }
    }
};

alert(compare(userChoice,computerChoice));






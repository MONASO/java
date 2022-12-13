/**
 * Question# 2 Assignments(Methimatical Shapes)
 * 
 * Write a JavaScript program to find the diagonal of a square where the length of each
side is 9. 
--------------------------------------------
function diagonalDifference(arr) {
    var a = arr.length; 
    var b1 = 0;
    var b2 = 0;
  for(var i=0; i<a; i++){
     for(var j=0; j<a; j++){
       // finding the sum of primary diagonal
         if(i === j) {
           b1 += arr[i][j];
         }
       // finding the sum of secondary diagonal
         if(i + j === a - 1){
            b2 += arr[i][j];
         }
      }
  }
  return Math.abs(b1 - b2);
}
--------------------------------------------END--------------------------------------------

// Write a JavaScript program to find the area of a triangle where lengths of the three of its
// sides are 5, 6 and 7.
--------------------------------------------
var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var s = (side1 + side2 + side3)/2; 
var area = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3))); 
console.log(area);
--------------------------------------------END--------------------------------------------
/**Write a JavaScript program to find the circumference and surface area of a circle whose
radius is 4.
--------------------------------------------
var c;
// c = circumference
// Calculation of circumference 

c = 2 * 3.14 * 10;
document.write("Circumference = " + c + " units");
-------------------------------------------- END --------------------------------------------*/


/**
 * Assignment#3 (Conditional Statements & Loops):
 * 
 * 
 * Write a JavaScript program that accepts two integers and displays the larger of the two
 * --------------------------------------------
 * var num1, num2;
num1 = window.prompt("Input the First integer", "0");
num2 = window.prompt("Input the second integer", "0");
                                                 
if(parseInt(num1, 10) > parseInt(num2, 10)) 
  { 
  console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
  }   
else
  if(parseInt(num2, 10) > parseInt(num1, 10)) 
  {
  console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
  }                  
else
  {
   console.log("The values "+ num1+ " and "+num2+ " are equal.");
  }
 * --------------------------------------------End--------------------------------------------
 *
 * 
 * Write a JavaScript program that checks whether an integer is an even or an odd number.
 * --------------------------------------------
 * // program to check if the number is even or odd
// take input from the user
const number = prompt("Enter a number: ");

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}
 * --------------------------------------------End--------------------------------------------
 * 
 *  */
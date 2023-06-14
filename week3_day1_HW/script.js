/**JavaScript Functions Lab 
 * complete any 5/9 activities
*/

//1. Define a function expression maxOfThree which takes three numbers as arguments and returns the greatest (Math.max not allowed)

const maxOfThree = function(x, y, z){
    let max = null;
    //if x greater than or equal to y and z, return x
    if(x >= y && x >= z){
        max = x;
    }
    //if y greater than or equal to z and x return y
    else if(y >= z && y >= x){
        max = y;
    }
    //if z greater than or equal to y and x return z
    else if(z >= y && z >= x){
        max = z;
    } 
    //else return 0
    else{
        max = 0;
    }

    return max;
   
}

console.log(maxOfThree(-1, -2, -5));

//5. Define a function declaration multiplyArray that takes an array of numbers and returns the product of those numbers

//Reference: using Rest parameters: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
//https://www.w3docs.com/learn-javascript/rest-parameters-and-spread-syntax.html#spread-syntax
function multiplyArray(...numbers){
    //initialize product as 1 to allow for multiplication without alterning value of numbers in array
    let product = 1;

    for(let i = 0; i < numbers.length; i++){
        product*=numbers[i];
    }
    return product;
   
}

//Reference: passing an array using spread syntax: https://www.geeksforgeeks.org/how-to-pass-an-array-as-a-function-parameter-in-javascript/
console.log(multiplyArray(...[1, 2, 3]));


//7. Define a function declaration reverseString that takes a string, reverses it's characters and returns it

function reverseString (str){
    let tempStr = "";
    for(let i = str.length-1; i >= 0; i--){
        tempStr += str[i];
    }

    return tempStr;

}

console.log(reverseString("butter"));

//8. Define a function expression longestStringInArray that takes an array of strings as an argument and returns the length of
//the longest string

const longestStringInArray = function(arrProv){
    //take array (arrProv)
    //find array member length longer than empty string length tempLongestString
    //save that array member to tempLongestString
    //compare that to each member of array
    //the longest string is saved to tempLongestString and return that length

    let tempLongestString = "";

    for(let arrItem of arrProv){
        if(arrItem.length > tempLongestString.length){
            tempLongestString = arrItem;
        }

    }

    return tempLongestString.length;
}


console.log(longestStringInArray(["may", "this", "is", "it", "We"]));


//9. Define a function declaration stringsLongerThan that takes an array of strings and a number as arguments, and returns an
//array of strings that are longer than the number passed in

function stringsLongerThan(arrProv, num){
    //array and number as parameters
    //returns array of strings longer than num passed in
    
    const tempArray = [];

    for(let i = 0; i < arrProv.length; i++){
        if(arrProv[i].length > num){
            tempArray.push(arrProv[i]);
        }

    }

    return (tempArray);

}

console.log(stringsLongerThan(["hey", "what", "do", "you", "say"], 2));


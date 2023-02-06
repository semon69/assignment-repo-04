// Problem 2: Done.

function evenOdd(string){
    if(typeof string == 'string'){
        if(string.length % 2 == 0){
            return 'even';
        } else{
            return 'odd';
        }
    }else{
        return 'Please enter a valid String type value'
    }
}
console.log(evenOdd(55));

// Description:In this function we take an input from user and check typeof input .If it is a string then do this == { If the length of string divided by 2 and modulus is 0(mean's an even number) then return even else return odd }else return == 'Please enter a valid string type value'.
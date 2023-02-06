// Problem 3:

function isLGSeven(number){
    if(typeof number == 'number'){
        let difference = number - 7;
        if(difference < 7){
            return difference;
        } else{
            return (number * 2);
        }
    }else{
        return 'Please enter a valid number';
    }
}

// Description:In this function we take an input from user and check typeof input .If it is a number then do this == { Subtract 7 from the number and put it a variable named difference. If the value of difference is less than 7 then return the value of difference else return the value of multiplication between difference and 2}. else return 'Please enter a valid number'.

console.log(isLGSeven(-15));
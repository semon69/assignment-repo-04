// Problem 1: Done

function mindGame(number){

    if(typeof number == 'number'){
        let numberMultiplication = number * 3;
        let numberAddition = numberMultiplication + 10;
        let numberDivision = numberAddition / 2;
        let numberSubtraction = numberDivision - 5;

        return numberSubtraction;
    } else{
        return 'Please enter a valid Number';
    }
}

console.log(mindGame(33));

// Description:In this function we take an input from user and check typeof input .If it is a number then do this == { multiply by 3 and put it in a variable named numberMultiplication. Then add 10 with the value of numberMultiplication and put it in a variable named numberAddition. Then the value of numberAddition divide 2 and put it in a variable named numberDivision. Then subtract 5 from the value of numberDivision and put it in a variable named numberSubtraction and return numberSubtraction }  else return 'Please enter a valid number'.
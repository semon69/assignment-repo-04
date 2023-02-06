// Problem 4: Done.

function findingBadData(array){
    if(Array. isArray(array)){
        let badNumber = [];
        for(let i = 0; i < array.length; i++){
            let number = array[i];
            if(number < 0){
                badNumber.push(number);
            }
        }
        return badNumber.length;
    } else{
        return 'Please enter a valid Array type value';
    }
}

// Description: In this function we take an input from user and check typeof input .If it is an array then do this =={ declare a blank array named badNumber. Go to inside the loop and find the index of each number and put each number in a variable named number. If number is less than 0 then push them into badNumber variable.Get out from the loop and return the length of badNumber array.}. else return 'Please enter a valid array type value'.

const array = 'sss';
console.log(findingBadData(array));
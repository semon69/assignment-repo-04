// Problem 5: Done.

function gemsToDiamond(firstFriendGem, secondFriendGem, thirdFriendGem){
    if((typeof firstFriendGem == 'number') && (typeof secondFriendGem == 'number') && (typeof thirdFriendGem == 'number')){
        const firstFriendPowerToConvertDiamond = firstFriendGem * 21;
        const secondFriendPowerToConvertDiamond =secondFriendGem * 32;
        const thirdFriendPowerToConvertDiamond =thirdFriendGem * 43;
        const totalDiamond = firstFriendPowerToConvertDiamond + secondFriendPowerToConvertDiamond + thirdFriendPowerToConvertDiamond;

        if(totalDiamond > 1000 * 2){
            let remainingDiamond = totalDiamond - 2000;
            return remainingDiamond;
        }else{
            return totalDiamond;
        }
    } else{
        return 'Please enter a valid number';
    }
}

// Description: In this function we take three input from user named firstFriendGem, secondFriendGem, thirdFriendGem and check there type, if these are number type then go to the inside of loop and do this == {multiply each with three different numbers(that's declare between function) and put it in three different variable named firstFriendPowerToConvertDiamond, secondFriendPowerToConvertDiamond, thirdFriendPowerToConvertDiamond. Now, add three variable and put it another variable named totalDiamond. Then if totalDiamond is greater than 1000*2 then return (totalDiamond - 2000) else return totalDiamond} else return == 'Please enter a valid number'.





const firstFriendGem = 1;
const secondFriendGem = 1;
const thirdFriendGem = 1;

console.log(gemsToDiamond(firstFriendGem, secondFriendGem, thirdFriendGem));


function biggerNumber(firstNumber, secondNumber) {

    /*   return typeof(firstNumber); */


    if (typeof (firstNumber) == "number" && typeof (secondNumber) == "number") {

        let temp;

        if (firstNumber > secondNumber) {

            console.log(`The ${firstNumber} is bigger than ${secondNumber}`);
        } else if (firstNumber < secondNumber) {
            /* temp=firstNumber;
            firstNumber=secondNumber;
            secondNumber=temp;
 */

console.log(`The ${secondNumber} is bigger than ${firstNumber}`);

        }else if (firstNumber === secondNumber) {
            console.log(`${firstNumber} is equal  to ${secondNumber}`);

        } 

        


    }
    else {

        console.log(` Error the type  is not  a numbers are ${typeof (firstNumber)} and ${typeof (secondNumber)} `);
    }

  




}

biggerNumber(7,"a");

const binarioDecimal = (number) => {
    let numberArray = [];
    let decimal = 0;

    //Formacion del arreglo de bits
    for(let i=0; i<number.length; i++){
        numberArray.push(number[i]*1);
    }

    //Formacion del valor decimal del numero binario
    for(let i=0; i<numberArray.length; i++){
        decimal += numberArray[i]*Math.pow(2,(numberArray.length-i)-1);
    }

    return decimal;
}

function calculate(num1, num2) {
    return binarioDecimal(num1) + binarioDecimal(num2);
}
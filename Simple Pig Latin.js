const toCharArray = (word) => {
    let charArray = [];
    charArray = word.split('');

    return charArray;
}

const firstLetter = (charArray) => {
    return charArray[0];
}

function pigIt(str){
    //Primero formemos un arreglo de cadenas no vacias
    let myWordArray = [];
    const alfabetoString  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    let resultWordArray = [];
    let resultString = "";

    let myWordMatrix = [];

    myWordArray = str.split(' ');

    for(let i=0; i<myWordArray.length; i++){
        myWordMatrix.push(toCharArray(myWordArray[i]));
    }

    for(let i=0; i<myWordMatrix.length; i++){
        if(alfabetoString.includes(myWordArray[i][0])){
            myWordMatrix[i].push(firstLetter(myWordArray[i]));
            myWordMatrix[i].push('a');
            myWordMatrix[i].push('y');
            myWordMatrix[i].shift();
        }     
    }

    for(let i=0; i<myWordMatrix.length; i++){
        resultWordArray.push(myWordMatrix[i].join(''));
    }
    
    resultString = resultWordArray.join(' ');

    return resultString;
}
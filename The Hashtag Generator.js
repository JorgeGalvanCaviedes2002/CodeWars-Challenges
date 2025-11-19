const capitalizarPrimerLetra = (word) => {
    let charArray = [];
    let resultString = "";

    for(let i=0; i<word.length; i++){
        if(i==0){
            charArray.push(word[i].toUpperCase());
        }
        else{
            charArray.push(word[i]);
        }
    }
   
    resultString = charArray.join('');
    
    return resultString;
}

function generateHashtag (str) {
    //Separamos primero en Strings aunque tendra un espacio vacío
    let myStringArray = [];
    let myWordArray = [];

    let result = "";

    let wordResultArray = [];
    let finalResultString = "";

    myStringArray = str.split(' ');

    //Ahora para evitar espacios duplicados creamos un nuevo wordArray
    myWordArray = [...new Set(myStringArray)];

    //Y Ahora eliminamos los espacios restantes
    for(let i=0; i<myWordArray.length; i++){
        if(myWordArray[i]==''){
            myWordArray.splice(i,1);
            break;
        }
    }

    for(let i=0; i<myWordArray.length; i++){
        wordResultArray.push(capitalizarPrimerLetra(myWordArray[i]));
    }
    wordResultArray.unshift('#');

    finalResultString = wordResultArray.join('');

    if(finalResultString.length>140){
        result = false;
    }
    else if(finalResultString=='#'){
        result = false;
    }
    else{
        result = finalResultString;
    }

    return result;
}
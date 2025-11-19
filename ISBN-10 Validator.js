const conjuntoDigitos = "0123456789";
const conjuntoFinal = "0123456789X";

const verificadorInclusion = (charArray) => {
    let p = true;

    for(let i=0; i<charArray.length; i++){
        if(!conjuntoDigitos.includes(charArray[i])){
            p = false;
            break;
        }
    }

    return p;
}

function validISBN10(isbn) {
    //Variable criterio para la sintaxis válida
    let validSintax = false;
    
    //Formación del arreglo de digitos como conjunto
    if(isbn.length==10){
        let digitArray = [];
        digitArray = conjuntoDigitos.split('');

        let charArray = [];
        charArray = isbn.split('');

        if(charArray[charArray.length-1]=='X'){
            charArray.pop();
            charArray.push('10');
        }

        let subString = "";
        subString = charArray.slice(0,9);

        if(verificadorInclusion(subString)&&conjuntoFinal.includes(isbn[isbn.length-1])){
            let sumatoria = 0;
            
            for(let i=0; i<charArray.length; i++){
                sumatoria += parseInt(charArray[i])*(i+1);
            }

            if(sumatoria%11==0){
                validSintax = true;
            }
            else{
                validSintax = false;
            }
        }
        else{
            validSintax = false;
        }
    }

    return validSintax;
}
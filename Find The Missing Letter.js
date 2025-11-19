const alfabetoMinusculas = "abcdefghijklmnopqrstuvwxyz";
const alfabetoMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function findMissingLetter(array){
    //Verificar si las letras del array son minusculas o mayusculas
    let respuesta = -1;
    
    if(alfabetoMayusculas.includes(array[0])){
        let arrayReferencia = [];

        for(let i=alfabetoMayusculas.indexOf(array[0]); i<=alfabetoMayusculas.indexOf(array[array.length-1]); i++){
            arrayReferencia.push(alfabetoMayusculas[i]);
        }

        //Formamos la respuesta medianre la diferencia de conjuntos con el abecedario
        let arrayRespuesta = [];
        for(let i=0; i<arrayReferencia.length; i++){
            if(arrayReferencia.includes(arrayReferencia[i])&&!array.includes(arrayReferencia[i])){
                arrayRespuesta.push(arrayReferencia[i]);
                break;
            }
        }

        respuesta = arrayRespuesta[0];
    }
    else{
        let arrayReferencia = [];

        for(let i=alfabetoMinusculas.indexOf(array[0]); i<=alfabetoMinusculas.indexOf(array[array.length-1]); i++){
            arrayReferencia.push(alfabetoMinusculas[i]);
        }

        //Formamos la respuesta medianre la diferencia de conjuntos con el abecedario
        let arrayRespuesta = [];
        for(let i=0; i<arrayReferencia.length; i++){
            if(arrayReferencia.includes(arrayReferencia[i])&&!array.includes(arrayReferencia[i])){
                arrayRespuesta.push(arrayReferencia[i]);
                break;
            }
        }

        respuesta = arrayRespuesta[0];
    }

    return respuesta;
}
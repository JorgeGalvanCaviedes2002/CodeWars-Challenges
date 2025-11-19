const diccionarioHex = {
    0 : "0",
    1 : "1",
    2 : "2",
    3 : "3",
    4 : "4",
    5 : "5",
    6 : "6",
    7 : "7",
    8 : "8",
    9 : "9",
    10 : "A",
    11 : "B",
    12 : "C",
    13 : "D",
    14 : "E",
    15 : "F"
}

const decimalHex = (number) => {
    let respuesta= [];
    let reverse = [];

    //Primer Caso : numero mayor a 16 y menor a 255
    if(number>=16&&number<=255){
        respuesta.push(diccionarioHex[number%16]);
        do{
            number = Math.trunc(number/16);
            respuesta.push(diccionarioHex[number%16]);
        }while(Math.trunc(number)>0);
        respuesta.pop();

        for(let i=0; i<respuesta.length; i++){
            reverse.push(respuesta[(respuesta.length-i)-1]);
        }
        
        return reverse.join('');
    }
    else if(number>=0&&number<=15){
        //Segundo caso : numero mayor o igual a 0 y menor o igual a 15
        let numeroRespuesta = diccionarioHex[number];
        let numeroRespuestaCadena = numeroRespuesta.toString();
        let final = numeroRespuestaCadena.padStart(2,'0');

        return final;
    }
    else if(number<0){
        let numeroRespuesta = 0;
        let numeroRespuestaCadena = numeroRespuesta.toString();
        let final = numeroRespuestaCadena.padStart(2,'0');

        return final;
    }
    else if(number>255){    
        //Tercer Caso : numero mayor a 255
        respuesta = "FF";
        return respuesta;
    }
}
 

function rgb(r, g, b) {
    let cadenaHex = "";

    cadenaHex = decimalHex(r) + decimalHex(g) + decimalHex(b);

    return cadenaHex;
}
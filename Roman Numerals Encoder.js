function solution(number){
  //Declaramos los objetos de traduccion para las conversiones 
    const unidades = {1:'I',2:'II',3:'III',4:'IV',5:'V',6:'VI',7:'VII',8:'VIII',9:'IX'};
    const decenas = {10:'X',20:'XX',30:'XXX',40:'XL',50:'L',60:'LX',70:'LXX',80:'LXXX',90:'XC'};
    const centenas = {100:'C',200:'CC',300:'CCC',400:'CD',500:'D',600:'DC',700:'DCC',800:'DCCC',900:'CM'};
    const unidadesMillar = {1000:'M',2000:'MM',3000:'MMM'};

    //Primero formamos una string a partir del numero del parametro
    let charArray = [];
    let digitArray = [];
    let stringNumber = number.toString();

    //Ahora lo pasamos a un arreglo de numeros enteros
    charArray = stringNumber.split('');
    for(let i=0; i<charArray.length; i++){
        digitArray.push(parseInt(charArray[i]));
    }

    let newArray = [];
    //Ahora agregamos los ceros en cada digito
    for(let i=0; i<digitArray.length; i++){
        newArray.push(digitArray[i]*Math.pow(10,(digitArray.length-i)-1));
    }


    let romanArray = [];
    let finalString = "";
    //Ahora se asigna el número romano correspondiente a cada numero
    for(let i=0; i<newArray.length; i++){
        if(newArray[i]%1000==0){
            //Se busca en los millares
            romanArray.push(unidadesMillar[newArray[i]]);
        }
        else if(newArray[i]%100==0){
            //Se busca en las centenas
            romanArray.push(centenas[newArray[i]]);
        }
        else if(newArray[i]%10==0){
            //Se busca en las decenas
            romanArray.push(decenas[newArray[i]]);
        }
        else{
            //Se busca en las unidades
            romanArray.push(unidades[newArray[i]]);
        }
    }

    finalString = romanArray.join('');

    return finalString;
}
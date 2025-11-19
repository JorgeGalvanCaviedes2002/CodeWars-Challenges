const diccionarioValores = {a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j:10, k:11, l:12, m:13, n:14,
    o:15, p:16, q:17, r:18, s:19, t:20,u:21, v:22, w:23, x:24, y:25, z:26
}

const sumatoriaValoresPalabra = (palabra) => {
    let sumatoria = 0;

    for(let i=0; i<palabra.length; i++){
        sumatoria += diccionarioValores[palabra[i]];
    }

    return sumatoria;
}

function high(x){
    
   let wordArray = x.split(' '); 
   let diccionarioValores = {}; 
   
   for(let i=0; i<wordArray.length; i++){ 
    diccionarioValores[wordArray[i]] = sumatoriaValoresPalabra(wordArray[i]); 
   } 

   let mayor = diccionarioValores[wordArray[0]]; 
   for(palabra in diccionarioValores){ 
        if(sumatoriaValoresPalabra(palabra)>sumatoriaValoresPalabra(mayor)){ 
            mayor = palabra; 
        } 
    } 
    
    return mayor;
}
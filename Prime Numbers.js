function isPrime(number) {
    let resultado = -1;

    if(number==2){
      return true;
    }
    if(number%2==0||number==1||number==0||number<0){
        return false;
    }
    else{
        let veredict = true;
        for(let i=3; i<=Math.trunc(Math.sqrt(number)); i++){
            if(number%i==0){
                veredict = false;
                break;
            }
        }

        return veredict;
    }
}

function getPrimes(start, finish) {
  //Implementemos la Criba de Eratóstenes de la forma más eficiente posible
  let primeArray = [];


  if(finish<start){
    let aux = finish;
    finish = start;
    start = aux;
  }
  else if(start<2){
    start = 2;
  }

  for(let i=start; i<=finish; i++){
    if(isPrime(i)){
        primeArray.push(i);
    }
  }

  return primeArray;
}
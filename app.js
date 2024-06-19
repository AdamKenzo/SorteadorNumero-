function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let numero;
    let sorteados = [];

    for(let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        sorteados.push(numero);
        
    }
    
}

function obterNumeroAleatorio(min, max){
    if(min > max){
        return Math.floor(Math.random() * (min - max + 1)) + max;    
    } else {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
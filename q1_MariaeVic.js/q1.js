//Regra do 3 e do 5 tem PRIORIDADE!!!

function solucao(n){
    let vetor= [];
    for (let i = 1; i <= n; i++){
    if (i % 3 === 0 && i % 5 === 0) {
            vetor.push("FizzBuzz");
            // % RESTO DE DIVISÃO  === IGUALDADE ESTRITA (tipo+valor) && (ambos verdadeiros)
    } else if ( i % 3 === 0) {
        vetor.push("Fizz");

    }
}
}
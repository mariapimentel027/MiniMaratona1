//Regra do 3 e do 5 tem PRIORIDADE!!!

function solucao(n){
    let vetor= [];
    for (let i = 1; i <= n; i++){
    if (i % 3 === 0 && i % 5 === 0) {
            vetor.push("FizzBuzz");
            // % RESTO DE DIVISÃO  === IGUALDADE ESTRITA (tipo+valor) && (ambos verdadeiros)
    } else if ( i % 3 === 0) {
        vetor.push("Fizz");
    } else if (i % 5 === 0){
        vetor.push("Buzz");
    } else if (i % 7 === 0){
        vetor.push("Boom");
    } else {
        vetor.push(i);
    }
}
    return vetor;
}
    function executar(){
        //chamando function do html
        let valor = document.getElementById("campo").value;
        let n = parseInt(valor);
        // leitura de valores do HTML

        if(isNaN(n) || n < 1 ){
            document.getElementById("saida").innerHTML = "Insira um valor válido (número maior que 0)";
            return;
        }
        // verificação de valores

        let resultado = solucao(n);
        // transformando para string
        document.getElementById("saida").innerHTML = "[" + resultado.join(", ") + "]";

    }
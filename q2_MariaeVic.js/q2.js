function solucao(texto){
    let textominusculo = texto.toLowerCase();
    //ignorando letras minusculas
    let textoinvertido = "";
  for (let i = textoMinusculo.length - 1; i >= 0; i--) {
        textoInvertido += textoMinusculo[i];
    }
    // invertendo a string usando um laço => pesquisei tbm  

    return textominusculo === textoinvertido;
    // comparando os textos
}

function executar(){
    let texto = document.getElementById("campo").value;
    // fazendo leitura dos campos HTML

    if (texto === ""){
        document.getElementById("saida").innerHTML = "Por favor digite alguma palavra ou frase para análise";
        return;
    }
    let resultado = solucao(texto);
    document.getElementById("saida").innerHTML = resultado ? "true" : "false";
}

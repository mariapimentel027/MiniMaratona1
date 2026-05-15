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
}

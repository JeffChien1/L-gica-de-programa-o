var ingredientes = [];

var quantidade = parseInt(prompt("Quantos ingredientes você vai adicionar?"));

var repetiu = false;

for(var contador = 0; contador < quantidade; contador++) {

    var ingrediente = prompt("Informe o ingrediente " + contador);

    for(var posicao = 0; posicao <= ingredientes.length; posicao ++) {

        if(ingredientes[posicao] == ingrediente){

            repetiu = true;
            alert("Ingrediente repetido, Favor inserir outro ingrediente.");
            ingrediente = prompt("Informe o ingrediente " + contador);
            ingredientes.push(ingrediente);
            break;
        }
    }


    if (repetiu == false) {

            ingredientes.push(ingrediente);
    }
}

console.log(ingredientes);


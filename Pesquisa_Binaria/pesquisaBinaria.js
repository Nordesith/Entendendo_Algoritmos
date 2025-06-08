function pesquisa_binaria (lista, item) {
    let baixo = 0;
    let alto = lista.length - 1;
    let operacoes = 0;

    while (baixo <= alto) {
        let meio = Math.floor((baixo + alto) / 2);
        let chute = lista[meio];
        
        if (chute == item) {
            console.log(operacoes);
            return meio;
        }
        if (chute > item) {
            alto = meio - 1;
        } else {
            baixo = meio + 1;
        }
        operacoes++;
    }
    console.log(operacoes);
    return null;
}

let minhaLista = [];
for (let index = 0; minhaLista.length < 128; index++) {
    if (index % 2 != 0) {
        minhaLista.push(index);
    }
}

function pegarItem(max) {
  return Math.floor((Math.random() * max) + 1);
}
let ItemDaBusca = pegarItem(256);
console.log(ItemDaBusca);
console.log(pesquisa_binaria(minhaLista, ItemDaBusca));
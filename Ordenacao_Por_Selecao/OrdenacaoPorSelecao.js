function buscaMenor (arr) {
    let [menor] = arr;
    let menorIndice = 0;

    for (let i = 1; i < arr.length; i++) {
        const elemento = arr[i];
        if (elemento >= menor) continue;
            menor = elemento;
            menorIndice = i;
    }
    return menorIndice;
}

function ordenacaoPorSelecao (arr) {
    const tamanho = arr.length;
    const resultado = new Array(tamanho).fill(0);

    for(let i = 0; i < tamanho; i++) {
        const menorIndice = buscaMenor(arr);
        const [menor] = arr.splice(menorIndice, 1);
        resultado[i] = menor;
    }
    return resultado;
}

const arrayTeste = [5, 3, 6, 2, 10];
const arrayOrdenado = ordenacaoPorSelecao(arrayTeste);
console.log(arrayOrdenado);
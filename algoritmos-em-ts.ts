
function somaRecursiva(numeros: number[]): number {
    if(numeros.length == 1){
        return numeros[0];
    }

    let n = <number>numeros.pop();
    return n + somaRecursiva(numeros); 
}

function somaRecursivaComTail(numeros: number[], i: number = 0, total: number = 0): number {
    if(!(i < numeros.length)){
        return total;
    }

    total += numeros[i];
    return somaRecursivaComTail(numeros, ++i, total);
}

function contaItens(lista: number[], i: number = 0): number {
    
    if(lista.length ==  1){
        return 1;
    }

    lista.pop()
    return 1 + contaItens(lista)
}

function max(itens: number[], 
             maior: number = Number.MIN_VALUE, 
             i: number = 0): number {
    if(i == itens.length){
        return maior;
    }
    
    if(maior < itens[i]){
        maior = itens[i];
    }

    return max(itens, maior, i + 1);
}

function buscaBinariaRecursiva(
    lista: number[], 
    chave: number,
    topo: number = -1,
    inicio: number = -1
){
    
    if(inicio == -1 && topo == -1){
        topo = lista.length - 1;
        inicio = 0;
    }
    //console.log(` inicio ${inicio} topo ${topo} `)

    if(topo < inicio || inicio > topo){
        return -1;
    }

    let meio = Math.floor((topo + inicio)/2)

    if(lista[meio] == chave){
        return meio;
    }
    else if(chave > lista[meio]){
        return buscaBinariaRecursiva(lista, chave, topo, meio + 1)
    }
    else if(chave < lista[meio]){
        return buscaBinariaRecursiva(lista, chave, meio - 1, inicio)
    }
}

[1, 2, 3, 4, 5, 6, 7, 8, 9, -10].forEach(item => {
    console.log(
        buscaBinariaRecursiva(
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
        item)
    )
})


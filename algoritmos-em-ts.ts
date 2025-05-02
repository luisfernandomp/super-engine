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

console.log(
    somaRecursivaComTail([1, 2, 3, 4, 5, 6, 7, 8, 9])
)
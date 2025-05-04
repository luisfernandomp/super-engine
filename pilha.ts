class Stack<T> {
    itens: T[];
    
    constructor() {
        this.itens = [];
    }

    push(element: T) {
        this.itens.push(element);
    }

    isEmpty() {
        return this.itens.length > 0;
    }

    pop(): T {
        const item = this.itens.pop();
        return <T>item;
    }

    peek(): T {
        return this.itens[this.itens.length - 1];
    }

    clear() {
        this.itens = [];
    }
}

class StackWithObject<T> {
    itens: any;
    count: number;

    constructor() {
        this.itens = {};
        this.count = 0;
    }

    push(element: T){
        this.itens[this.count] = element
        this.count++;
    }

    isEmpty() {
        return this.count == 0;
    }

    pop() : T {
        if(this.isEmpty()){
            console.log("A pilha está vazia");
            return <T>undefined;
        }

        const item = this.itens[this.count - 1];
        delete item[this.count - 1];
        
        return item;
    }

    peek(): T {
        return this.itens[this.count - 1];
    }

    clear() {
        this.itens = {};
    }
}



const _itens = Symbol('itensStack')
class StackSymbol {
    [_itens]: number[];

    constructor(){
        this[_itens] = [];
    }

    push(n: number) {
        this[_itens].push(n);
    }

    pop(): number | undefined {
        return this[_itens].pop();
    }
}

const items = new WeakMap();
class StackWeakMap {

    constructor() {
        items.set(this, []);
    }

    push(element: number){
        const item = items.get(this);
        item.push(element);
    }

    pop(): number {
        const item = items.get(this);
        return item.pop();
    }
}
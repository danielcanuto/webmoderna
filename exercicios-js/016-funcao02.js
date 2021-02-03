// Armazenando uma funçao em uma variavel

const imprimirSoma = function (a, b) {
    console.log(a + b)
    
}

imprimirSoma(2, 3)
console.log(typeof imprimirSoma)
// Armazenando uma foncao arrow em uma variavel

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))
console.log(typeof soma)
// retorno implícito

const subtracao = (a, b) => a - b //funçao de uma unica linha

console.log(subtracao(10,4))
console.log(typeof subtracao)

const imprimir2 = a => console.log(a)
imprimir2(3322)
imprimir2("truta")
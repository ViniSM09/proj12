let numeros = []

for (let i = 0; i < 15; i++) {
    numeros[i] = Number(prompt("Digite um número"))
}

console.log("Números digitados:")

for (let i = 0; i < 15; i++) {
    console.log(numeros[i])
}

console.log("Posições dos múltiplos de 10:")

for (let i = 0; i < 15; i++) {
    if (numeros[i] % 10 == 0) {
        console.log(i)
    }
}
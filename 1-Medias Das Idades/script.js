let idades = []
let soma = 0

for (let i = 0; i < 8; i++) {
    idades[i] = Number(prompt("Digite a idade"))
    soma = soma + idades[i]
}

let media = soma / 8

console.log("A média das idades é:", media)
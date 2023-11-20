let frutas = []
let laticinios = []
let congelados = []
let doces = []
let resposta = "sim"
while (resposta == "sim") {

    let item = prompt("Qual item você gostaria de adicionar?")
    let categoria = prompt("Que categoria?")
    if (categoria == "frutas") {
        frutas.push(item)
    }
    if (categoria == "laticinios") {
        laticinios.push(item)
    }
    if (categoria == "congelados") {
        congelados.push(item)
    }
    if (categoria == "doces") {
        doces.push(item)
    }

    resposta = prompt("deseja adicionar outro item no seu carrinho?")
}

frutas.forEach((valor) => {
    console.log(" frutas: ")
    console.log(valor)
})

laticinios.forEach((valor) => {
    console.log(" laticinios: ")
    console.log(valor)
})
congelados.forEach((valor) => {
    console.log(" congelados: ")
    console.log(valor)
})

doces.forEach((valor) => {
    console.log(" doces: ")
    console.log(valor)
})

resposta1 = prompt("Deseja adicionar outro item no seu carrinho?")


function lista (){ 
frutas.forEach((valor) => {
    console.log(" frutas: ")
    console.log(valor)
})

laticinios.forEach((valor) => {
    console.log(" laticinios: ")
    console.log(valor)
})
congelados.forEach((valor) => {
    console.log(" congelados: ")
    console.log(valor)
})

doces.forEach((valor) => {
    console.log(" doces: ")    
    console.log(valor)
})

}

let removerItem = prompt("Deseja remover algum item do seu carrinho?")
while (removerItem == "sim") {

let categoriaRemover = prompt("Qual categoria você deseja remover o item? ")
let itemRemover = prompt("Qual item dessa categoria você deseja remover?")
if (categoriaRemover == "frutas") {
    let posicao = frutas.indexOf(itemRemover)
    frutas.splice(posicao, 1)
}

if (categoriaRemover == "laticinios") {
    let posicao = laticinios.indexOf(itemRemover)
    laticinios.splice(posicao, 1)
}

if (categoriaRemover == "congelados") {
    let posicao = congelados.indexOf(itemRemover)
    congelados.splice(posicao, 1)
}
if (categoriaRemover == "doces") {
    let posicao = doces.indexOf(itemRemover)
    doces.splice(posicao, 1)
}
removerItem = prompt("deseja remover outro item do seu carrinho?")
}r


lista () 

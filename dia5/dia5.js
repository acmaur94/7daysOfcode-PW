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

    resposta = prompt("deseja adicionar outro item")
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




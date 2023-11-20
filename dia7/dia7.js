


function soma (){
    let n1= prompt ("Insira o primeiro número:")
    let n2= prompt ("insira o segundo numero:")

    let resultado =  parseInt(n1) + parseInt(n2)
    
    alert ("o resultado da soma é: " +resultado)
}


function subtracao (){
    let n1= prompt ("Insira o primeiro número:")
    let n2= prompt ("insira o segundo numero:")

    let resultado =  parseInt(n1) - parseInt(n2)
    
    alert ("o resultado da subtracão é: " +resultado)
}


function multiplicacao(){
    let n1= prompt ("Insira o primeiro número:")
    let n2= prompt ("insira o segundo número:")

    let resultado =  parseInt(n1) * parseInt(n2)
    
    alert ("o resultado da multiplicacão é: " +resultado)
}


function divisao (){
    let n1= prompt ("Insira o primeiro número:")
    let n2= prompt ("insira o segundo número:")

    let resultado =  parseFloat(n1) / parseFloat(n2)
    
    alert ("o resultado da divisão é: " +resultado.toFixed(2))
    }


let operacao = prompt ("Qual operação você deseja escolher?(+,-,*,/)")
if(operacao == "+"){
    soma ()    

}
if(operacao == "-"){
    subtracao ()    

}

if(operacao == "*"){
    multiplicacao ()    

}

if(operacao == "/"){
    divisao ()    

}
      
    
const numero = 7;
let tentativa = false;


for (let contador = 0; contador < 3; contador++) {
    tentativa = prompt("Tente adivinhar o número correto de 0 a 10:");
    if (tentativa == numero) {
        alert("Parabéns, você acertou o número correto! O número:" +numero);
        break 
        }
    else {
        alert("Ah!Que pena! Número incorreto, tente novamente!");
     
    }
   
    if (contador == 2 ) {
        alert ("Acabaram as tentativas! que pena... O número correto é: " +numero)
    }
    
    
}


let area = prompt("Qual a área você quer seguir ? 'Front-End' ou 'Back-End' ")
let ling = "";
if (area === "Front-End") {
    ling = prompt("Você tem conhecimento em 'React' ou 'aprendeu Vue'");
} else if (area === "Back-End") {
    ling = prompt("Você deseja aprender 'C#' ou 'Java' ? ");
}
else {
    alert("Atenção, você não selecionou uma área corretamente, tente novamente");

}

let especializacao = prompt("Digite 1 para seguir na área desejada, ou 2 se houver o interesse em se tornar full-stack");
if (especializacao == 1) {
    alert(`Continue desenvolvendo em ${ling} para dominar a área de ${area}`);
}
else if (especializacao == 2) {
    alert(`Se você entende que chegou o tempo certo de comecar a programar em outras linguagens além de ${ling} para voce se tornar um fullstack`);

}
else {
    alert('Atenção, você não selecionou uma área corretamente, tente novamente')
}

let mensagem = prompt("Teria alguma outra tecnologia que você gostaria de se especializar? Se a resposta for sim digite 'sim'");
while (mensagem === "sim") {
    let tecnologia = prompt("Qual seria?");
    alert(`${tecnologia} Ótima esolha!`)
    mensagem = prompt("Teria alguma outra tecnologia que você gostaria de se especializar? Se a resposta for sim digite 'sim'");

}


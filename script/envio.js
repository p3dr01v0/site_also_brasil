function sendMessage() {
    // recupera os valores atraves do "name" estabelecido no forms
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    //adicionando o webhok do servidor do discord
    var webhookUrl = "https://discord.com/api/webhooks/1196256730724712488/5Bylt7nmLSy-7LffyMhp8Oq-owo4pBs4Ly5f0AwL_ZOKq47ad8rbKpjBJC6Q5CXZ-hym";

    // cria uma variavel para organizar os valores de maneira desejada,
    // esta vai ser a forma que de visualização disponivel no servidor do discord
    var data = {
        content: `**Nome:** ${name}\n**Email:** ${email}\n**Assunto:** ${subject}\n**Mensagem:** ${message}`
    };

    //realiza a solicitação POST para o URL armazenado na variavel webhookUrl
    fetch(webhookUrl, {
        method: "POST",
        //Define os cabeçalhos da solicitação. Neste caso, indica que o corpo da solicitação está em formato JSON.
        headers: {
            "Content-Type": "application/json",
        },
        //Converte o objeto data em uma string JSON e a atribui ao corpo da solicitação
        body: JSON.stringify(data), 
    })
    //tratativas
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log("Mensagem enviada com sucesso para o Discord!");
    })
    .catch(error => {
        console.error("Erro ao enviar mensagem para o Discord:", error);
    });

    // Limpar os campos após enviar
    document.getElementById("contactForm").reset();
}

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coleta os dados do formulário
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    // Configurações do e-mail
    $to = "richard.c.dealmeida@gmail.com"; // Substitua pelo seu endereço de e-mail
    $subject = "Nova mensagem do formulário de contato";
    $body = "Nome: $name\nEmail: $email\nCelular: $phone\n\nMensagem:\n$message";
    $headers = "From: $email";

    // Envia o e-mail
    if (mail($to, $subject, $body, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Falha ao enviar a mensagem.";
    }
} else {
    echo "Método de requisição inválido.";
}
?>
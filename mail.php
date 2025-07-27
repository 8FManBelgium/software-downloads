<?php


$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailheader = "From:". $name." <".$email.">\r\n";

$recipient = "8fmanbelgium@mail.com";

mail($recipient, $subject, $message, $mailheader) or die("Error!");

echo '<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>8fmanbelgium contact form</title>
    <link rel="stylesheet" href="style2.css">
      <link
      href="https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400..700&display=swap"
      rel="stylesheet"
    />
</head>
<body>
    <div class="container">
        <h1>Bedankt voor u mail ik zal zo snell mogelijk reageren!</h1>
        <p class="back">Ga terug naar de <a href="index.html">StartPagina</a>.</p>
        
    </div>
</body>
</html>';



?>
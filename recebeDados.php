<?php

$nome  = $_POST['nome'];
$idade = $_POST['idade'];

echo json_encode("Meu nome é: ".$nome."<br>"."Minha idade é: ".$idade);
        
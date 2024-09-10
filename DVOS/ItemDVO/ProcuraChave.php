<?php
include_once('../../DAOS/ConexaoBD.php');

if (!$conexao) {
    die("Erro de conexão com o banco de dados");
}

$premium2 = $_POST['premium2']; //criando a variável com o valor do form

$resultado = $conexao->query("SELECT chave FROM cadastro_usuarios"); //pegando a coluna de chaves

$chaves = array(); //criando uma lista para guardar as chaves
while ($linha = $resultado->fetch_assoc()) { //while pra adc todas as chaves da coluna
    $chaves[] = $linha['chave']; //adc
}

if (in_array($premium2, $chaves)) { //vendo se a chave ta em chaves
    $resposta = array("status" => "valido"); //se tiver
} else {
    $resposta = array("status" => "invalido"); //caso nao tenha
}


echo json_encode($resposta);

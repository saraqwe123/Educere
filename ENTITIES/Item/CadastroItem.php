<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CadastroItem.css">
    <script src="CadastroItem.js" defer></script>
    <title>Document</title>
</head>
<body>
    <div class="container">
        <header>
            <button class="botao1" id="botao">
                &#9776
            </button>
            <ul class="menu_lista" id="menu">
                <div class="menu_conteudo">
                    <li><a href="../Login/Login.php">LOGIN</a></li>
                    <li><a href="..//Modulos/Modulo1">MÓDULO 01</a></li>
                    <li><a href="../Modulos/Modulo2">MÓDULO 02</a></li>
                    <li><a href="../SalasReservadas/SalasReservadas.php">SALAS RESERVADAS</a></li>
                </div>
            </ul>
            <img class="impressora" src="../../imagem/impressora1.png.png" alt="">
            <img src="../../imagem/salve1.png.png" alt="">
            <img class="cancelar" src="../../imagem/cancelar1.png.png" alt="">
        </header>
        <div class="consultar_cadastrar">
            <p id="um">consulta</p>
            <p id="dois">cadastro</p>
        </div>
        <div class="titulo_pagina">
            Cadastros e Consultas
        </div>
        <form method="POST" action="../../DAOS/ItensDAO.php" id="iformulario">
            <div class="principais">
                <label for="icategoria" id="label0">Selecione a categoria do item</label>
                <input type="text" id="icategoria" name="categoria" disabled required>
                <label for="inome" id="label0">Nome do item</label>
                <input type="text" id="inome" name="nome" disabled required>
                <label for="imarca" id="label3">Marca</label>
                <input type="text" id="imarca" name="marca"disabled required>
                <label for="ilocal" id="label1">Local do item</label>
                <input type="text" id="ilocal" name="local" disabled required>
                <label for="idata" id="label4">Data de entrada</label>
                <input type="text" id="idata" name="data" disabled placeholder="dd/mm/aaaa" maxlength="10" required>
            </div>
            <div class="informacao">
                <label for="ivalor" id="label5">Valor estimado</label>
                <input type="text" id="ivalor" name="valor" disabled required>
                <label for="inergia" id="label6">Quantidade de energia</label>
                <input type="text" id="inergia" name="energia" disabled required>
                <label for="idescricao">Descrição</label>
                <textarea id="idescricao" name="descricao" disabled required>Descrição do produto</textarea>
                <input type="file" name="foto" id="ifoto">
            </div>
            <button class="botao2">Adicionar novo item</button>
        </form>
    </div>
    <div class="mostrar" style="display: none">
        <label for="">Para conseguir cadastrar itens, entre com sua chave de acesso</label>
        <br>
        <input type="text" name="premium" id="ipremium" placeholder="Users supremos">
        <br>
        <button class="botao_verifica" id="ibotao_veri">Enviar</button>
    </div>
</body>
</html>
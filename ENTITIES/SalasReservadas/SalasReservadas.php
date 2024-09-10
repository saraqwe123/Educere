<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="SalasReservadas.css">
    <title>Document</title>
</head>

<body>
    <h1> 
    <button class="botao1" id="ibtn">
        &#9776
    </button>
    </h1>
    <ul class="menu_lista" id="menu">
        <div class="menu_conteudo">
            <li><a href="../Login/Login.php">LOGIN</a></li>
            <li><a href="../Modulo1">MÓDULO 01</a></li>
            <li><a href="../Modulos/Modulo2">MÓDULO 02</a></li>
            <li><a href="../Usuario/CadastroUser.php">CADASTRO</a></li>
            
        </div>
    </ul> 
    <form action="">
        <input type="text" id="tarefa" name="tarefa" placeholder="Adicione uma nova tarefa">
        <button id="criar">𝗰𝗿𝗶𝗮𝗿 ⨁</button>
    </form>
    <div class="tarefasLabel">
        <div id="tarcriada">Salas Reservadas 0</div>
    </div>

    <div id="containerTarefas"><img src="imagem/Logo (2).png" alt="" id="img"></div>
    <script src="SalasReservadas.js"></script>
</body>

</html>
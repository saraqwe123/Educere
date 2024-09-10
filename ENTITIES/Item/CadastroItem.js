let cadastrar = document.querySelector("#dois");
let mensagem = document.querySelector(".mostrar");
let botao_veri = document.getElementById("ibotao_veri");
let consultar = document.getElementById("um");
let premium = document.getElementById("ipremium");
let categoria = document.getElementById("icategoria");
let nome = document.getElementById("inome");
let marca = document.getElementById("imarca");
let local = document.getElementById("ilocal");
let data = document.getElementById("idata");
let valor = document.getElementById("ivalor");
let energia = document.getElementById("inergia");
let descricao = document.getElementById("idescricao");
let lista = [categoria, nome, marca, local, data, valor, energia, descricao];
const menu = document.getElementById("menu");
let consulta_cadastro = document.querySelector(".consultar_cadastrar");
let formulario = document.getElementById("iformulario");
let container = document.querySelector(".container");
let ul = null

function adc_menu(event) {
  if (!menu.contains(event.target) && event.target.id !== "botao") {
    menu.classList.remove("aparecer");
    //!menu.contains ve se esta fora do menu, se nao tivesse a ! veria se esta dentro//
  } else {
    menu.classList.toggle("aparecer");
  }
}

document.addEventListener("click", adc_menu);

function protecao(event) {
  if (event.target == cadastrar || event.target.id == "dois") {
    mensagem.style.display = "flex";
  } else {
    mensagem.style.display = "none";
  }
}

cadastrar.addEventListener("click", protecao);

document.addEventListener("click", function (event) {
  if (
    !mensagem.contains(event.target) &&
    event.target !== cadastrar &&
    !cadastrar.contains(event.target)
  ) {
    mensagem.style.display = "none";
  }
});

function ativa() {
  for (let i = 0; i < lista.length; i++) {
    lista[i].disabled = false;
  }
}

consultar.addEventListener("click", function (event) {
  event.preventDefault();
  if (ul) {

  }

  var xrh = new XMLHttpRequest();
  xrh.open("POST", "../../DVOS/ItemDVO/MostrarItens.php");
  xrh.setRequestHeader("content-type", "application/x-www-form-urlencoded");

  xrh.onreadystatechange = function () {
    if (xrh.status == 200 && xrh.readyState == 4) {
      var itens = JSON.parse(xrh.responseText);
      if (ul) {
        ul.remove()
        formulario.style.display = "none"
        ul.style.display = "block"
      }
      ul = document.createElement("ul");

      for (let i = 0; i < itens.length; i++) {
        li = document.createElement("li");

        const qrcode = document.createElement("img");
        qrcode.src = "../" + itens[i].qr_code_path;  // URL do QR Code
        qrcode.style.maxWidth = "300px";
        qrcode.style.border = "1px solid black"
        
        li.innerHTML = `${itens[i].nome} ${itens[i].categoria} ${itens[i].marca} ${itens[i].data} ${itens[i].valor}`;
        

        li.appendChild(qrcode)
        ul.appendChild(li);
        li.style.display = "flex"
        li.style.alignItems = "center"
  
        li.style
        li.style.height = "50px";
        li.style.padding = "0";
        li.style.borderBottom = "1px solid #ccc";
        li.style.cursor = "pointer";
        li.style.transition = "background-color 0.1s";
        li.style.marginTop = "10px";
        li.style.marginLeft = "10px";
        ul.append(li);
      }

      container.append(ul);
      ul.style.marginLeft = "0.5%";
      ul.style.listStyle = "none";
      ul.style.padding = "0";
      ul.style.height = "60vh";
      ul.style.width = "99vw";
      ul.style.border = "1px solid black";
      ul.style.overflowY = "auto";
      ul.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";

      formulario.style.display = "none";
    }
  };

  xrh.send();
});

botao_veri.addEventListener("click", function (event) {
  event.preventDefault();
  var xrh = new XMLHttpRequest();
  xrh.open("POST", "../../DVOS/ItemDVO/ProcuraChave.php");
  xrh.setRequestHeader("content-type", "application/x-www-form-urlencoded");

  xrh.onreadystatechange = function () {
    if (xrh.status == 200 && xrh.readyState == 4) {
      var resposta = JSON.parse(xrh.responseText);

      if (resposta.status == "valido") {
        formulario.style.display = "block";
        mensagem.style.display = "none";
        if (ul) {
          ul.style.display = "none";
        }
        ativa();
        alert("Acesso para cadastrar itens concedido!");
      } else {
        mensagem.style.display = "none";
        alert("Acesso para cadastrar itens negado!");
      }
    }
  };

  xrh.send("premium2=" + encodeURIComponent(premium.value));
});

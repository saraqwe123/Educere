const menu = document.getElementById('menu');
const botao = document.getElementById('ibtn')

function adc_menu(event) {
    if (!menu.contains(event.target) && event.target.id !== 'botao') {
        menu.classList.remove("aparecer");
        //!menu.contains ve se esta fora do menu, se nao tivesse a ! veria se esta dentro//
    } else {
        menu.classList.toggle("aparecer");
    }
}

document.addEventListener("click", adc_menu);

botao.addEventListener("click", function (event) {
  var cpf = document.getElementById("icpf").value;
  var rg = document.getElementById("irg").value;
  var email = document.getElementById("iemail").value;
  var nome = document.getElementById("inome").value;
  var senha = document.getElementById("isenha").value;
  var premium = document.getElementById("ipremium").value;

  if (
    cpf === "" ||
    rg === "" ||
    email === "" ||
    nome === "" ||
    senha === "" ||
    email.indexOf("@") === -1 ||
    senha.length < 5 ) {
      console.log("sar")
    alert("Por favor, preencha todos os campos corretamente!");
    return;
  } else {
    CPF()
    RG()
  }
})

function CPF() {
  if(cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) alert("CPF inválido!");
  var result = true;
  [9,10].forEach(function(j){
      var soma = 0, r;
      cpf.split(/(?=)/).splice(0,j).forEach(function(e, i){
          soma += parseInt(e) * ((j+2)-(i+1));
      });
      r = soma % 11;
      r = (r <2)?0:11-r;
      if(r != cpf.substring(j, j+1)) alert("CPF com digito verificador incorreto");
  });
 
}

function RG() {
  v=v.replace(/\D/g,"");
  if(v.length == 9) v=v.replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/,"$1.$2.$3-$4");
  if(v.length == 8) v=v.replace(/(\d{1})(\d{3})(\d{3})(\d{1})$/,"$1.$2.$3-$4"); 

  return v
}

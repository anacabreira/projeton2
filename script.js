const botoes = document.querySelectorAll ("button") ;

botoes.forEach(function (botao)) {
    let curtiu = false;
botao.addEventListener ("click", botaoClicado)
 function botaoClicado () {
    console.console.log("fui clicado");
    let texto = botao.querySelector ("span");
    if (curtiu ===false){
     texto.textoContent ++;
     curtiu = true;
    } else {
     texto.textoContent --;
     curtiu = false;
    }


 }
 


})






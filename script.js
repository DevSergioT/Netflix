let botao = document.getElementById("pergunta")
let menu = document.getElementById("resposta")
let imagem = document.getElementById("seta")

function aparecer(){

   if (menu.style.display == "none") {
       menu.style.display = "block"
       imagem.id = "seta-girar"
   }else {
       menu.style.display = "none"
        imagem.id = "seta"   
}
}
    botao.addEventListener("click",aparecer)
   
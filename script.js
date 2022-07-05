// BÔNUS
// Crie uma layout responsivo para mobile (celular).
const [login,senha] = document.querySelectorAll("input");
const btn = document.querySelector(".btn");
const tela = document.querySelector(".tela")

function autenticar() {
    if ((login.value) && (senha.value.length >=8)) {
        btn.removeAttribute("disabled");
        btn.classList.remove("btnColor2")
        btn.classList.add("btnColor1")

        //aqui está o mistério do botão, ja criei outra function onclick e nada.
        tela.classList.remove("tela1");
        tela.classList.add("tela2");

    }else{
        btn.setAttribute("disabled", "disabled");
    }
}


login.addEventListener("input",autenticar);
senha.addEventListener("input",autenticar);
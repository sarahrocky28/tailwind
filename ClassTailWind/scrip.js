// const button = document.querySelector("button");
// const body = document.querySelector("body");
// const div = document.querySelector("div");
// const h1 = document.querySelector("h1");

const elemento = {
    body: document.querySelector("body"),
    h1: document.querySelector("h1"),
    button: document.querySelector("button"),
};

elemento.button.addEventListener("click", () => {
    console.log("Clicou");

    elemento.body.classList.toggle("dark-mode");
    elemento.button.classList.toggle("dark-mode");

    if (elemento.body.classList.contains("dark-mode")) {
        elemento.h1.innerText = "Modo escuro ativado";
    } else {
        elemento.h1.innerText = "Modo escuro desativado";
    }

    if (elemento.button.classList.contains("dark-mode")) {
        elemento.button.innerText = "Ativar";
    } else {
        elemento.button.innerText = "Desativar";
    }
})



// body.classList.toggle("botao-dinamico");
// div.classList.toggle("ocultar-elemento");
// h1.classList.toggle(h1);


// if (div.classList.contains("ocultar-elemento")) {
//     ;
// }

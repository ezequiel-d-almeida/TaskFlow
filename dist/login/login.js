const form = document.querySelector("#form_login");
const usuarioInput = document.querySelector("#usuario");
const senhaInput = document.querySelector("#senha");
const mensagem = document.querySelector("#mensagem");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const usuario = usuarioInput.value;
    const senha = senhaInput.value;
    const usuarioCorreto = "admin";
    const senhaCorreta = "123";
    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        localStorage.setItem("auth", "true");
        localStorage.setItem("usuario", usuario);
        window.location.href = "./index.html";
    }
    else {
        mensagem.textContent = "Usuário ou senha inválidos";
    }
});
export {};
//# sourceMappingURL=login.js.map
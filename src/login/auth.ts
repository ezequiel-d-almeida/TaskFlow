const autenticado = localStorage.getItem("auth")

if (autenticado !== "true") {

    window.location.href = "./interface.html"

}
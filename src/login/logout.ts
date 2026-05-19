const logout = document.querySelector("#logout") as HTMLButtonElement | null

if (logout) {
    logout.addEventListener("click", function() {
        localStorage.removeItem("auth")
        localStorage.removeItem("usuario")
        window.location.href = "./interface.html"
    })
}
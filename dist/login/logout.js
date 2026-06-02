const logout = document.querySelector("#logout");
if (logout) {
    logout.addEventListener("click", function () {
        localStorage.removeItem("auth");
        localStorage.removeItem("usuario");
        window.location.href = "./interface.html";
    });
}
export {};
//# sourceMappingURL=logout.js.map
const menuIcon = document.getElementById("menu-icon")
const menu = document.getElementById("nav-mobile")
const menuLinks = document.querySelectorAll("#nav-mobile a")
const page = document.body

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("open")
    if (menu.classList.contains("open")) {
        // MUDA ICONE PARA FECHAR
        menuIcon.classList.remove("bi-list")
        menuIcon.classList.add("bi-x")
        page.style.overflowY = "hidden"
    } else {
        // MUDA ICONE PARA ABRIR
        menuIcon.classList.add("bi-list")
        menuIcon.classList.remove("bi-x")
        page.style.overflowY = "auto"
    }
})

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("open")
        menuIcon.classList.add("bi-list")
        menuIcon.classList.remove("bi-x")
        page.style.overflowY = "auto"
    })
})

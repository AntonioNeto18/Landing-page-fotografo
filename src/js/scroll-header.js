const header = document.getElementById("header")

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add("scroll")
    } else {
        header.classList.remove("scroll")
    }
})
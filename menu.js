let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById ('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener ('click', ()=> {
    menu.classList.add('abrir-menu')
}) 

menu.addEventListener ('click', ()=> {
    menu.classList.remove('abrir-menu')
}) 

overlay.addEventListener ('click', ()=> {
    menu.classList.remove('abrir-menu')
}) 


// mudando o tema 

const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;

function changeTheme(){
    const currentTheme = rootHtml.getAttribute("data-theme");


    if(currentTheme === "dark")rootHtml.setAttribute("data-theme", "light")
    else rootHtml.setAttribute("data-theme", "dark")

    toggleTheme.classList.toggle("bi-sun")
    toggleTheme.classList.toggle("bi-moon-stars")
}

toggleTheme.addEventListener("click", changeTheme);
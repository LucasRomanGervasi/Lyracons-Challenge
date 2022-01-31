/*MENU ITEMS 2*/
function mostrarItems(){
    document.getElementById('ocultaritems').style.display = 'none'
}

/*MENU ITEMS 3*/
function mouseOver(){
    document.getElementById('sidebarnaranja').style.backgroundColor = '#e61717e2'
}
function mouseOut(){
    document.getElementById('sidebarnaranja').style.backgroundColor = '#CA5310 '
}

/*MENU ITEMS 4*/ 
function mostrarTexto(){
    document.getElementById('holamundo').style.display = "block"
}

/*MENU HAMBURGUESA*/
const btn_menu = document.querySelector(".btn_menu")
const menus = document.querySelector(".menus")

btn_menu.addEventListener("click", () => {
    menus.classList.toggle("menus_visible")
})

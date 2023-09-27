let cantidadelement = document.getElementById("cantidad")
console.log(cantidadelement)
let cantidadesElement = document.getElementById("cantidades") //referenciando ID cantidades de HTML
cantidadelement.innerText = 3

let inputelement = document.getElementById("ncantidad")


let btnelement = document.getElementById("btn")

btnelement.addEventListener("click", clickHandler)

function clickHandler(ev) {
    console.log("Hola Mundo")
    let nuevaCantidad = inputelement.value
    console.log(nuevaCantidad)
    let nuevoSpan = document.createElement ("span")
    nuevoSpan.innerText = nuevaCantidad //Agregar texto de nueva cantidad al SPAN que se esta creando 
    cantidadesElement.append(nuevoSpan)
}
let nombreProducto = document.getElementById("producto")
let precio = document.getElementById("precio")

let btnelement = document.getElementById("btn")


btnelement.addEventListener("click", clickHandler)

function clickHandler(ev) {
    //Obtener valor de nombreProducto
    //Obtener valor de precio
    console.log("Hola Mundo")
    //let divSpan = document.createElement("div") //CREAR UN DIV 
    let divSpan = document.createElement("div")
    let nuevoSpan = document.createElement("span")//Crear elemento span precio 
    let nuevBr  = document.createElement("br")//crear br
    let nuevoSpanN = document.createElement("span") //Crear elemento span nombre
    let cartasElement = document.getElementById("cartas")

    nuevoSpan.innerText = nombreProducto.value//Agregar valores  nombre
    nuevoSpanN.innerText = precio.value   //Agregar valores  precio 
    divSpan.append("Nombre del producto: ", nuevoSpan, nuevBr,"Precio: ", nuevoSpanN) //DIV con SPAN nombre, BR y SPAN precio
    cartasElement.append(divSpan)




}
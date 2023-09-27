// Arreglo para almacenar los productos
let products = [

  ];
console.log("Hello World")
// Referencias a elementos del DOM
const productForm = document.getElementById("product-form");
const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const productCards = document.getElementById("product-cards");
const productBtn = document.getElementById("sort-button");
const productBtnDelete =document.getElementById("delete-button");
const productBtnDeleteLast = document.getElementById("delete-last-button");
const productSaveBtn = document.getElementById("save-button")


 function showElements() { //Funcion para ir agregando los productos 
     productCards.innerHTML = ""
    for (const product of products) {
        let card = document.createElement("div")
        card.classList.add("col-md-4", "mb-4");
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price.toFixed(2)}</p> 
                 
                </div>
            </div>
        `;
        productCards.appendChild(card);
    }

    

}
showElements()

function agregarElements(name, price){
    products.push({name:name, price:price})
    showElements()
}



productForm.addEventListener("submit", function (e) {
    e.preventDefault(); //Prevenir que se recargue la pagina
    const productName = productNameInput.value; 
    const productPrice = parseFloat(productPriceInput.value);
    agregarElements(productName, productPrice);
    productNameInput.value = "";
    productPriceInput.value = "";
});
//Poner un listener para el boton Ordenar

function Ordenar (){
  products.sort((a,b)=>b.price-a.price)
  showElements()
}

productBtn.addEventListener("click", Ordenar )

function BorrarTodo (){ //BORRA TODOS LOS PRODUCTOS REGISTRADOS
  products = []
  showElements()
}

productBtnDelete.addEventListener("click", BorrarTodo)

productBtnDeleteLast.addEventListener("click", deleteLast )

function deleteLast(){ //BORRA ULTIMO PRODCUTO REGISTRADO 
  products.pop()
  showElements()
}

function SaveLocalStorage(){
const stringifiedProducts = JSON.stringify(products)
localStorage.setItem("productos",stringifiedProducts)
const mensajeExito = new SpeechSynthesisUtterance("Productos guardados con exito") //Generar un nuevo objeto de SpeechSynthesisUtterance
speechSynthesis.speak(mensajeExito)
}

productSaveBtn.addEventListener("click", SaveLocalStorage )

function getProducts(){
  const localProducts = localStorage.getItem("productos")
  const parseProducts = JSON.parse(localProducts) //Convertir de texto a objeto de JS

  console.log(localProducts)
  
  if (localProducts == null){

  } 
  else {
    products = parseProducts
  } 
}
getProducts()
showElements()
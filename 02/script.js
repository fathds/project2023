// Arreglo para almacenar los productos
let products = [
    {
      "name": "Laptop",
      "price": 799.99
    },
    {
      "name": "Smartphone",
      "price": 399.99
    },
    {
      "name": "Headphones",
      "price": 129.99
    },
    {
      "name": "Wireless Mouse",
      "price": 19.99
    },
    {
      "name": "Keyboard",
      "price": 49.99
    }
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
const productBtnDeleteSelect = document.getElementById("delete-select-button"); //Variable que manda a llamar al botón
const productSelect = document.getElementsByClassName("card") //variable que contiene el elemento seleccionado


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
                    <button id="delete-select-button" class="btn btn-danger">Eliminar producto seleccionado</button>
                </div>
            </div>
        `;
        productCards.appendChild(card);
    }
    function deleteSelect(){
    

    }
    productBtnDeleteSelect.addEventListener("click", deleteSelect)

}
showElements()

function agregarElements(name, price){
    products.push({name:name, price:price})
    showElements()
}
agregarElements("Pantalla", 90)


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


import { agregarElements,BorrarTodo,Ordenar, deleteLast, showElements } from "./products.js"; 
import {SaveLocalStorage,getProducts} from "./storage.js";
// Arreglo para almacenar los productos

console.log("Hello World")
// Referencias a elementos del DOM
const productForm = document.getElementById("product-form");
const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const productCardsElement = document.getElementById("product-cards");
const productBtn = document.getElementById("sort-button");
const productBtnDelete =document.getElementById("delete-button");
const productBtnDeleteLast = document.getElementById("delete-last-button");
const productSaveBtn = document.getElementById("save-button")


//showElements()

productForm.addEventListener("submit", function (e) {
    e.preventDefault(); //Prevenir que se recargue la pagina
    const productName = productNameInput.value; 
    const productPrice = parseFloat(productPriceInput.value);
    agregarElements(productName, productPrice,productCardsElement);
    productNameInput.value = "";
    productPriceInput.value = "";
});
//Poner un listener para el boton Ordenar

productBtn.addEventListener("click", Ordenar(productCardsElement) )

productBtnDelete.addEventListener("click", BorrarTodo)

productBtnDeleteLast.addEventListener("click", deleteLast )



productSaveBtn.addEventListener("click", SaveLocalStorage )


getProducts()
showElements(productCardsElement)
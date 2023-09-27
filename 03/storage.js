import {setProducts} from "./products.js";
function getProducts(){
    const localProducts = localStorage.getItem("productos")
    const parseProducts = JSON.parse(localProducts) //Convertir de texto a objeto de JS
  
    console.log(localProducts)
    
    if (localProducts == null){
  
    } 
    else {
      setProducts(parseProducts)
    } 
  }

  function SaveLocalStorage(){
    const stringifiedProducts = JSON.stringify(products)
    localStorage.setItem("productos",stringifiedProducts)
    const mensajeExito = new SpeechSynthesisUtterance("Productos guardados con exito") //Generar un nuevo objeto de SpeechSynthesisUtterance
    speechSynthesis.speak(mensajeExito)
    }
    export { SaveLocalStorage, getProducts}
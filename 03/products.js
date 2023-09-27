let products = [

];

function getProducts(){
    return products
}

function setProducts(productArr){
    products = productArr
}

function showElements(productCards) { //Funcion para ir agregando los productos 
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

function agregarElements(name, price, productCards){
    products.push({name:name, price:price})
    showElements(productCards)
}

function Ordenar (productCards){
    let products = getProducts()
    products.sort((a,b)=>b.price-a.price)
    setProducts(products)
    showElements(productCards)
  }

function BorrarTodo (){ //BORRA TODOS LOS PRODUCTOS REGISTRADOS
    products = []
    showElements()
  }

function deleteLast(){ //BORRA ULTIMO PRODCUTO REGISTRADO 
    products.pop()
    showElements()
  }

  export { showElements, agregarElements, Ordenar, BorrarTodo, deleteLast, getProducts,setProducts}
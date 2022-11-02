let content = document.getElementById("shopContent");
let verCarrito = document.getElementById("verCarrito");

let carrito = [];

function renderizarProductos(){
    for(const producto of productos){
        content.innerHTML += `
        <div class="col">
            <div class="card" style="width: 18rem;">
                <div class="image-wrapper">
                    <img src="${producto.img}">
                </div>
                <div class="card-body" id="comprar">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">$ ${producto.precio}</p>
                    <button id="btn${producto.id}" class="btn btn-primary">Comprar</button>
                </div>
            </div>
        </div>   
        `;
    }

    //EVENTOS
    productos.forEach((producto) => {
        document.getElementById(`btn${producto.id}`).addEventListener("click", function(){
            agregarAlCarrito(producto);
        });
    });
}

renderizarProductos();

function agregarAlCarrito(productoAComprar){
    carrito.push(productoAComprar);
    console.table(carrito);
    alert("Producto "+productoAComprar.nombre+" agregado al carro!");
}

verCarrito.addEventListener("click", () => {
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    
    `
})
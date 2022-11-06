let content = document.getElementById("shopContent");
let verCarrito = document.getElementById("buttonModal");
let modalContent = document.getElementById("carritoContent");

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
    modalContent.innerHTML += `
        <div class="col">
            <div class="card" style="width: 18rem;">
                <div class="image-wrapper">
                    <img src="${productoAComprar.img}">
                </div>
                <div class="card-body" id="comprar">
                    <h5 class="card-title">${productoAComprar.nombre}</h5>
                    <p class="card-text">$ ${productoAComprar.precio}</p>
                    <button id="btn${productoAComprar.id}" class="btn btn-primary">Comprar</button>
                    <button id="btn${productoAComprar.id}" class="btn btn-primary">Comprar</button>
                </div>
            </div>
        </div>
    `
}

//mejor diseño de carrito
//agregar botones de agregar o  quitar unidades
//agregar boton vaciar carrito
//local storage

//Busco cambiar el diseño del carriito modal, de cartas a tablas.Ademas, agregar los botones de agregar, quitar y eliminar productos. Debo agregar lo visto en la clase de Storage. Mucho muy importante agregar en la tabla los precios totales y parciales. 
//Estoy tapado de laburo y parciales de la universidad. En la semana lo termino, perdón.
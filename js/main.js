let productos=[];

let totalCompra;

let content = document.getElementById("shopContent");
let modalContent = document.getElementById("carritoContent");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

(carrito.length != 0) && renderizarCarritoInicial();
getJSON();

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


//GET PRODUCTOS.JSON

async function getJSON() {
    const URLJSON = "..//js/productos.json";
    const resp = await fetch(URLJSON);
    const data = await resp.json();
    productos = data;
    renderizarProductos();
}


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
    `;
    totalCompra = carrito.reduce((acm, producto) => acm + producto.precio, 0);
    let renderTotal = document.getElementById("totalCompra");
    renderTotal.innerText = "Total a pagar $: " + totalCompra;
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function renderizarCarritoInicial(){
    for(const producto of carrito){
        modalContent.innerHTML += `
        <div class="col">
            <div class="card" style="width: 18rem;">
                <div class="image-wrapper">
                    <img src="${producto.img}">
                </div>
                <div class="card-body" id="comprar">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">$ ${producto.precio}</p>
                    <button id="btn${producto.id}" class="btn btn-primary">Comprar</button>
                    <button id="btn${producto.id}" class="btn btn-primary">Comprar</button>
                </div>
            </div>
        </div>
    `;
    }
    totalCompra = carrito.reduce((acm, producto) => acm + producto.precio, 0);
    let renderTotal = document.getElementById("totalCompra");
    renderTotal.innerText = "Total a pagar $: " + totalCompra;
}

/*
eliminarProducto()
vaciarCarrito()
restarProducto()
sumarProducto()
finalizarCompra()
*/

//agregar boton vaciar carrito
//mejor diseño de carrito
//agregar botones de agregar o  quitar unidades (juntar repetidos)
//local storage

//Busco cambiar el diseño del carriito modal, de cartas a tablas.Ademas, agregar los botones de agregar, quitar y eliminar productos. Debo agregar lo visto en la clase de Storage. Mucho muy importante agregar en la tabla los precios totales y parciales. 
//Estoy tapado de laburo y parciales de la universidad. En la semana lo termino, perdón.
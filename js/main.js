let productos = [];

let totalCompra;

let content = document.getElementById("shopContent");
let modalContent = document.getElementById("carritoContent");
let renderTotal = document.getElementById("totalCompra");
let vaciar = document.getElementById("clearButton");
let terminar = document.getElementById("finish");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

(carrito.length != 0) && renderizarCarritoInicial();
getJSON();

function renderizarProductos() {
    for (const producto of productos) {
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
        document.getElementById(`btn${producto.id}`).addEventListener("click", function () {
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


function agregarAlCarrito(productoAComprar) {
    const repetido = carrito.some((productoRepetido) => productoRepetido.id === productoAComprar.id);
    if (repetido) {
        carrito.map((product) => {
            if (product.id === productoAComprar.id) {
                product.cantidad++;
            }
        })
    } else {
        carrito.push(productoAComprar);
    }
    modalContent.innerHTML += `
    <tr>
        <th scope="row"><img
            src="${productoAComprar.img}" alt="prod" style="width: 4.5rem;"></th>
        <td>${productoAComprar.nombre}</td>
        <td class="text-center">$ ${productoAComprar.precio}</td>
        <td class="text-center">${productoAComprar.cantidad}</td>
        <td class="text-center">${productoAComprar.cantidad * productoAComprar.precio}</td>
        <td><button type="button" class="btn btn-outline-danger" style="width: 2.2rem;">-</button><button
            type="button" class="btn btn-outline-success" style="width: 2.2rem;">+</button></td>
    </tr>
`;

    console.table(carrito);
    //alert("Producto "+productoAComprar.nombre+" agregado al carro!");

    totalCompra = carrito.reduce((acm, producto) => acm + (producto.precio * producto.cantidad), 0);
    renderTotal.innerText = "Total a pagar $: " + totalCompra;
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function renderizarCarritoInicial() {
    for (const producto of carrito) {
        modalContent.innerHTML += `
        <tr>
            <th scope="row"><img
                src="${producto.img}" alt="prod" style="width: 4.5rem;"></th>
            <td>${producto.nombre}</td>
            <td class="text-center">$ ${producto.precio}</td>
            <td class="text-center">${producto.cantidad}</td>
            <td class="text-center">${producto.cantidad * producto.precio}</td>
            <td><button type="button" class="btn btn-outline-danger" style="width: 2.2rem;">-</button><button
                type="button" class="btn btn-outline-success" style="width: 2.2rem;">+</button></td>
        </tr>
    `;
    }
    totalCompra = carrito.reduce((acm, producto) => acm + (producto.precio * producto.cantidad), 0);
    let renderTotal = document.getElementById("totalCompra");
    renderTotal.innerText = "Total a pagar $: " + totalCompra;
}

//BOTON VACIAR CARRITO

vaciar.onclick = () => {
    carrito = [];
    localStorage.removeItem("carrito");
    modalContent.innerHTML = ``;
    renderTotal.innerHTML = ``;
};


//BOTON FINALIZAR COMPRA

terminar.onclick = () => {
    if (carrito.length == 0) {
        //alerta de carrito vacio
    }
    else {
        //vaciar carrito y agregar toastify
    };
}

/*
eliminarProducto()
restarProducto()
sumarProducto()
finalizarCompra()
//agregar validacion a formulario
*/

//agregar boton vaciar carrito
//mejor diseño de carrito
//agregar botones de agregar o  quitar unidades (juntar repetidos)
//local storage

//Busco cambiar el diseño del carriito modal, de cartas a tablas.Ademas, agregar los botones de agregar, quitar y eliminar productos. Debo agregar lo visto en la clase de Storage. Mucho muy importante agregar en la tabla los precios totales y parciales.
//Estoy tapado de laburo y parciales de la universidad. En la semana lo termino, perdón.
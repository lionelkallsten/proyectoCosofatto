//Productos
const productos = [
    {
        id: "1",
        nombre: "Coctelera",
        precio: 8000,
        stock: 10
    },
    {
        id: "2",
        nombre: "Colador",
        precio: 3500,
        stock: 5 
    },
    {
        id: "3",
        nombre: "Jigger",
        precio: 4000,
        stock: 3 
    },
    {
        id: "4",
        nombre: "Vaso Julep",
        precio: 2500,
        stock: 12 
    },
];
let carro = [];

//Solicitar compra

let userSelect = prompt("Buenos días, desea realizar una compra? si o no");

//Validar entrada

while(userSelect != "si" && userSelect != "no"){
    alert("Por favor, ingresar una opción válida");
    userSelect = prompt("Desea realizar una compra? si o no");
}

//Condicional
if (userSelect == "si"){
    alert("Lista de productos a continuación en consola");
    console.table(productos);
    /*
    let productosTodos = productos.map(
    (producto) => producto.nombre + " $" + producto.precio
    );
    alert (productosTodos.join("   "));
    */
}else if(userSelect == "no"){
    alert("Gracias por pasarte, vuelva pronto!");
};

//Agregado de productos
while(userSelect != "no"){
    let producto = prompt("Agrega un producto a tu carrito");
    producto = producto.toLowerCase();
    let precio = 0;

    if(producto == "coctelera" || producto == "colador" || producto == "jigger" || producto == "vaso julep"){
        let unidades = parseInt(prompt("Cuantas unidades desea llevar"))
        switch(producto){
            case "coctelera":
                if(productos.stock[0] > 0 && productos.stock[0] > unidades){
                    precio = productos.precio[0];
                    productos.stock[0] = productos.stock[0] - 1;
                }else{
                    alert("Producto sin stock");
                }
                break;
            case "colador":
                if(productos.stock[1] > 0 && productos.stock[0] > unidades){
                    precio = productos.precio[1];
                    productos.stock[1] = productos.stock[1] - 1;
                }else{
                    alert("Producto sin stock");
                }
                break;
            case "jigger":
                if(productos.stock[2] > 0 && productos.stock[0] > unidades){
                    precio = productos.precio[2];
                    productos.stock[2] = productos.stock[2] - 1;
                }else{
                    alert("Producto sin stock");
                }
                break;
            case "vaso julep":
                if(productos.stock[3] > 0 && productos.stock[0] > unidades){
                    precio = productos.precio[3];
                    productos.stock[3] = productos.stock[3] - 1;
                }else{
                    alert("Producto sin stock");
                }
                break;
            default:
                break;
        }
        carro.push({producto, unidades, precio});
        console.log(carro);
    }else{
        alert ("No comercializamos ese producto");
    }

    userSelect = prompt("Desea seguir comprando?")

    while(userSelect == "no"){
        alert("Gracias por la compra, vuelva pronto");
        carro.forEach((carroFinal) => {
            console.log(`Producto: ${carroFinal.producto}, Unidades: ${carroFinal.unidades}, Subtotal: $${carroFinal.precio* carroFinal.unidades}`);
        });
        break;
    }
}

const total = carro.reduce((acc, el) => acc + el.precio * el.unidades * 1.21, 0);
console.log(`El total a abonar, IVA INCLUIDO, es: $${total}`);

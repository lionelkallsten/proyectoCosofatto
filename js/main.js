//Productos
let productos = [
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
                if(productos[0].stock  > 0 && productos[0].stock >= unidades){
                    precio = productos[0].precio;
                    productos[0].stock = productos[0].stock - unidades;
                }else{
                    alert("Producto sin stock");
                }
                break;
            case "colador":
                if(productos[1].stock > 0 && productos[1].stock >= unidades){
                    precio = productos[1].precio;
                    productos[1].stock = productos[1].stock - unidades;
                }else{
                    alert("Producto sin stock");
                }
                break;
            case "jigger":
                if(productos[2].stock > 0 && productos[2].stock >= unidades){
                    precio = productos[2].precio;
                    productos[2].stock = productos[2].stock - unidades;
                }else{
                    alert("Producto sin stock");
                }
                break;
            case "vaso julep":
                if(productos[3].stock > 0 && productos[3].stock >= unidades){
                    precio = productos[3].precio;
                    productos[3].stock = productos[3].stock - unidades;
                }else{
                    alert("Producto sin stock");
                }
                break;
            default:
                break;
        }
        carro.push({producto, unidades, precio});
        console.table(carro);
    }else{
        alert ("No comercializamos ese producto");
    }

    userSelect = prompt("Desea seguir comprando?")

    while(userSelect == "no"){
        alert("Gracias por la compra, vuelva pronto");
        carro.forEach((carroFinal) => {
            console.table(`Producto: ${carroFinal.producto}, Unidades: ${carroFinal.unidades}, Subtotal: $${carroFinal.precio* carroFinal.unidades}`);
        });
        break;
    }
}
// Mostrar total de carrito

const total = carro.reduce((acc, el) => acc + el.precio * el.unidades * 1.21, 0);
console.table(`El total a abonar, IVA INCLUIDO, es: $${total}`);

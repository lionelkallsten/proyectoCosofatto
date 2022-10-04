//Producots

class Producto{
    constructor(id, nombre, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

const producto1 = new Producto(1, "Coctelera", 8000, 10);
const producto2 = new Producto(2, "Colador", 3500, 5);
const producto3 = new Producto(3, "jigger", 4000, 3);
const producto4 = new Producto(4, "Vaso julep", 2500, 12);

console.log("Productos CosoFatto");
console.log(producto1, producto2, producto3, producto4);

let productoASumar;
let carrito = 0;

do{
    productoASumar = parseInt(prompt("Ingrese id de producto a sumar O Ingrese 0 ´cero´ para salir"));
}while ((productoASumar < 1 || productoASumar > 4) && productoASumar != "0")
console.log(productoASumar);

while(productoASumar != "0"){
    switch (productoASumar){
        case 1:
            if (producto1.stock>0){
                carrito = carrito + producto1.precio;
                producto1.stock = producto1.stock - 1;
                console.log("Quedan " + producto1.stock + " unidades de " + producto1.nombre);
            }else{
                console.log("Producto sin stock");
            }
            break;
        case 2:
            if (producto2.stock>0){
                carrito = carrito + producto2.precio;
                producto2.stock = producto2.stock - 1;
                console.log("Quedan " + producto2.stock + " unidades de " + producto2.nombre);
            }else{
                console.log("Producto sin stock");
            }
            break;
        case 3:
            if (producto3.stock>0){
                carrito = carrito + producto3.precio;
                producto3.stock = producto3.stock - 1;
                console.log("Quedan " + producto3.stock + " unidades de " + producto3.nombre);
            }else{
                console.log("Producto sin stock");
            }
            break;
        case 4:
            if (producto4.stock>0){
                carrito = carrito + producto4.precio;
                producto4.stock = producto4.stock - 1;
                console.log("Quedan " + producto4.stock + " unidades de " + producto4.nombre);
            }else{
                console.log("Producto sin stock");
            }
            break;
    
    }
    console.log("El total del carrito es de: $" + carrito);
    productoASumar = parseInt(prompt("Ingrese id de producto a sumar O Ingrese salir para salir"));
}



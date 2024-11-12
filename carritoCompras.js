class Producto {
    constructor(name, price, cantidad) {
        this.name = name;
        this.price = price;
        this.cantidad = cantidad;
    }
}

class shopingcart {
    constructor() {
        this.productos = [];
    }

    addProducto(producto) {
        const existente = this.productos.find(p => p.name === producto.name);

        if (existente) {
            existente.cantidad += producto.cantidad;
        } else {
            this.productos.push(producto);
        }
    }

    remover(name) {
        const index = this.productos.findIndex(p => p.name === name); //findIndex para obtener el index del elemento

        if (index != -1) {
            this.productos.splice(index, 1); //splice para eliminar del array 
        } else {
            console.log("Producto no encontrado");
        }
    }

    Total() {
        return this.productos.reduce((total, producto) => total + (producto.price * producto.cantidad), 0);
    }

    MostrarLista() {
        this.productos.forEach(producto => {
            console.log(`Producto: ${producto.name}, Precio: $${producto.price}, Cantidad: ${producto.cantidad}`);
        });
    }

}

const cart = new shopingcart();

const apple = new Producto("Fresa", 5000, 3);
const banana = new Producto("guanabana", 2000, 5);
const orange = new Producto("sandia", 9000, 2);

cart.addProducto(apple);
cart.addProducto(banana);
cart.addProducto(orange);

cart.MostrarLista(); // Lista todos los productos en el carrito

console.log("Total del carrito: $", cart.Total()); // Muestra el total

cart.remover("Fresa"); // Remueve del carrito
console.log("Después de remover:");
cart.MostrarLista(); // Lista nuevamente los productos
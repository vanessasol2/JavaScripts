const carrito = [
    {
        nombre: "Lenovo ThinkPad",
        descripcion: "laptop para oficina",
        tipoProducto: "Computador",
        modelo: "VG6",
        precio: {
            minimoVenta: 3000000,
            compra: 10000 
        },
        caracteristicas: {
            dimensiones: {
                alto: 30,
                ancho: "50 cm",
                largo: "30 cm"
            },
            fabricacion: {
                pais: "Taiwan",
                fecha: new Date('2017-05-02')
            }
        },
        obtenerPrecioCompra: function() {
            return this.precio.compra;
        }
    },
    {
        nombre: "iPhone 13",
        descripcion: "Teléfono móvil de alta gama",
        tipoProducto: "Celular",
        modelo: "13 Pro",
        precio: {
            minimoVenta: 1200000,
            compra: 800000
        },
        caracteristicas: {
            dimensiones: {
                alto: 500,
                ancho: "7.06 cm",
                largo: "0.74 cm"
            },
            fabricacion: {
                pais: "China",
                fecha: new Date('2023-09-24')
            }
        },
        obtenerPrecioCompra: function() {
            return this.precio.compra;
        }
    },
    {
        nombre: "Sony WH-1000XM4",
        descripcion: "Audífonos con cancelación de ruido",
        tipoProducto: "Audífonos",
        modelo: "WH-1000XM4",
        precio: {
            minimoVenta: 700000,
            compra: 450000
        },
        caracteristicas: {
            dimensiones: {
                alto: 100,
                ancho: "19.5 cm",
                largo: "5.5 cm"
            },
            fabricacion: {
                pais: "Malasia",
                fecha: new Date('2023-02-15')
            }
        },
        obtenerPrecioCompra: function() {
            return this.precio.compra;
        }
    },
    {
        nombre: "Samsung Galaxy Watch 4",
        descripcion: "Reloj inteligente con monitorización de salud",
        tipoProducto: "Dispositivo portátil",
        modelo: "Galaxy Watch 4",
        precio: {
            minimoVenta: 800000,
            compra: 550000
        },
        caracteristicas: {
            dimensiones: {
                alto: 200,
                ancho: "4.6 cm",
                largo: "1.04 cm"
            },
            fabricacion: {
                pais: "Corea del Sur",
                fecha: new Date('2023-07-10')
            }
        },
        obtenerPrecioCompra: function() {
            return this.precio.compra;
        }
    },
    {
        nombre: "Logitech G Pro X",
        descripcion: "Auriculares gaming con micrófono desmontable",
        tipoProducto: "Audífonos",
        modelo: "G Pro X",
        precio: {
            minimoVenta: 300000,
            compra: 200000
        },
        caracteristicas: {
            dimensiones: {
                alto: 201,
                ancho: "19.4 cm",
                largo: "8.8 cm"
            },
            fabricacion: {
                pais: "China",
                fecha: new Date('2023-04-05')
            }
        },
        obtenerPrecioCompra: function() {
            return this.precio.compra;
        }
    },
    {
        nombre: "Amazon Kindle Paperwhite",
        descripcion: "Lector de libros electrónicos con luz integrada",
        tipoProducto: "Dispositivo electrónico",
        modelo: "Paperwhite",
        precio: {
            minimoVenta: 10000,
            compra: 10000
        },
        caracteristicas: {
            dimensiones: {
                alto: 2003,
                ancho: "11.6 cm",
                largo: "0.8 cm"
            },
            fabricacion: {
                pais: "China",
                fecha: new Date('2023-01-20')
            }
        },
        obtenerPrecioCompra: function() {
            return this.precio.compra;
        }
    }
];

// Calcular el costo total de adquisición del inventario (suma de precios de compra)
let costoTotal = carrito.reduce((total, producto) => {
    return total + producto.precio.compra;
}, 0);

console.log(`-----El costo total de adquisición del inventario es: ${costoTotal}`);

//CHINA
const productosDeChina = carrito.filter(producto => producto.caracteristicas.fabricacion.pais === 'China');

console.log("******Productos fabricados en China:");

for (const producto of productosDeChina) {
    console.log(`Nombre: ${producto.nombre}`);
    console.log(`Descripción: ${producto.descripcion}`);
    console.log(`Modelo: ${producto.modelo}`);
    console.log(`Precio de compra: ${producto.precio.compra}`);
    console.log("---"); 
}

//ALTO
let productosAltos = carrito.filter(producto => {
    return producto.caracteristicas.dimensiones.alto > 200; 
  });
  
console.log(productosAltos)

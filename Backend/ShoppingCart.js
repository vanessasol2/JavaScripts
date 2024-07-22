const carrito =[
    {
        nombre:"----Lenovo",
        descripcion:"laptol para oficiona",
        tipoProducto:"Computador Portatil",
        modelo:"VG2",
        precio:{//objectos son los que se encierran en corchetes
            minimoVenta: 300000,
            compra: 1000000
        },
        caracteristicas:{
            dimensiones:{
                alto:100,
                ancho:"50 cm",
                largo: "30 cm"
            },
            fabricacion:{
                pais:"Taiwan",
                fecha: new Date(`2017-05-03`)
            }
        },
        
        //obtener el mtodo de compra el cual reporte el precio de compra el cual se utiliza en funcion flecha
        ObtnerPrecioCompra: function(){
            return this.precio.compra
        },
        
    },
    {
        nombre:"----Mouse",
        descripcion:"Mouse inalambrico",
        tipoProducto:"Mouse inalambrico",
        modelo:"hp",
        precio:{//objectos son los que se encierran en corchetes
            minimoVenta: 300,
            compra: 200
        },
        caracteristicas:{
            dimensiones:{
                alto:200,
                ancho:"50 cm",
                largo: "30 cm"
            },
            fabricacion:{
                pais:"Colombia",
                fecha: new Date(`2005-02-03`)
            }
        },
    },
    {
        nombre:"----Teclado",
        descripcion:"Teclado inalambrico",
        tipoProducto:"Teclado inalambrico",
        modelo:"hp",
        precio:{//objectos son los que se encierran en corchetes
            minimoVenta: 50000,
            compra: 2000
        },
        caracteristicas:{
            dimensiones:{
                alto:20,
                ancho:"50 cm",
                largo: "30 cm"
            },
            fabricacion:{
                pais:"China",
                fecha: new Date(`2019-03-03`)
            }
        },
    },
    {
        
        nombre:"----Audifonos",
        descripcion:"audifonos con microfono tipo (gamer)",
        tipoProducto:"audifonos",
        modelo:"Gamer2",
        precio:{//objectos son los que se encierran en corchetes
            minimoVenta: 600000,
            compra: 25000
        },
        caracteristicas:{
            dimensiones:{
                alto:201,
                ancho:"50 cm",
                largo: "30 cm"
            },
            fabricacion:{
                pais:"China",
                fecha: new Date(`2016-08-02`)
            }
        },
    },
    {
        nombre:"Luces led",
        descripcion:"luces led para interiores",
        tipoProducto:"Luces led",
        modelo:"VG2",
        precio:{//objectos son los que se encierran en corchetes
            minimoVenta: 4000,
            compra: 200
        },
        caracteristicas:{
            dimensiones:{
                alto:23,
                ancho:"5 cm",
                largo: "3 cm"
            },
            fabricacion:{
                pais:"Estados unidos",
                fecha: new Date(`2017-05-03`)
            }
        },
    }
]
//ejcutar el metodo: ObtenerPrecioCompra:
//console.log(carrito[0].ObtnerPrecioCompra)

//imprimir:
//con el indice cero[0]
/*console.log(carrito[0].nombre);
console.log(carrito[0].precio.compra);//objectos aninados
console.log(carrito[0].precio.minimoVenta);
console.log(carrito[0].caracteristicas.dimensiones);
console.log(carrito[0].caracteristicas.fabricacion);*/


//recorrer el carrito de compras
//METODO ForEach --- acepta funcion normal o como funcion flecha
carrito.forEach((producto) => { //producto: variable y las puedo llamar como quiera 
    if(producto.caracteristicas.fabricacion.pais==="Taiwan")
        console.log(producto.nombre)
})

//metodo de transformacion map (se recorre toda la lista) /mapear un arreglo(array)
/*let precioCompra = carrito.map((producto)=> {
    return producto.precio.compra
})*/

//metodo filter : Recorre el areglo buscando elementos que concuerden 
//con las condicional establecida en el filter
//creando un nuevo arreglo con los objetos que cumplen dicho criterio
let productoTaiwan = carrito.filter((producto) => {
    return producto.caracteristicas.fabricacion.pais === `Taiwan`
})

//Total de los productos (Total del inventario)
let total = 0 //variable iniciada a 0
carrito.forEach((producto) => { 
    //acumular el valor de compra de cada producto 
    //en la varibale total
        total += producto.precio.compra //+= :compra y suma 
})

//utilizando el metodo (reduce)
//reduce a un solo valor el arreglo con vase en una experecion
carrito.reduce((total,producto)=> {
    return total + producto.precio.compra
    //inicalizador 
},
 0 )//inicalizador 


 ///////////////////////////////////////////////////////
 /////////////////////Activida/////////////////////////

 // (suma de precios de compra)
let costoTotal = carrito.reduce((total, producto) => {
    return total + producto.precio.compra;
}, 0);

console.log('------------------------------------------')
console.log(`El total del inventario es: ${costoTotal}`);
console.log('-------------------------------------')


//Productos de china
const productosChina = carrito.filter(producto => producto.caracteristicas.fabricacion.pais === 'China');

console.log("******Productos fabricados en China:");

for (const producto of productosChina) {
    console.log(`Nombre: ${producto.nombre}`);
    console.log(`Descripción: ${producto.descripcion}`);
    console.log(`Modelo: ${producto.modelo}`);
    console.log(`Precio de compra: ${producto.precio.compra}`);
    console.log("-------------------------------------------"); 
}

//Productos altos

let productosAltos = carrito.filter(producto => {
    return producto.caracteristicas.dimensiones.alto >= 200; 
  });
console.log("Productos altos:") 
console.log(productosAltos)




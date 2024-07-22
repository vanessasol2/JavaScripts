//alert(" Hola Socio") //Promp: cuadro de dialogo
//let nombre = prompt("Ingrese su nombre:")
//document.querySelector("div").innerText = nombre
const nombreProducto =  new String("lenovo v4");
console.log(nombreProducto)

const precioProducto = 23;
const precioProductoStr = "23";

console.log(precioProducto);
console.log(precioProductoStr);

console.log(precioProducto === precioProductoStr); //===  Gerarquia de operadores Compara el tipo de dato
//Objecto Producto:
//Objecto Literal:
const producto1 ={
    nombre : "Lenovo ThinPad",
    color: "Red",
    modelo: "IUY234",
    descripcion:"laptop para trabajo liviano",
    precio: 23000.89,
    getModelo: function()//metodo con una funcion dentro de un objecto
    {
        console.log(this.modelo)
    }
}

//imagen
//producto1.imagen = "imagen1.jpg"
//console.log(imagen)

//invocar metodo getModelo:
producto1.getModelo();

// acceder a los atributos del objecto
//console.log(producto1.color);

//sin desestruracion
nombrecito = producto1.nombre
console.log(nombrecito)

//con desestruracion
const{ descripcion,precio }= producto1;//mas efectivo
console.log(descripcion, precio)

/***************************************************/ 
//Otra manera de crear objectos
//object constructor:
const  Producto = function(nombre, color , precio){
    this.nombre = nombre,
    this.color = color,
    this.precio = precio
}
// 2 instancias de productos
const p1 = new Producto("Lapiz HB" , "Azul","5000")
console.log(p1)

//operador spread(esparcir)
const medidas ={
    "peso":"50kg",
    "altura":"1m",
    "largo":"50cm"
}
const nuevoProducto ={ ...producto1,...medidas };//objecto
console.log(nuevoProducto);
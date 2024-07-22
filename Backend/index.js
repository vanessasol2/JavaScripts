
 //escribir mensajesconsole.log("Carrito de compras..")
//Alternativa a la concatenacion
//Permite incrustar un valor dentro de un string
//Comillas
// " " , '' = concatenacion
// `` template String
const nombreProducto = String("lenovo v4")//variable
console.log(`El prodecto es: ${nombreProducto}`)//entre el signo peso y los corchetes se ponde nombre de la variable
const precioProducto = 23;
const precioProductoStr = "23";
//console(typeof precioProducto);//meter cualquier tipo de datos
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
//invocar metodo getModelo:
producto1.getModelo();

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
//definir un arreglo de nombres de producto
//nombre del producto
const nombre =["lapiz HB","Resaltador","Borrador de nata"];

//agregar elemento al arreglo
nombre[3] = "resaltador"

//agregar elemento al final 
nombre.push("corrector")

//agregar elemento al principio:
nombre.unshift("Borrador de miga de pan")

console.table(nombre)

//Imprimir
console.log([1])

//eliminar elementos de un arreglo
delete nombre[3];

//elimanr elemento del final:
nombre.pop();
console.table(nombre);

//eleimar el primer elemento del principio
nombre.shift()
console.table(nombre);

//Recorrer un arreglo 
for(let i=0 ; i<nombre.length;i+=1){
    console.log(nombre[i]) //recorre un arreglo por separado
}


//operador Spread con arreglos:
const nombre2 = [
    "Traspotador",
    "regla"
]
let productos =[...nombre, ...nombre2]
const elemento ="compas"
let productos1=[...productos,elemento]
const transportador = "transportador"
const prodectos1 =[...productos1,transportador]

console.table(productos)


//Sintaxis:arrow(fecha)para escribir funciones
//Reglas:
    //1. si el bloque de codigo funciona flecha solo tiene una linea no hace falta poner las corchetes
    //2. si la funcion flecha solo tiene un solo parametro se puede omitir el parentesis de los parametros 
    //3.si el bloque de codigo funcion flecha solo tiene una linea,y esta linea debe 
    //4.
const saludo = (nombre) => {
    return `Hola ${nombre} desde una funcion flecha`
} 
console.log(saludo("Vanessa"))//invocaion

//invocar a la funcion para que haga algo
saludo("Vanessa");
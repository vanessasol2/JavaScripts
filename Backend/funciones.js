//ejemplo
//Sintaxis:Declaracion de funciones
function saludo(nombre){
    console.log(`Hola ${ nombre} como estas`)
}
//invocar, llamar,ejecutar saludo
saludo("Vanessa");// argumento: Vanesa que va a parar a nombre


//Sintaxis:Expresion funcion
//se le agrega a una constante
const saludo2 = function(nombre="vanessa2"){//parametro por defecto
    console.log(`Hola ${nombre} como esta mi so`);
}
saludo2();


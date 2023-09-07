/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string;

}
const saludo = devolverString("Hello");
   console.log(saludo);

var x = 8;
var y = 2;

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   return x + y;
}
const adicion = suma(x, y);
   console.log(adicion);


function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   return x - y;
}
const sustraccion = resta(x, y);
console.log(sustraccion);


function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   return x / y;
}
const division = divide(x, y);
console.log(division);

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   return x * y;
}
const multiplicación = multiplica(x, y);
console.log(multiplicación);

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   return x % y;
}
const resto = obtenerResto(84, 5);
console.log(resto);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
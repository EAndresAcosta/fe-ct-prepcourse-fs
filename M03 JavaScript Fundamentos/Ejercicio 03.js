/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   if (x === y) {
      return true;
   } else {
      return false;
   }      
}   
const igualdad = sonIguales(7, '7');
console.log(igualdad);  

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   if (str1.length === str2.length) {
      return true;
   } else {
      return false;
   }
}
const nombre = tienenMismaLongitud("Andres", "Andrew");
console.log(nombre);

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   if (num < 90) {
      return true;
   } else {
      return false;
   }
}
const digito = menosQueNoventa(80);
console.log(digito);

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   if (num > 50){
      return true;
   } else {
      return false;
   }
}
const edad = mayorQueCincuenta(50);
console.log(edad);

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   if (num % 2 === 0) {
      return true;
   } else {
      return false;
   }
}
const similar = esPar(3);
console.log(similar);

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   if (num % 2 !== 0) {
      return true;
   } else {
      return false;
   }
}
const diferente = esImpar(3);
console.log(diferente);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
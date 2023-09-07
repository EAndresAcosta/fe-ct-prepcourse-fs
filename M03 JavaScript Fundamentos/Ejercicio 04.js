/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
   return Math.pow(num,2);
}
const porDos = elevarAlCuadrado(4)
console.log(porDos);

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
   return Math.pow(num, 3);
}
const porTres = elevarAlCubo(3);
console.log(porTres);

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
   return Math.pow(num, exponent);
}
const numeroExponente = elevar(2, 6);
console.log(numeroExponente);

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   return Math.round(num);
}
const acercar = redondearNumero(8.50);
console.log(acercar);

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   return Math.ceil(num);
}
const haciaArriba = redondearHaciaArriba(9.1);
console.log(haciaArriba);

function numeroRandom(num) {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   return Math.random(num);
}
const aleatorio = numeroRandom(0, 1);
console.log(aleatorio);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
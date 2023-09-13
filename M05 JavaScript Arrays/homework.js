/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

var arreglo = [1, 2, 3, 94];

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}
const primerE = devolverPrimerElemento(arreglo);
//console.log(primerE);

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length-1];
}
const retornar = devolverUltimoElemento(arreglo);
//console.log(retornar);

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length
}
const lon = obtenerLargoDelArray(arreglo);
//console.log(lon);

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   const resultado = array.map((elem) => {
      return elem + 1;
   });
   return resultado;
}
const summa = incrementarPorUno(arreglo);
//console.log(summa);

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}
var final = [10, 20, 30]
agregarItemAlFinalDelArray(final, 40);
//console.log(final);

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}
var inicio = [ 70, 80, 90]
agregarItemAlComienzoDelArray(inicio, 60);
//console.log(inicio);

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   const frase = palabras.join(' ');
   return frase;
}
const arregloPalabra = ['hola', 'mundo!'];
const concat = dePalabrasAFrase(arregloPalabra);
//console.log(concat);

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento);
}
const contenido = arrayContiene(arreglo, 94);
//console.log(contenido);

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let suma = 0;

   for (let i = 0; i < arrayOfNums.length; i++) {
      suma += arrayOfNums[i];
   }
   return suma;
}
const digitos = [10, 11, 12, 14, 15];
const resultadoSuma = agregarNumeros(digitos);
//console.log(resultadoSuma);

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let sumatoria = 0;

   for (let i = 0; i < resultadosTest.length; i++) {
      sumatoria += resultadosTest[i];
   }
   let prom = sumatoria / resultadosTest.length;
   return prom;
}
const resul = promedioResultadosTest(digitos);
//console.log(resul);

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   return Math.max(...arrayOfNums);
}
const grande = numeroMasGrande(digitos);
//console.log(grande);

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length === 0) {
      return 0;
   }

   let producto = 1;

   for ( let i = 0; i < arguments.length; i++) {
      producto *= arguments[i];
   }
   return producto;
}
const multiplica = multiplicarArgumentos(2, 4, 9);
//console.log(multiplica);

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let elementos = 0;
   for (let i = 0; i < array.length; i++) {
      if (array[i] > 18) {
         elementos++;
      }
   }
   return elementos;
}
const miArreglo = [10, 20, 30, 15, 25];
const retorn = cuentoElementos(miArreglo);
//console.log(retorn);

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if ( numeroDeDia === 2 || numeroDeDia === 3 || numeroDeDia === 4 || numeroDeDia === 5 || numeroDeDia === 6) {
      return 'Es dia laboral'
   } else if (numeroDeDia === 1|| numeroDeDia === 7) {
      return 'Es fin de semana'
   } else {
      return 'ERROR'
   }
}
const dia = diaDeLaSemana(7);
//console.log(dia);

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   if (Number.isInteger(num) && num.toString().startsWith('9')) {
      return true;
   } else {
      return false;
   }
}
const inicia = empiezaConNueve(9);
//console.log(inicia);

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   if (array.length <= 1) {
      return true;
   }  

   for (let i = 1; i < array.length; i++){
   if (array[i] !== array[0]) {
      return false;
      }   
   }
   return true;
}
const igualdad = todosIguales([10, 10]);
//console.log(igualdad);

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   let año = [];

   for (let i = 0; i < array.length; i++) {
      if (array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre') {
         año.push(array[i]);
      }
   }
   if ( año.length === 3) {
      return año;
   } else {
      return 'No se encontraron los meses pedidos';
   }
   
}
var months = ['Junio', 'Enero', 'Septiembre', 'Noviembre', 'Marzo'];
const mes = mesesDelAño(months);
//console.log(mes);

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let seis = [];
   let i = 0;

   while (i <= 10) {
      seis.push(i * 6);
      i++;
   }
   return seis;
}
const multi = tablaDelSeis();
//console.log(multi);

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let mayor = [];

   for (let i = 0; i < array.length; i++){
      if (array[i] > 100) {
         mayor.push(array[i]);
      }
   }
   return mayor;
}
const cien = mayorACien([2, 15, 101, 150, 120, 100]);
//console.log(cien);

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let numerica = [];

   for (let i = 0; i < 10; i++) {
      num += 2;
      numerica.push(num);
      
      if (num === i) {
         break;
      } 
   }
   return numerica.length < 10 ? 'Se interrumpió la ejecución' : numerica;
}
const aunmento = breakStatement(-4);
//console.log(aunmento);

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let cont = [];
   let i = 0;

   while (i < 10) {      
      i++;
      if (i === 5) {
         continue;
      }
      num += 2;
      cont.push(num);
   }
   return cont;
}
const continua = continueStatement(2);
//console.log(continua);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};

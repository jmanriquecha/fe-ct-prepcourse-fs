/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let array = [];
   for (const key in objeto) {
      let myArray = [];
      myArray.push(key, objeto[key]);
      array.push(myArray);
   }
   return array;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   stringArray = string.split('').sort();
   let obj = {};
   for (let i = 0; i < stringArray.length; i++) {
      const element = stringArray[i];
      if (obj[element]) {
         obj[element]++;
      } else {
         obj[element] = 1;
      }
   }
   return obj;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let arrayString = string.split('');
   let inicio = '';
   let fin = '';
   for (let i = 0; i < arrayString.length; i++) {
      let letra = arrayString[i];
      if (letra === letra.toUpperCase()) {
         inicio += letra;
      } else {
         fin += letra;
      }
   }
   return `${inicio}${fin}`;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   let stringArray = frase.split(' ');
   let palabras = '';
   for (let i = 0; i < stringArray.length; i++) {
      const elemento = stringArray[i];
      palabras += elemento.split('').reverse().join('') + ' ';
   }
   return palabras.trim();
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let result;
   let numeroReverso = numero.toString().split('').reverse().join('');

   result = (numero === Number(numeroReverso))
      ? 'Es capicua'
      : 'No es capicua';

   return result;

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let stringArray = string.split('');
   let deleteLetra = stringArray.filter(function (letra) {
      return ((letra.toLowerCase() !== 'a') && (letra.toLowerCase() !== 'b') && (letra.toLowerCase() !== 'c'));
   });

   return deleteLetra.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   let nuevoArray = arrayOfStrings.sort(function (a, b) {
      return a.length - b.length;
   });
   return nuevoArray;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let nuevoArray = [];
   for (let i = 0; i < array1.length; i++) {
      const element1 = array1[i];
      for (let j = 0; j < array2.length; j++) {
         const element2 = array2[j];
         if (element1 === element2) {
            nuevoArray.push(element1);
         }
      }
   }
   return nuevoArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

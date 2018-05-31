Mejor, imposible. Ahora que ya vimos cómo usar el `if`, es momento de un pequeño secreto: si usás adecuadamente las expresiones booleanas, ¡no es necesario utilizar esta estructura de control! Genial ¿no?, pero… no se lo digas a nadie 🤓

¿Cómo es ésto? Supongamos que queremos definir la función `esMayorDeEdad`, la cual nos diga si alguien tiene 18 años de edad o más. Quizá, nuestro primer acercamiento sería es el siguiente:

```javascript 
function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}
```

Sin embargo, si lo miramos con más detalle, este `if` y `else` son totalmente innecesarios, pues la expresión `edad >= 18` ya es en sí, una expresión booleana, pues si pensamos en `edad` como un número, lo que estamos haciendo es preguntar si ese número es mayor o igual a 18. Y esa pregunta solo tiene dos posibles respuestas, ¿intuyes cuales son? Exacto, `true` ó `false`. Por lo tanto podríamos hacer que nuestro código fuese más sencillo haciendo esto:

```javascript
function esMayorDeEdad(edad) {
  return edad >= 18;
}
```

Maravilloso, ¿no?  por eso ¡JavaScript es lo más!.
 
Ahora bien, ¿qué pasaría si quisiéramos tener más condiciones a ser evaluadas queriendo que se cumplan todas?. Lo único que necesitaríamos, es usar el operador `&&` (que se lee como 'and' o en castellano 'y'). Veamos un ejemplo:

```javascript
function estaEntre(numero, base, limite) {
  return numero > base && numero < limite;
}
```

La función anterior nos retornará `true` si `numero` es mayor a `base` y a su vez menor que `limite`. De lo contrario, si dichas condiciones no se cumplen, nos retornará `false`.

Genial ¿no te parece?, pero ¿qué pasa si quisiéramos que una función retornara `true`  si se cumple solo alguna de las condiciones?. Para ello, podemos usar el operador `||` (que se lee como 'or', en castellano 'o'). Veámoslo:

```javascript
function esMayorOEsMenor(numero1, numero2, numero3) {
  return numero2 > numero1 || numero2 < numero3;
}
```

En este escenario, la función `esMayoOEsMenor` nos retornará `true` si `numero2` es mayor que `numero1` o si `numero2` es menor que `numero3`. Con que alguna de las condiciones sea verdadera, retornará `true`. Lógicamente, si ninguna de las dos condiciones es verdadera, entonces la función nos retornará `false`. Súper claro, ¿no es así?

Otro escenario posible, es quizá aquel en donde queramos preguntar si algo es distinto de otra cosa. ¿Te acordás del operador `!`? A éste se lo denomina negación o not (en castellano sería 'no'). Veámoslo en acción:

```javascript
function esDiaLaboral(diaDeLaSemana) {
  return diaDeLaSemana != 'Sábado' && diaDeLaSemana != 'Domingo';
}
```

Como lo podés ver, la función `esDiaLaboral` recibe por parámetro un día (string) y retornará `true` si `diaDeLaSemana` no es Domingo ni tampoco Sábado. En caso contrario, si el día es Domingo o Sábado, retornará `false`.

Perfecto. Ahora te toca a vos. Demostrá que lo anterior ha quedado completamente claro. Para ello ayudanos a resolver lo siguiente:

Mariana, una gran amiga de la casa, nos dice que para ella un número es de la suerte si:

1. es positivo, y a su vez
2. es múltiplo de 2 o de 3, y a su vez,
3. no es el 15

> Escribí la función `esNumeroDeLaSuerte` la cual recibiendo un número, le diga a Mariana si es un número de la suerte. Recuerda que el número debe cumplir con las tres condiciones mencionadas.
Tu reto adicional será: NO usar el `if`.



Ninguna introducción a JavaScript estaría completa sin mostrar la estructura de control condicional, conocida como `if`.

El `if` nos permite ejecutar un código según una condición. Un ejemplo de la vida real podría ser: **¡Si el dia esta soleado, vamos a la plaza!**. Como podés ver, en el ejemplo anterior estamos **condicionando** nuestra salida a la plaza si y solo si esta soleado.

Ahora bien, ¿cómo podemos llevar esto a código? Primero deberemos entender que la estructura del `if` se divide en 3 partes:

1. La palabra reservada `if`.
2. La condición que queremos evaluar. La cual se encierra entre paréntesis.
3. El bloque de código que se ejecuta en el caso que la condición evaluada se cumpla, es decir, sea `true` (verdadera).

Veamos un ejemplo:

```javascript
var numero = 43;

if (numero > 0) {
    console.log('El número es positivo');
}
```

Ahora ¿Qué podríamos hacer para codificar nuestra salida a la plaza?

Veámoslo:

```javascript
if (diaSoleado == true) {
    console.log('¡Qué bien¡ Salgamos a la plaza');
}
```

En el ejemplo anterior, `diaSoleado` sería una variable que almacena un valor booleano, y siempre y cuando ese valor sea exactamente igual a `true`, vamos a ejecutar el bloque de código que se encuentra dentro de las `{}`, en ese caso, el `console.log`. Va tomando más sentido ¿no?

Muy bien, pero ¿qué pasa si queremos hacer algo en caso de el día no esté soleado?. Es ahí en donde entra el `else`, la contraparte del `if`. Se vería así:

```javascript
if (diaSoleado == true) {
    console.log('¡Qué bien¡ Salgamos a la plaza');
} else {
    console.log('¡Uff que mal! mejor nos quedamos codeando');
}
```

El condicional `else` nos permite ejecutar un bloque de código, en el caso que la condición del `if` no se cumpla, es decir, no sea verdadera. A diferencia del `if`, la estructura del `else` solo tiene 2 partes:

1. La palabra reservada `else`.
2. El bloque de código que se ejecuta en el caso que la condición del `if` no se cumpla.

Entonces, ahora que sabemos cómo funcionan el `if` y `else`, veamos un ejemplo de una función que nos retorna `true` o `false` si un número es par:

```javascript
function esPar(unNumero) {
   if (unNumero % 2 == 0) {
     return true;
   } else {
     return false;
   }
}
```javascript

En el ejemplo anterior, la función se encargará de recibir un número por parámetro y utilizando `if` y `else`, retorna `true` o `false` si el mismo es un número par.

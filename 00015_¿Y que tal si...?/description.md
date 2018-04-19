Ninguna introducción al lenguaje JavaScript estaría completa sin mostrar al menos una estructura de control archiconocida: la estructura condicional, también conocida como `if`.

El `if` nos permite hacer una cosa según una condición. Por ejemplo:

```javascript
   if (unNumero >= 0) {
     return unNumero;
   }
```

Como vemos en el ejemplo anterior, la estructura del `if` se divide en 3 partes:

1. La palabra reservada `if`.
2. La condición, la cual se encierra entre paréntesis.
3. Un bloque de código que se ejecuta en el caso de que la condición se cumpla, es decir, sea `true`.


Ahora, ¿Qué pasa si queremos hacer algo en caso de que el número **no** sea mayor o igual a 0?
Ahí es donde entra `else`, la contraparte del `if`:

```javascript
  if (unNumero >= 0) {
    return unNumero;
  } else {
    return otroNumero;
  }
```
El condicional `else` nos permite hacer algo en caso de que la condición del `if` **no** sea correcta.
A diferencia del `if`, la estructura del `else` se divide en 2 partes:

1. La palabra reservada `else`.
2. Un bloque de código que se ejecuta en el caso de que la condición del `if` **no** se cumpla.


Entonces, ahora que sabemos cómo funcionan `if` y `else`, veamos un ejemplo de una función que nos devuelve el Valor Absoluto de un número:

```javascript
//Equivalente a Math.abs
function valorAbsoluto(unNumero) {
   if (unNumero >= 0) {
     return unNumero;
   } else {
     return -unNumero;
   }
}
```

La función anterior, se encargaría de recibir un número por parámetro y utilizando `if` y `else`, devuelve el número en forma absoluta (sin signo).
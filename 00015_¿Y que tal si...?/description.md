Ninguna introducción al lenguaje JavaScript estaría completa sin mostrar al menos una estructura de control archiconocida: la estructura condicional, también conocida como `if`.

El `if` nos permite hacer una cosa u otra según una condición. Por ejemplo:

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

> Veamos si se entiende: escribí una función `maximo`, que devuelva el máximo entre dos numeros. Por ejemplo, el máximo entre 4 y 5 es 5, y el máximo entre 10 y 4, es 10.

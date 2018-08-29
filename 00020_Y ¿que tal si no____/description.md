En el ejercicio anterior analizamos el siguiente código:


```javascript
if (diaSoleado == true) {
    console.log('¡Qué bien¡ Salgamos a la plaza');
}
```

Y comentamos que siempre y cuando el valor de **diaSoleado** sea exactamente igual a `true`, vamos a ejecutar el bloque de código que se encuentra dentro de las `{}`.

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

Entonces, ahora que sabemos cómo funcionan el `if` y `else`, veamos un ejemplo de una función que nos retorna `true` si un número es mayor a 5, o `false` en caso contrario:

```javascript
function esMayor(unNumero) {
   if (unNumero > 5) {
     return true;
   } else {
     return false;
   }
}
```

En el ejemplo anterior, la función se encargará de recibir un número por parámetro y utilizando `if` y `else`, retorna `true` o `false` si el mismo es mayor a 5.

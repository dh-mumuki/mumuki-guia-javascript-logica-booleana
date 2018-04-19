Ahora que ya vimos cómo usar el `if`, es momento de un pequeño recordatorio:
si usás adecuadamente las expresiones booleanas, ¡no es necesario utilizar esta estructura de control!

Supongamos que queremos desarrollar una función `esMayorDeEdad`, que nos diga si alguien tiene
18 años o más. Una tentación es escribir lo siguiente:

```javascript
function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}
```

Sin embargo, **este `if` es totalmente innecesario**, dado que la expresión `edad >= 18` ya es booleana:

```javascript
function esMayorDeEdad(edad) {
  return edad >= 18;
}
```

Mucho más simple, ¿no? :wink:

> Jorge dice que para él un número es de la suerte si
>
> * es positivo, y
> * es múltiplo de 2 o de 3, y
> * no es el 15
>
> Escribí la función `esNumeroDeLaSuerte` que dado un número diga si cumple la lógica anterior.
>
> **No** usar `if`.

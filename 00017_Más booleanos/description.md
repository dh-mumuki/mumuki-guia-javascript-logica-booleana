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

Ahora, si nosotros quisieramos tener más condiciones en un return y se cumplan **todas**, lo único que necesitaríamos hacer es usar el operador **and** (que se escribe && ). Por ejemplo:

```javascript
function entre(base, numero, limite) {
  return numero > base && numero < limite
}
```
La función anterior nos devuelve **true** si `numero` es mayor a `base` y menor a `limite`.

En cambio, si quisieramos que con que se cumpla una sola condición, ya alcance, usamos el operador **or** (que se escribe || ). Por ejemplo:

```javascript
function mayorOMenor(numero1, numero2, numero3) {
  return numero2 > numero1 || numero2 < numero3
}
```
La función anterior nos devuelve **true** si `numero2` es mayor a `numero1` **o** `numero2` es menor a `numero3`.

> Jorge dice que para él un número es de la suerte si
>
> * es positivo, y
> * es múltiplo de 2 o de 3, y
> * no es el 15
>
> Escribí la función `esNumeroDeLaSuerte` que dado un número diga si cumple la lógica anterior.
>
> **No** usar `if`.

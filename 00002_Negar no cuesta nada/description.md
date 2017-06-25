No parece una idea muy interesante pero puede ser útil para reutilizar la lógica de una función que ya tenemos definida.

Por ejemplo, si contamos con una función `esPar`, basta con negarla para saber si un número es impar.
 
```javascript
function esImpar(numero) {
  return !esPar(numero);
}
```

> ¡Ahora te toca a vos! Definí `esMayorDeEdad` y luego `esMenorDeEdad` a partir de ella.
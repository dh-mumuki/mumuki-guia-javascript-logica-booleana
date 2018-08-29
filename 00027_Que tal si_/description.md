Ninguna introducción a JavaScript estaría completa sin mostrar la estructura de control condicional, conocida como `if`.

El `if` nos permite ejecutar un código según una condición.

Un ejemplo de la vida real podría ser:
**¡Si el dia esta soleado, vamos a la plaza!**. Como podés ver, en el ejemplo anterior estamos **condicionando** nuestra salida a la plaza si y solo si esta soleado.

Ahora bien, ¿cómo podemos llevar esto a código? Primero deberemos entender que la estructura del `if` se divide en 3 partes:

1. La palabra reservada `if`.
2. La condición que queremos evaluar, la cual se encierra entre paréntesis **()**.
3. El bloque de código que se ejecuta en el caso que la condición evaluada se cumpla (es decir, sea `true` -verdadera-), el cual se encierra entre llaves **{}**.

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

Hagamos una pequeña practica para ir asentando el concepto. 

> Declara la variable `diaDeSemana` y asignale el valor `"domingo"`. Luego implementa un condicional usando el `if` que lo compare la igualdad de `diaDeSemana` con el dia `"domingo"`, y si es verdadero que imprima por pantalla `"Hoy se juega al futbol!!!"`.
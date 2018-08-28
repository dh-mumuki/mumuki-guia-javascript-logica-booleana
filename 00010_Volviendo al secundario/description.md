Quizá no lo recuerdes bien, pero cuando pasamos por la secundaría aprendimos que cuando una expresión matemática tiene varios operadores, las multiplicaciones y divisiones se efectuarán antes que las sumas y las restas se efectuarán después de las sumas, a esto se le llama **precedencia**. Veamos un ejemplo simple:

```javascript
5 * 3 + 8 / 4 - 3 = 14
```

Para que quede bien claro, lo que acaba de ocurrir es lo siguiente:

```javascript
((5 * 3) + (8 / 4)) - 3 = 14
```

Lo primero que sucede es la multiplicación y la división y a su vez la suma de estos dos resultados. Acto seguido la resta y posterior resultado.

```javascript
(15 + 2) - 3 = 14
```

Ahora bien, en JavaScript, al igual que en matemática, cuando usamos operadores lógicos, las expresiones se evalúan en un orden determinado, nuevamente, la **precedencia**.

¿Cuál es ese orden? ¡Hagamos la prueba! Veamos la siguiente función:
 
```javascript
function pagaConTarjeta(seCobraInteres, cuotasTarjeta, efectivoDisponible) {
  return !seCobraInteres && cuotasTarjeta >= 3 || efectivoDisponible < 100;
}
```

> Probá en la consola los siguientes ejemplos y analiza su resultado:

>* `ム pagaConTarjeta(true, 6, 320)`
>* `ム pagaConTarjeta(false, 8, 80)`
>* `ム pagaConTarjeta(true, 2, 215)`
>* `ム pagaConTarjeta(true, 1, 32)`
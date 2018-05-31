Como ya lo vimos en ejercicios anteriores, un operador con el que ya te encontraste, es la conjunción lógica `&&` (también llamada 'and' o en castellano 'y'), que sólo retorna verdadero cuando las dos expresiones que evalúa son verdaderas.

Así mismo, ya sabemos que podemos unir varias expresiones a evaluar mediante este operador y si alguna de ellas no es verdadera (`false`) el resultado final será falso.

Por ejemplo, si analizamos la siguiente función:

```javascript
function esCantanteExitoso(cdsEditados, recitalesRealizados, graboAlgunDVD) {
  return cdsEditados >= 10 && recitalesRealizados >= 20 && graboAlgunDVD;
}
```

Nos podemos dar cuenta que basta con que un cantante no haya grabado un DVD para no ser considerado exitoso 😞, incluso aunque haya editado 10 o más CDs y dado 20 o más recitales.

Como siempre, ahora es tu turno. 

> Definí la función `filosofoHipster` que tome por parámetro: la profesión de una persona (string), su nacionalidad (string) y la cantidad de kilómetros que camina por día (number). Y que evalúe con estos datos, si una persona es o no (`true/false`) un Filósofo Hipster. Tené en cuenta que un Filósofo Hipster es alguien proveniente de Argentina, de profesión Músico y a quien le gusta caminar más de 2 kilómetros por día. 

```javascript
Ejemplo:
filosofoHipster('Músico', 'Argentina', 5) // true
filosofoHipster('Futbolista', 'Brasil', 12) // false
filosofoHipster('Músico', 'Argentina', 1) // false
```


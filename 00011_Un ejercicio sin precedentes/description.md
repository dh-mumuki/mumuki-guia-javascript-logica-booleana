Como lo viste en el ejercicio anterior, la operación con mayor precedencia es la negación !, seguida de la conjunción `&&` y luego disyunción `||` pero ¿qué pasa si quiero alterar el orden en que se resuelven dichas operaciones?

Exacto, tal como lo dijimos al principio del ejercicio anterior, al igual que en matemática, podemos usar los paréntesis para agrupar las operaciones que queremos que se realicen primero.

Es tu turno ahora:

> Escribí la función `puedeJubilarse` que recibe por parámetro la edad, el sexo y además, los años de aportes jubilatorios que posee una persona, ejemplo:

> ```javascript
> ム puedeJubilarse(62, "F", 34)
> true
> ```

> Tené en cuenta que el mínimo de edad para realizar el trámite para las mujeres es de 60 años, mientras que para los hombres es 65. En ambos casos, se deben contar con al menos 30 años de aportes jubilatorios.

Siguiendo con los planteamientos filosóficos y analizando la siguiente tabla, podemos concluir que en la lógica booleana, se puede definir el comportamiento de una expresión mediante una tabla de la verdad. En donde siendo A y B expresiones que evalúan `true` o `false` y usando el símbolo ^ (que representa la conjunción de las mismas), podemos determinar si su unión nos arroja un Verdadero o Falso. 

<table class="table table-striped table-bordered table-condensed text-center">
  <tr>
    <th class ="text-center" style="width: 75px">A</th>
    <th class ="text-center" style="width: 75px">B</th>
    <th class ="text-center" style="width: 100px">A ^ B</th>
  </tr>
  <tr>
    <td>V</td>
    <td>V</td>
    <td>V</td>
  </tr>
  <tr>
    <td>V</td>
    <td>F</td>
    <td>F</td>
  </tr>
  <tr>
    <td>F</td>
    <td>V</td>
    <td>F</td>
  </tr>
  <tr>
    <td>F</td>
    <td>F</td>
    <td>F</td>
  </tr>
</table>

En el mundo de la lógica estas expresiones se llaman proposiciones. Pero… ¿qué cosas pueden ser una proposición?
Sólo hace falta que porten un valor de verdad, es decir, cualquier expresión booleana puede ser una proposición.

¿Nos creés? Probá en la consola tu función `filosofoHipster` con los siguientes valores y comprobá si se comporta como en la tabla:

```javascript 
filosofoHipster('Músico', 'Argentina', 5) // true
filosofoHipster('Futbolista', 'Brasil', 12) // false
filosofoHipster('Músico', 'Argentina', 1) // false
filosofoHipster('Docente', 'Canadá', 12) // false
```

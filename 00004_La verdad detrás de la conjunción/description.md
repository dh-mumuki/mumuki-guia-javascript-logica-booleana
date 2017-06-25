En la lógica booleana, se puede definir el comportamiento de un operador con una _tabla de verdad_ donde **A** y **B** son las expresiones o valores de verdad a ser operados y el símbolo **^** representa la conjunción.

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

En el mundo de la lógica estas expresiones se llaman _proposiciones_. Pero… ¿qué cosas pueden ser un proposición? :thought_balloon: Solo hace falta que porten un valor de verdad, es decir, cualquier expresión booleana puede ser una proposición.

> ¿Nos creés? Probá en la consola tu función `esPeripatetico` con los siguientes valores y comprobá si se comporta como en la tabla:
> 
>* `ム esPeripatetico("filosofo", "griego", 5)`
>* `ム esPeripatetico("atleta", "argentino", 10)`
>* `ム esPeripatetico("filosofo", "argentino", 3)`
>* `ム esPeripatetico("docente", "canadiense", 1)`


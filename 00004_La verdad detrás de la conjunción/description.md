En la lógica booleana, se puede definir el comportamiento de un operador con una tabla de verdad

<table class="table table-striped table-bordered text-center">
  <tr>
    <th class ="text-center">A</th>
    <th class ="text-center">B</th>
    <th class ="text-center">A ^ B</th>
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

donde **A** y **B** son las expresiones o valores de verdad a ser operados y el símbolo **^** representa la conjunción.

> ¿Nos creés? Probá en la consola tu función `esPeripatetico` con los siguientes valores y comprobá si se comporta como en la tabla:
> 
>* `ム esPeripatetico("filosofo", "griego", 5)`
>* `ム esPeripatetico("atleta", "argentino", 10)`
>* `ム esPeripatetico("filosofo", "argentino", 3)`
>* `ム esPeripatetico("docente", "canadiense", 1)`


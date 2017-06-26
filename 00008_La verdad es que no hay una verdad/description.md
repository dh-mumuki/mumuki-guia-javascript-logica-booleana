Ahora pensemos cómo sería la tabla de verdad que representa el comportamiento de la función `sonMediosHermanos`.
 
Las expresiones a ser evaluadas serán `tienenLaMismaMadre` y `tienenElMismoPadre`. El valor de verdad final resultará de operarlas mediante `sonMediosHermanos`, por lo que la tabla quedaría así:

<table class="table table-striped table-bordered table-condensed text-center">
  <tr>
    <th class ="text-center" style="padding: 5px 10px">tienen la misma madre</th>
    <th class ="text-center" style="padding: 5px 10px">tienen el mismo padre</th>
    <th class ="text-center" style="padding: 5px 10px">son medios hermanos</th>
  </tr>
  <tr>
    <td>true</td>
    <td>true</td>
    <td>false</td>
  </tr>
  <tr>
    <td>true</td>
    <td>false</td>
    <td>true</td>
  </tr>
  <tr>
    <td>false</td>
    <td>true</td>
    <td>true</td>
  </tr>
  <tr>
    <td>false</td>
    <td>false</td>
    <td>false</td>
  </tr>
</table>

El valor de verdad que portarán las proposiciones dependerá de qué dos personas estén evaluando.
 
> Probá tu función `sonMediosHermanos` con los siguientes valores y comprobá si se comporta como la tabla:
 
>* `ム sonMediosHermanos(arcadio, aurelianoJose)`
>* `ム sonMediosHermanos(aurelianoSegundo, remedios)`
>* `ム sonMediosHermanos(aurelianoJose, remedios)`

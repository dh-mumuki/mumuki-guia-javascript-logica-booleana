Ahora pensemos cómo sería la tabla de verdad que representa el comportamiento de la función `sonMediosHermanos`.
 
Las proposiciones serán `tienenLaMismaMadre` y `tienenElMismoPadre`, y los valores de verdad que porten dependerán de qué dos personas estén evaluando. El booleano final resultará de operarlas mediante `sonMediosHermanos`, por lo que la tabla quedaría así:

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

> Probá tu función `sonMediosHermanos` con los siguientes valores y comprobá si se comporta como la tabla:
 
>* `ム sonMediosHermanos(arcadio, aurelianoJose)`
>* `ム sonMediosHermanos(aurelianoSegundo, remedios)`
>* `ム sonMediosHermanos(aurelianoJose, remedios)`

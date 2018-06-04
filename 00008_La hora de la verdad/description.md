Ahora pensemos cómo sería la tabla de verdad que representa el comportamiento de la función que acabás de hacer.
 
Las proposiciones serán `tienenLaMismaMadre` y `tienenElMismoPadre`, pues las mismas portan un valor booleano (`true/false`) dependiendo de cuáles personas se estén evaluando.

Y el valor booleano final resultará de operar las mismas mediante la función `sonMedioHermanos`:

<table class="table table-striped table-bordered table-condensed text-center">
  <tr>
    <th class ="text-center" style="padding: 5px 8px">tienen la misma madre</th>
    <th class ="text-center" style="padding: 5px 8px">tienen el mismo padre</th>
    <th class ="text-center" style="padding: 5px 8px">son medios hermanos</th>
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

Ya hemos llegado lo suficientemente lejos como para entender que las funciones `tienenLaMismaMadre` y `tienenElMismoPadre` son proposiciones genéricas de tipo **A** y **B**. Además,  si representamos la operación que realiza `sonMedioHermanos` con el símbolo **⊻** lo que obtenemos es... ¡una nueva tabla de la verdad!

<table class="table table-striped table-bordered table-condensed text-center">
  <tr>
    <th class ="text-center" style="width: 75px">A</th>
    <th class ="text-center" style="width: 75px">B</th>
    <th class ="text-center" style="width: 100px">A ⊻ B</th>
  </tr>
  <tr>
    <td>V</td>
    <td>V</td>
    <td>F</td>
  </tr>
  <tr>
    <td>V</td>
    <td>F</td>
    <td>V</td>
  </tr>
  <tr>
    <td>F</td>
    <td>V</td>
    <td>V</td>
  </tr>
  <tr>
    <td>F</td>
    <td>F</td>
    <td>F</td>
  </tr>
</table>

Este comportamiento existe como un operador dentro de la lógica y se lo denomina `xor` o disyunción lógica excluyente.
 
A diferencia del `and` y `or`, el `xor` no suele estar definido en los lenguajes de programación. :cry: Sin embargo, ahora que sabés cómo funciona, si alguna vez lo necesitás podés definirlo a mano. :wink:

> Veamos si se entiende: definí la función `xor`, que tome por parámetro dos valores booleanos y devuelva el valor de verdad correspondiente según la tabla. TIP: es más sencillo de lo que piensas, lo podés resolver en la misma línea del `return` y quizá nuevamente tengas que hacer uso de la negación `!`.
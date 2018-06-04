Vamos ahora con un reto un poco más complejo. 

Todos sabemos que los árboles genealógicos pueden tornarse complicados cuando hay muchas personas y relaciones involucradas. 

Seguramente conoces la novela Cien Años de Soledad, en donde hacer seguimiento de quienes son hermanos y medio hermanos se vuelve algo confuso pues la línea sanguínea se cruzó múltiples veces, pues por poner algunos ejemplos:

* Arcadio es hijo de José Arcadio y de Pilar Ternera
* Aureliano José es hijo del Coronel Aureliano y Pilar Ternera
* Aureliano Segundo y Remedios son hijos de Arcadio y Sofía De La Piedad

Por lo tanto podríamos definir que Arcadio y Aureliano José son medio hermanos pues tienen la misma madre pero no el mismo padre.

Para que puedas resolver este ejercicio, nosotros definimos por vos las funciones `madreDe` y `padreDe`, las cuales, recibiendo un hijo (string), retorna el nombre (string) de la madre o padre según corresponda. Ejemplo:

```javascript
ム padreDe(aurelianoJose)
"Coronel Aureliano"
ム madreDe(aurelianoSegundo)
"Sofía De La Piedad"
```

> Ahora es tu turno de ayudarnos a entender mejor la novela Cien Años de Soledad. Para ello, vas a tener que definir 3 funciones: 
`tienenLaMismaMadre` que tomando dos hijos por parámetro retorne `true` o `false`  si efectivamente comparten la misma madre. Dentro de ésta podés usar la función que te regalamos `madreDe`.
`tienenElMismoPadre` que al igual que la anterior, tome dos hijos por parámetro y retorne `true` o `false`  si comparten el mismo padre. Dentro de ésta podés usar la función que te regalamos `padreDe` 
Y `sonMedioHermanos`. Que, recibiendo dos hijos por parámetro, nos diga si efectivamente son medio hermanos. Aquí dentro, debés usar las dos funciones anteriores. Recordá que los medios hermanos se dan cuando, dos hijos comparten la misma madre, pero NO el mismo padre o viceversa. Pues si ambos tienen la misma madre y el mismo padre ¡en ese caso serían hermanos! :sweat_smile:
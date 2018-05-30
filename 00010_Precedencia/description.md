Cuando una expresión matemática tiene varios operadores, sabemos que las multiplicaciones y divisiones se efectuarán antes que las sumas y las restas:

```javascript
5 * 3 + 8 / 4 - 3 = 14
```

Al igual que en matemática, cuando usamos operadores lógicos las expresiones se evalúan en un orden determinado llamado _precedencia_. 

¿Cuál es ese orden? ¡Hagamos la prueba!

Teniendo definida la función:
 
```javascript
function pagaConTarjeta(seCobraInteres, cuotasTarjeta, efectivoDisponible) {
  return !seCobraInteres && cuotasTarjeta >= 3 || efectivoDisponible < 100;
}
```

> Probala en la consola con los valores:

>* `ム pagaConTarjeta(true, 6, 320)`
>* `ム pagaConTarjeta(false, 8, 80)`
>* `ム pagaConTarjeta(true, 2, 215)`
>* `ム pagaConTarjeta(true, 1, 32)`
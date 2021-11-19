//Generar un numero aleatorio del 2 al 10
const filas = Math.floor(Math.random() * 9) + 2; //random
const columnas = Math.floor(Math.random() * 9) + 2; //random

//creacion del grid (ARRAY)
let grid = [];

//ciclo for donde recorremos las filas y le insertamos un array para las columnas
for (let i = 0; i < filas; i++) {
  grid.push([]); //mete un array dentro de un array con []

  //ciclo for donde recorremos las columnas
  for (let j = 0; j < columnas; j++) {
    //creacion de la variable porcentaje para calcular una celula viva o muerta
    let porcentaje = Math.floor(Math.random() * 10) + 1;

    //Si el porcentaje es de 1 a 8 la celula estara muerta ".", si es de 9 a 10 estara viva "*"
    if (porcentaje >= 1 && porcentaje <= 8) {
      // "." -> muertos 80%
      // "O" -> vivos   20%
      grid[i].push(".");
    } else {
      grid[i].push("O");
    }
  }
}
//Impresion de la tabla en consola
console.table(grid);

//Iteraciones -- hasta que mueran todas o 10

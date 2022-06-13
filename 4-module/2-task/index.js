function makeDiagonalRed(table) {
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[i].style.backgroundColor = "red";
  }
}

// закрасить в красный цвет по диаметру
// function makeDiagonalRed(table) {
//   for (let i = 0; i < table.rows.length; i++) {
//     if (i == table.rows.length -1 || i == 0) {
//       let row = table.rows[i];
//       for (let j = 0; j < row.cells.length; j++ ) {
//         row.cells[j].style.backgroundColor = "red";
//       }
//     } else {
//       table.rows[i].cells[0].style.backgroundColor = "red";
//       table.rows[i].cells[table.rows[i].cells.length -1].style.backgroundColor = "red";
//     }
//   }
// }

function showSalary(users, age) {
   return users
      .filter((item) => item.age <= age) // фильтруем по дате
      .map((item) => `${item.name}, ${item.balance}`) // забираем нейм и зп
      .join("\n"); // массив в строку + перенос
}
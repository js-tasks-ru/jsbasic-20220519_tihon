function isEmpty(obj) {
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }
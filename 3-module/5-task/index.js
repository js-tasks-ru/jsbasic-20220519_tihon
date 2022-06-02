function getMinMax(str) {
  return str
    .split(/\s+/)
    .filter((i) => i.length)
    .map((i) => parseFloat(i))
    .reduce(
      (number, item) => {
        if (item > number.max) {
          number.max = item;
        }
        if (item < number.min) {
          number.min = item;
        }
        return number;
      },
      { max: -Infinity, min: Infinity }
    );
}
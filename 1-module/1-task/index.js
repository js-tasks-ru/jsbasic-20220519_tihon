function factorial(n) {
  let num = 1;
  while (n) {
    num = num * n; //num *= n--;
    n = n - 1;
  }
  return num;
}

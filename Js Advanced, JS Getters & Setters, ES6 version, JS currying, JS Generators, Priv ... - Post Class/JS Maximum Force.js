function maxPower(arr, n, k) {
  arr = arr.map((el) => Math.abs(el));
  arr.sort((a, b) => b - a);
  arr = arr.slice(0, k);
  return arr.reduce((sum, el) => {
    return sum + (el * el);
  }, 0);

}

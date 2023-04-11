const fibsRec = (x, a = 1, b = 0, c = 0, arr = []) => {
  if (x <= 0) {
    return arr;
  }

  arr.push(c);
  b = a;
  a = c;
  c = a + b;

  return fibsRec(x - 1, a, b, c, arr);
};

fibsRec(9); // [0, 1,  1,  2, 3, 5, 8, 13, 21]

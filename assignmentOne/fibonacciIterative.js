const fibs = (x) => {
  let a = 1;
  let b = 0;
  let c = 0;
  let arr = [];

  for (let i = 0; i < x; i += 1) {
    arr.push(c);
    b = a;
    a = c;
    c = a + b;
  }

  return arr;
};

/*   
 * Generates an array of Fibonacci numbers up to the specified limit.
 *
 * @param x - The limit for the Fibonacci numbers to generate.
 * @returns An array of Fibonacci numbers up to the limit.
 
const fibs = (x: number): number[] => {
    let a = 1;
    let b = 0;
    let c = 0;
    let arr = [];
  
    // Generate Fibonacci numbers up to the limit x and store them in the arr array.
    for (let i = 0; i < x; i += 1) {
      arr.push(c);
      b = a;
      a = c;
      c = a + b;
    }
  
    return arr;
  };
  This code defines a fibs function that generates an array of Fibonacci numbers up to a specified limit x.
  
  The function initializes three variables a, b, and c to the values 1, 0, and 0, respectively, and an empty array arr to store the generated Fibonacci numbers. It then enters a loop that iterates x times, generating a new Fibonacci number in each iteration and adding it to the arr array.
  
  To generate the Fibonacci numbers, the function uses a three-variable sequence a, b, and c, where a and b are the two most recent Fibonacci numbers, and c is the next Fibonacci number. In each iteration, b is set to the value of a, a is set to the value of c, and c is set to the sum of a and b. The resulting c value is added to the arr array.
  
  The function returns the arr array containing the generated Fibonacci numbers.
  
  The code uses TypeScript annotations to specify the type of the input and output values. */

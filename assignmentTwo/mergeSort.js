mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(right), mergeSort(left));
};

const merge = (left, right) => {
  let result = [];
  let i = 0;
  let j = 0;
  let k = 0;
  let o = left.length + right.length;

  while (k < o) {
    if (left[i] <= right[j] || !right[j]) {
      result.push(left[i]);
      k += 1;
      i += 1;
    } else if (left[i] >= right[j] || !left[i]) {
      result.push(right[j]);
      k += 1;
      j += 1;
    }
  }

  return result;
};
mergeSort([1, 1, 2, 3, 4, 5, 6, 7, 8, 1]); // [1, 1, 1, 2, 3, 4, 5, 6, 7, 8];
mergeSort([]); //[]
mergeSort([1, 2, 1, 2]); //[1, 1, 2, 2]

/* 
  * Sorts an array using the merge sort algorithm.
   *
   * @param arr - The array to be sorted.
   * @returns A new sorted array.
   *
  const mergeSort = (arr: number[]): number[] => {
    // Base case: If the array has 1 or fewer elements, it is already sorted.
    if (arr.length <= 1) {
      return arr;
    }
  
    // Split the array into two halves.
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    // Recursively sort the left and right halves, then merge them.
    return merge(mergeSort(left), mergeSort(right));
  };
  
  **
   * Merges two sorted arrays into a new sorted array.
   *
   * @param left - The left array to merge.
   * @param right - The right array to merge.
   * @returns A new sorted array.
   *
  const merge = (left: number[], right: number[]): number[] => {
    let result = [];
    let i = 0;
    let j = 0;
    let k = 0;
    let o = left.length + right.length;
  
    // Merge the left and right arrays into a new sorted array.
    while (k < o) {
      if (left[i] <= right[j] || !right[j]) {
        result.push(left[i]);
        k += 1;
        i += 1;
      } else if (left[i] >= right[j] || !left[i]) {
        result.push(right[j]);
        k += 1;
        j += 1;
      }
    }
  
    return result;
  }; */

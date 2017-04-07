// Binary Search find the index of the given element in a sorted array

const testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const binarySearchRec = (array, key, low, high) => {
  if (low > high) {
    return -1;
  }
  const mid = low + Math.floor((high - low) / 2);
  if (array[mid] === key) {
    return mid;
  } else if (key < array[mid]) {
    return binarySearchRec(array, key, low, (mid - 1));
  } else {
    return binarySearchRec(array, key, (mid + 1), high);
  }
};

const binarySearch = (array, key) => {
  return binarySearchRec(array, key, 0, (array.length - 1));
};

binarySearch(testArr, 5);

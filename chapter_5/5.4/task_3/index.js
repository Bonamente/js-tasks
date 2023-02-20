// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// Функция getMaxSubSum(arr) должна возвращать эту сумму.

const getMaxSubSum = (arr) => {
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(currentSum, maxSum);

    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return maxSum;
};

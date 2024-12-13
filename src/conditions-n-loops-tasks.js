/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let i = a;
  if (a > b && a > c) {
    i = a;
  } else if (b > a && b > c) {
    i = b;
  } else if (c > a && c > b) {
    i = c;
  }
  const result = i;
  return result;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x) return true;
  if (queen.y === king.y) return true;
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) return true;
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  let result = false;
  if (a === b && a + b > c) {
    result = true;
  } else if (b === c && c + b > a) {
    result = true;
  } else if (a === c && a + c > b) {
    result = true;
  }

  if (a === 0 || b === 0 || c === 0) {
    result = false;
  }
  return result;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const t = Math.trunc(num / 10);
  const u = num % 10;
  let tens = '';
  let units = '';
  for (let i = 0; i < t; i += 1) {
    tens += 'X';
  }
  if (u < 5) {
    for (let i = 0; i < u; i += 1) {
      if (i < 3) {
        units += 'I';
      } else {
        units = 'IV';
      }
    }
  } else if (u > 5 && u < 9) {
    units = 'V';
    for (let i = 0; i < u - 5; i += 1) {
      units += 'I';
    }
  } else if (u === 9) {
    units = 'IX';
  } else if (u === 5) {
    units = 'V';
  }
  const result = tens + units;
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    if (i !== 0 && i < numberStr.length) {
      result += ' ';
    }
    switch (numberStr[i]) {
      case '1':
        result += 'one';
        break;
      case '2':
        result += 'two';
        break;
      case '3':
        result += 'three';
        break;
      case '4':
        result += 'four';
        break;
      case '5':
        result += 'five';
        break;
      case '6':
        result += 'six';
        break;
      case '7':
        result += 'seven';
        break;
      case '8':
        result += 'eight';
        break;
      case '9':
        result += 'nine';
        break;
      case '0':
        result += 'zero';
        break;
      case '.':
        result += 'point';
        break;
      case ',':
        result += 'point';
        break;
      case '-':
        result += 'minus';
        break;
      default:
        break;
    }
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  const halfLength = Math.trunc(str.length / 2);
  for (let i = 0; i < halfLength; i += 1) {
    if (str[i] !== str[str.length - (i + 1)]) return false;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let result = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      result = +i;
      break;
    } else if (str[i] !== letter) {
      result = -1;
    }
  }
  return result;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let result = false;
  let x = '';
  let y = '';

  x += num;
  y += digit;

  for (let i = 0; i < x.length; i += 1) {
    if (x[i] === y) {
      result = true;
      break;
    }
  }
  return result;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let leftSide = 0;
    for (let j = i - 1; j >= 0; j -= 1) {
      leftSide += arr[j];
    }
    let rightSide = 0;
    for (let x = i + 1; x < arr.length; x += 1) {
      rightSide += arr[x];
    }
    if (leftSide === rightSide) return i;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 *        [
 *          [1,  2,  3,  4,  5],
 *  5  =>   [16, 17, 18, 19, 6],
 *          [15, 24, 25, 20, 7],
 *          [14, 23, 22, 21, 8],
 *          [13, 12, 11, 10, 9],
 *        ]
 */
function getSpiralMatrix(size) {
  const resultArr = [];
  let x = 0;
  let y = 0;
  let steps = 0;
  for (let i = 0; i < size; i += 1) {
    resultArr[i] = [];
  }
  for (let i = 1; i <= size ** 2; i += 1) {
    resultArr[y][x] = i;
    if (x + y < size - 1 && x + 1 - y >= 0) {
      steps += 1;
      x += 1;
    }
    if (y < x && steps !== i) {
      steps += 1;
      y += 1;
    }
    if (x + y >= size && x + 1 >= 0 && steps !== i) {
      steps += 1;
      x -= 1;
    }
    if (y > x && steps !== i) {
      steps += 1;
      y -= 1;
    }
  }
  return resultArr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  this.matrix = matrix;
  const resultArr = [];
  for (let x = 0; x < matrix.length; x += 1) {
    const innerArr = [];
    const copyMtrx = this.matrix;
    for (let y = 0; y < copyMtrx[x].length; y += 1) {
      const shiftY = copyMtrx.length - y - 1;
      const number = matrix[shiftY][x];
      innerArr[y] = number;
    }
    resultArr[x] = innerArr;
  }

  for (let i = 0; i < matrix.length; i += 1) {
    for (let y = 0; y < matrix[i].length; y += 1) {
      this.matrix[i][y] = resultArr[i][y];
    }
  }
  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const cloneArr = arr;
  function swap(items, leftI, rightI) {
    const temp = items[leftI];
    cloneArr[leftI] = items[rightI];
    cloneArr[rightI] = temp;
  }
  function partition(items, left, right) {
    const pivot = items[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;
    while (i <= j) {
      while (items[i] < pivot) {
        i += 1;
      }
      while (items[j] > pivot) {
        j -= 1;
      }
      if (i <= j) {
        swap(items, i, j);
        i += 1;
        j -= 1;
      }
    }
    return i;
  }
  function quickSort(items, left, right) {
    let index;
    if (items.length > 1) {
      index = partition(items, left, right);

      if (left < index - 1) {
        quickSort(items, left, index - 1);
      }
      if (index < right) {
        quickSort(items, index, right);
      }
    }
    return items;
  }
  const result = quickSort(cloneArr, 0, cloneArr.length - 1);
  return result;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let result = str;
  for (let y = 1; y <= iterations; y += 1) {
    let head = '';
    let tail = '';
    for (let i = 0; i < str.length; i += 1) {
      if (i % 2 === 0) {
        head += result[i];
      } else {
        tail += result[i];
      }
    }
    result = `${head}${tail}`;
    if (result === str) {
      return shuffleChar(str, iterations % y);
    }
  }
  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const arr = [];
  let int = number;
  while (int > 0) {
    arr.push(int % 10);
    int = Math.floor(int / 10);
  }
  arr.reverse();
  let i = arr.length - 1;
  while (i > 0 && arr[i - 1] >= arr[i]) {
    i -= 1;
  }
  if (i === 0) {
    return number;
  }
  let j = arr.length - 1;
  while (arr[j] <= arr[i - 1]) {
    j -= 1;
  }
  [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
  const head = [];
  const tail = [];
  for (let x = 0; x < arr.length; x += 1) {
    if (x < i) {
      head.push(arr[x]);
    } else {
      if (arr[x] < arr[x + 1]) tail.push(arr[x]);
      tail.unshift(arr[x]);
    }
  }
  const result = head.concat(tail);
  return Number(result.join(''));
}
module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};

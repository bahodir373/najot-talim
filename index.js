////////////////////////// 1-masala

// function countVowels(str) {
//     let letters = 'aouie';
//     let vowels = letters.split("");

//     let count = 0;

//     for (let letter of str) {
//         if(vowels.includes(letter)) {
//             count++
//         }
//     }

//     return count;
// }

// console.log(countVowels("Hello world"));



////////////////////////// 2-masala

// function longestCommonPrefix(strings) {
//     let prefix = strings[0];

//     for (let i = 1; i < strings.length; i++) {
//         while (strings[i].indexOf(prefix) !== 0) {
//             prefix = prefix.slice(0, -1);
//             if (prefix === "") return "";
//         }
//     }

//     return prefix;
// }

// console.log(longestCommonPrefix(["hello", "heyou", "help"]));



////////////////////////// 3-masala

// function minPairSum(numbers) {
//     let minSum = numbers[0] + numbers[1];
//     let pair = [numbers[0], numbers[1]];

//     for (let i = 0; i < numbers.length - 1; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             let sum = numbers[i] + numbers[j];
//             if (sum < minSum) {
//                 minSum = sum;
//                 pair = [numbers[i], numbers[j]];
//             }
//         }
//     }

//     return pair;
// }

// console.log(minPairSum([1, 60, -10, 70, -80, 85]));




////////////////////////// 4-masala

// function sumDigitsInString(str) {
//     let digits = str.match(/\d/g);
//     let sum = 0;

//     for (let element of digits) {
//         sum += parseInt(element);
//     }

//     return sum;
// }

// console.log(sumDigitsInString('a1b2c4'));



////////////////////////// 5-masala

// function allPalindromeSubstrings(s) {
//     let result = [];

//     function isPalindrome(left, right) {
//         while (left >= 0 && right < s.length && s[left] === s[right]) {
//             result.push(s.slice(left, right + 1));
//             left--;
//             right++;
//         }
//     }

//     for (let i = 0; i < s.length; i++) {
//         isPalindrome(i, i);
//         isPalindrome(i, i + 1);
//     }

//     return result;
// }

// console.log(allPalindromeSubstrings("ababa"));



////////////////////////// 6-masala

// function findPairs(arr, k) {
//     let pairs = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === k) {
//                 pairs.push([arr[i], arr[j]]);
//             }
//         }
//     }
//     return pairs;
// }

// console.log(findPairs([1, 2, 3, 4, 5], 5));




////////////////////////// 7-masala

// function findPalindromes(start, end) {
//     let palindromes = [];

//     for (let i = start; i < end; i++) {
//         let element = i.toString();
//         let reversedElement = element.split("").reverse().join("");

//         if (element === reversedElement) {
//             palindromes.push(reversedElement)
//         }
//     }

//     let numPalindromes = [];
//     for (let element of palindromes) {
//         numPalindromes.push(parseInt(element))
//     }

//     return numPalindromes;
// }

// console.log(findPalindromes(100,150));



////////////////////////// 8-masala

// function closestFibonacci(num) {
//     let fib = [0, 1];

//     while (true) {
//         let nextFib = fib[fib.length - 1] + fib[fib.length - 2];
//         if (nextFib > num) break;
//         fib.push(nextFib);
//     }

//     return [fib[fib.length - 2], fib[fib.length - 1]];
// }

// console.log(closestFibonacci(10));



////////////////////////// 9-masala

// function minMaxDifference(array) {
//     let max = Math.max(...array);
//     let min = Math.min(...array);

//     return max - min;
// }

// console.log(minMaxDifference([3,1,4,1,5,9]));



////////////////////////// 10-masala

// function spiralOrder(matrix) {
//     let result = [];
//     if (matrix.length === 0) return result;

//     let top = 0, bottom = matrix.length - 1;
//     let left = 0, right = matrix[0].length - 1;

//     while (top <= bottom && left <= right) {
//         for (let i = left; i <= right; i++) {
//             result.push(matrix[top][i]);
//         }
//         top++;

//         for (let i = top; i <= bottom; i++) {
//             result.push(matrix[i][right]);
//         }
//         right--;

//         if (top <= bottom) {
//             for (let i = right; i >= left; i--) {
//                 result.push(matrix[bottom][i]);
//             }
//             bottom--;
//         }

//         if (left <= right) {
//             for (let i = bottom; i >= top; i--) {
//                 result.push(matrix[i][left]);
//             }
//             left++;
//         }
//     }

//     return result;
// }

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(spiralOrder(matrix));



////////////////////////// qoshimcha masala 1

// function mostFrequentElement(string) {
//     let obj = {}
//     let frequentElement = null
//     let maxCount = 0;

//     for (let element of string) {
//         if (!obj[element]) {
//             obj[element] = 1; 
//         } else{
//             obj[element]++
//         }

//         if (obj[element] > maxCount) {
//             maxCount = obj[element]
//             frequentElement = element
//         }
//     }

//     return frequentElement;
// }

// console.log(mostFrequentElement("javascripppt"));



////////////////////////// qoshimcha masala 2

// function fibonacciSequence(n) {
//     let sequence = [0, 1];

//     for (let i = 2; i < n; i++) {
//         sequence.push(sequence[i - 1] + sequence[i - 2]);
//     }

//     return sequence.slice(0, n);
// }

// console.log(fibonacciSequence(10));



////////////////////////// qoshimcha masala 3

// function removeVowels(str) {
//     return str.replace(/[aeiouAEIOU]/g, '');
// }

// console.log(removeVowels("Hello World"));



////////////////////////// qoshimcha masala 4

// function minSumPair(numbers) {
//     let sortedArr = numbers.sort((a,b) => a - b);

//     return numbers[0] + numbers[1];
// }

// console.log(minSumPair([3,1,4,2,5]));



const isEven = num => num % 2 === 0;

85,48,40,50,48,38,50,10,65,0,85,49,58,78,61,97,43,39,50,46,63,78,96,56,18,7,90,45,1,70,53,88,14,95,57,90,62,91,46,24,91,54,12,86,11,25,22,82,43,22,2,90,90,37,37,18,9,18,12,15,30 / 90
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
17,98,99,67,1,16,56,82,64,76,41,92,28,97,59,21,73,34,90,56,15,64,52 - apple
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
banana

const findSmallestNumber = numbers => Math.min(...numbers);
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
true / 
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const isPalindrome = str => str === str.split("").reverse().join("");

const getRandomElement = array => array[getRandomIndex(array)];
69,51,87,82,79,58,36,55,57,46,55,52,16,97,49,29,57,67,24,99,92,38,69,99,15,9,45,49,41,82,56,52,41,70,64,9,52,77,11,55,69,2,3 - 90
const randomNumber = getRandomNumber();
const reverseWords = str => str.split(" ").reverse().join(" ");
23 - 40
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

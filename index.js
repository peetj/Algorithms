// Import stylesheets
import './style.css';
import { doSearch } from './src/binarysearch/binarysearch';

// Write Javascript code!
let testArr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
console.log(doSearch(testArr, 73))
console.log(doSearch(testArr, 10))
console.log(doSearch(testArr, 17))
console.log(doSearch(testArr, 68))
console.log(doSearch(testArr, null))
console.log(doSearch(testArr, undefined))
console.log(doSearch(testArr, 0))
console.log(doSearch(testArr, -1))

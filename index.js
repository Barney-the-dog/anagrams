//Напиши метод isAnagrams(), который принимает два строчных аргумента
// и выводит true, если строки являются анаграммами, и false, если строки ими не являются.

function isAnagrams(str1, str2){
let arr1 = str1.toLowerCase().split('').sort().join('')
let arr2 = str2.toLowerCase().split('').sort().join('')
if (arr1===arr2) {
    return true
    } else {
        return false
    }
}
console.log(isAnagrams('kilso', 'osilk'))

module.exports = isAnagrams

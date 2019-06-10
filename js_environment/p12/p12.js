/**
 * @param {number} num
 * @return {string}

 Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

    Symbol       Value
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000
    For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

    Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9.
    X can be placed before L (50) and C (100) to make 40 and 90.
    C can be placed before D (500) and M (1000) to make 400 and 900.
    Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.


    5-14-2019
    ...to be continued
 */


//var intToRoman = function(num) {
//    const arr = [];
////    const map = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]]);
////    const map = new Map([[1, 'I'], [5, 'V'], [10, 'X'], [50, 'L'], [100, 'C'], [500, 'D'], [1000, 'M']]);
//
//    for( i = map.size ; i >= 0 ; i--){
////        console.log( map.get("I") );
////        if(num/map.get(i)) console.log(map.get(i));
//    }
//};

//var intToRoman = function(num) {
//    const arr = [];
//    let i = 0;
//    num -= 1000;
//    console.log(Math.floor(num/1000));
//    while(num>0){
//        if(Math.floor(num/1000)>0){
//            arr.push("M");
//            num -= 1000;
//        }
//        if(Math.floor(num/900)){
//            arr.push("CM");
//            num -= 900;
//        }
//        if(Math.floor(num/400)){
//            arr.push("CD");
//            num -= 400;
//        }
//        if(Math.floor(num/100)){
//            arr.push("C");
//            num -= 100;
//        }
//        if(Math.floor(num/90)){
//            arr.push("XC");
//            num -= 90;
//        }
//        if(Math.floor(num/40)){
//            arr.push("XL");
//            num -= 40;
//        }
//        if(Math.floor(num/10)){
//            arr.push("X");
//            num -= 10;
//        }
//        if(Math.floor(num/9)){
//            arr.push("IX");
//            num -= 9;
//        }
//        if(Math.floor(num/4)){
//            arr.push("IV");
//            num -= 4;
//        }
//        if(num > 1 && Math.floor(num/1)){
//            arr.push("I");
//            num -= 1;
//        }
//
//    }
//    
//    
//    return arr;
//
//};



// Difficult so given up and taken from discussion boards.... dang this solution was clean and easy to understand. I just had to think of when to grab a number. Go into what your brain is doing on every problem. For this my brain stopped at being able to represent 3 is greater than 1 but less than 4 so map the 1 and focus in with that. Map the numeric representation of the 1 with an array where the first value is the numeric number and the second value is the character associated with that number. 
// Runtime: 120 ms, faster than 99.63% of JavaScript online submissions for Integer to Roman.
// Memory Usage: 41.4 MB, less than 41.42% of JavaScript online submissions for Integer to Roman.
var intToRoman = function(num){
    let str = "";
    const mapping = [[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];
    for(i=0;i<mapping.length;i++){
        while(num >= mapping[i][0]){
            num -= mapping[i][0];
            str += mapping[i][1];
        }
    }
    return str;
}



console.log(intToRoman(3)); //III
console.log(intToRoman(4)); //IV
console.log(intToRoman(9)); //IX
console.log(intToRoman(58)); //LVIII
console.log(intToRoman(1994)); //MCMXCIV
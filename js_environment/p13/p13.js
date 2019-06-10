/**
 * @param {string} s
 * @return {number}
 
Roman numerals are represented by seven different symbols:

I, V, X, L, C, D and M.

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
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

attempt 1 - 5-14-2019

worked with 97%/40% bad on memory..

 */
//var romanToInt = function(s) {
//    let output = 0;
//    
//    for(i=0;i<s.length;i++){
//        if(s[i]==="I" && s[i+1]==="V"){
//           output += 4;
//           i++;
//        }
//        else if(s[i]==="I" && s[i+1]==="X"){
//           output += 9;
//           i++;
//        }
//        else if(s[i]==="X" && s[i+1]==="L"){
//           output += 40;
//           i++;
//        }
//        else if(s[i]==="X" && s[i+1]==="C"){
//           output += 90;
//           i++;
//        }
//        else if(s[i]==="C" && s[i+1]==="D"){
//           output += 400;
//           i++;
//        }
//        else if(s[i]==="C" && s[i+1]==="M"){
//           output += 900;
//           i++;
//        }
//        else if(s[i]==="I"){
//            output += 1;
//        }
//        else if(s[i]==="V"){
//            output += 5;
//        }
//        else if(s[i]==="X"){
//            output += 10;
//        }
//        else if(s[i]==="L"){
//            output += 50;
//        }
//        else if(s[i]==="C"){
//            output += 100;
//        }
//        else if(s[i]==="D"){
//            output += 500;
//        }
//        else if(s[i]==="M"){
//            output += 1000;
//        }
//    }
//    return output;
//};

/***********

There was no solution so went to the discussion boards and found a clean/interesting one?
5-14-2019
*/

const romanToInt = s => {
  if (!s || s.length === 0) {
    return 0;
  }

  const map = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]]);

  let i = s.length - 1;
  let result = map.get(s[i]);
    
  while (i > 0) {
    const curr = map.get(s[i]);
    const prev = map.get(s[i - 1]);

    if (prev >= curr) {
      result += prev;
    } else {
      result -= prev;
    }
    i--;
  }

  return result;
};


console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("XL"));
console.log(romanToInt("XC"));
console.log(romanToInt("CD"));
console.log(romanToInt("CM"));
console.log(romanToInt("DCCCLXXXXIX"));

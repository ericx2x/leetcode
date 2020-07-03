/**
 * @param {string} s
 * @return {string}
 3/19/2019
 
  I couldn't really even start this one. Trying to do it in code was boggling my mind. I had a hint of making the string in reverse but it failed on non palindromic substrings like "aac" and later in that whole string is "caa". Even when I corrected it to find if there is another palindrome I get a 'Time Limit Exceeded' error.. no wonder..... 
 */

//var longestPalindrome = function(s) {
//   let longestSub = 0;
//   let substring = "";
//   const reverseS = s.split('').reverse().join('');
////   if(s.length===1) return s[0];
//    for(i = 0; i < s.length ; i++){
////        console.log("i"+i);
//        for(j = i ; j <= s.length ; j++){
////            console.log("j"+j);
//            let sub = s.substring(i, j);
////            console.log(s.substring(i, j));
//            if(reverseS.includes(sub)){
////                console.log(reverseS.includes(sub).index)
//                    if(sub.length > longestSub){
//                if(is_Palindrome(sub)){
//
//                            longestSub = sub.length;
//                            substring = sub;
//                    }
//                }
//            }
//        }
//    }
//    return substring;
//};
//
//function is_Palindrome(str1) {
//    var rev = str1.split("").reverse().join("");
//    return str1 == rev;
//}






//attempt 2 - Brute force.

//var longestPalindrome = function(s) {
//   let longestSub = 0;
//   let substring = "";
//   const reverseS = s.split('').reverse().join('');
////   if(s.length===1) return s[0];
//    for(i = 0; i < s.length ; i++){
////        console.log("i"+i);
//        for(j = i ; j <= s.length ; j++){
////            console.log("j"+j);
//            let sub = s.substring(i, j);
////            console.log(s.substring(i, j));
//                if(is_Palindrome(sub)){
//                    if(sub.length > longestSub){
//                        longestSub = sub.length;
//                        substring = sub;
//                    }
//                }
//            }
//        }
//    return substring;
//}
//
//function is_Palindrome(str1) {
//    var rev = str1.split("").reverse().join("");
//    return str1 == rev;
//}




//attept 3 - remastered

var longestPalindrome = function(s) {
    if (s == null || s.length < 1) return "";
    let start = 0, end = 0;
    for (let i = 0; i < s.length; i++) {
        console.log("xxxx");
        let len1 = expandAroundCenter(s, i, i);
        console.log("====");
        let len2 = expandAroundCenter(s, i, i + 1);
        console.log("zzzz");
        let len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - (len - 1) / 2;
            end = i + len / 2;
        }
    }
    return s.substring(start, end + 1);
}

var expandAroundCenter = function(s, left, right) {
    let L = left, R = right;
    while (L >= 0 && R < s.length && s.charAt(L) == s.charAt(R)) {
        L--;
        R++;
        console.log("L"+L);
        console.log("R"+R);
    }
    return R - L - 1;
}

function is_Palindrome(str1) {
    var rev = str1.split("").reverse().join("");
    return str1 == rev;
}






//console.log(longestPalindrome("bb")); //dabab
console.log(longestPalindrome("babad")); //dabab
//console.log(longestPalindrome("cbbd"));
//console.log(longestPalindrome("babadjooj"));
//console.log(longestPalindrome("aacdefcaa"));
//console.log(longestPalindrome("boavhhvaob"));
//console.log(longestPalindrome("aaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxyyyyyyyyyyzzzzzzzzzzyyyyyyyyyyxxxxxxxxxxwwwwwwwwwwvvvvvvvvvvuuuuuuuuuuttttttttttssssssssssrrrrrrrrrrqqqqqqqqqqppppppppppoooooooooonnnnnnnnnnmmmmmmmmmmllllllllllkkkkkkkkkkjjjjjjjjjjiiiiiiiiiihhhhhhhhhhggggggggggffffffffffeeeeeeeeeeddddddddddccccccccccbbbbbbbbbbaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxyyyyyyyyyyzzzzzzzzzzyyyyyyyyyyxxxxxxxxxxwwwwwwwwwwvvvvvvvvvvuuuuuuuuuuttttttttttssssssssssrrrrrrrrrrqqqqqqqqqqppppppppppoooooooooonnnnnnnnnnmmmmmmmmmmllllllllllkkkkkkkkkkjjjjjjjjjjiiiiiiiiiihhhhhhhhhhggggggggggffffffffffeeeeeeeeeeddddddddddccccccccccbbbbbbbbbbaaaa"));
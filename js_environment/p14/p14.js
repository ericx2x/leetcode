/**
 * @param {string[]} strs
 * @return {string}
 
 Write a function to find the longest common prefix string amongst an array of strings.

    If there is no common prefix, return an empty string "".

    Example 1:

    Input: ["flower","flow","flight"]
    Output: "fl"
    Example 2:

    Input: ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.
    Note:

    All given inputs are in lowercase letters a-z.
 
 
 
 //gave up
 */

//var longestCommonPrefix = function(strs) {
//    if(strs[0]===undefined) return "";
//    // if(strs[0].charAt(0) || strs[1].charAt(0) || strs[2].charAt(0) === 0) return "";
//
//    let lStr = "";
//    let longest = 0;
//    let origlongest = 0;
//
//    for( i=0 ; i < strs.length ; i++){
//        if( strs[i].length > longest ) longest = strs[i].length;
//    }
//    origlongest = longest;
//    for( j = 0 ; j < strs.length ; j++){
//        lStr = "";
//        for( i = 0 ; i < longest ; i++){
//            if(j+1 !== strs.length){
////                console.log((strs[j].charAt(i) == strs[j+1].charAt(i)))
//                if((strs[j].charAt(i) == strs[j+1].charAt(i))){
//                    lStr += strs[0].charAt(i);
//                    console.log(i)
//                    if(j+1 === strs.length-1 && i === longest-1){console.log(lStr); return lStr;} 
////                    console.log(lStr);
//                } else if(i==0){
//                    return ""
//                }
//            }
//        }
//    }
//};


//their solution

//Runtime: 60 ms, faster than 84.51% of JavaScript online submissions for Longest Common Prefix.
//Memory Usage: 33.9 MB, less than 85.32% of JavaScript online submissions for Longest Common Prefix.

//personal thoughts... my method i crowded myself into a corner. it would have been better to FULLY think about a real solution that made sense in my mind before beginning. I think my problem was that I did not actually think of a clean solution and thought I could wing it. Winging it is actually very bad as it can lead you directly into a corner. First think of it like a puzzle with the tools you have. It probably would have helped to keep the .indexOf method as well as the substring(0, prefix.length-1) methods more inside my mind. I will have to keep these methods in mind for future use.

//The space and time complexity for this problem is O(ab) space and constant space, (I think).
//I was sort of correct about time complexity. I was thinking a is the number of strings and b is the number of characters in those strings. I could have also mentioned the worst case run time where the number of characters in each string are all the same. And further, the strings are all the same. In which it would run thru everything to get the result. 
//I was correct about the space complexity. It was O(1) which is considered constant space.


 var longestCommonPrefix = function(strs) {
    if (strs.length == 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++){
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (!prefix) return "";
        }        
    }
    return prefix;
}

//To continue this problem look into their other soltuions. I only had time to figure out one of theirs and run with it. There are several others.....


console.log(longestCommonPrefix(["flower","flow","flight"]));
//console.log(longestCommonPrefix(["dog","racecar","car"]));
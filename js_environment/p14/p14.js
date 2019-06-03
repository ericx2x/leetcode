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
 
 */

var longestCommonPrefix = function(strs) {
    let lStr = "";
    let longest = 0;
    let origlongest = 0;

    for( i=0 ; i < strs.length ; i++){
        if( strs[i].length > longest ) longest = strs[i].length;
    }
    origlongest = longest;
    for( i = 0 ; i <= longest ; i++){
        if((strs[0][i] == strs[1][i]) && (strs[0][i] == strs[2][i])){
            lStr += strs[0][i];
        }
        else{
            return lStr;
        }
    }
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
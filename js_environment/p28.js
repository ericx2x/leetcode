/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length==0) return 0;
    
    for(let i = 0; i < haystack.length ; i++){
        if(haystack.slice(i, i+needle.length) == needle) return i;
    }
    return -1;
};

//got this solution immediately on my own :)  faster than 80% cpu wise lower and better than 21% memory wise... TODO: can improve memory probably with some minor thinking..
//
//TODO: spend some time on the discussion boards. Look for other answers..

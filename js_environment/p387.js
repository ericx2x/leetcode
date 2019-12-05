/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

    const set = {};
    const bannedChars = [];

    for(let i = 0 ; i < s.length ; i++){
        if(s[i] in set){
            delete set[s[i]];
            bannedChars.push(s[i])
        } else {
            set[s[i]] = i;
        }
    }

    for(let i = 0 ; i < bannedChars.length ; i++){
        if(bannedChars[i] in set) delete set[bannedChars[i]];
    }

    if (!!set) return s.indexOf(Object.keys(set)[0]);
    return -1;

};


/* TODO: you got the above code to work but you had to use the internet a lot to understand how you could store what you needed in an object. Get a better sense of object.keys. Also, there seemed to be more elegant solutions that utilized javascripts built in map object. Just spend some time looking at leetcode's offical solution as well.
 *
 *
 * Above solutions runtime: Runtime: 148 ms, faster than 11.59% of JavaScript online submissions for First Unique Character in a String.
   Memory Usage: 43.1 MB, less than 10.00% of JavaScript online submissions for First Unique Character in a String.
   */

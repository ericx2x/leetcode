/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 *
 * TODO: simply could not solve this. Try again...
 */
var wordPattern = function(pattern, str) {
    const theStr = str.split(" ");
    const map = new Map();
    const arr = [];
    let count = 0;
    for(let i = 0 ; i < pattern.length ; i++){
        if(!map[pattern[i]]) {
            map[pattern[i]] = theStr[i]
            arr[count] = theStr[count];
            count++;
        }
    }
    console.log(arr)
    if(count!=2) return false
    for(let i = 0 ; i < count ; i++){
        if(map[pattern[i]]==arr[i+1]) return false;
    }
    return true;
};

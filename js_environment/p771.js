var numJewelsInStones = function(J, S) {
    let result = 0;
    for(let i = 0; i < S.length; i++) {
        if ( J.indexOf(S.charAt(i)) >= 0 )
            result++;
    }
    return result;
};

console.log(numJewelsInStones("aA","aAAbbbbb"));
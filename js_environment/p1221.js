/**
 * @param {string} s
 * @return {number}

 TODO: do this problem again... you did not understand what it was asking. it was asking for split balanced strings in the same string. you went straight to the example and thought u understood what it was asking then proceeded to do an unrelatted algorithm that was not related to the problem. also your base case for not l or r is incorrect
 */
var balancedStringSplit = function(s) {
    if(!s ) return 0;
    if(!(s.includes('L') && s.includes('R'))) return 0;
    maxR = 0;
    maxL = 0;
    conR = 0;
    conL = 0;

    for(let i = 0 ; i < s.length ; i++){
        if(s[i]==s[i+1]){
            if(s[i]=='R'){
                conR = conR+1;
                maxR = Math.max(conR, maxR)
            }
            else if(s[i]=='L'){
                conL = conL+1;
                maxL = Math.max(conL, maxL)
            }
        } else {
            conR, conL = 0;
        }
    }

    return Math.min(maxR, maxL)+1
};

balancedStringSplit('RLLLLRRRLR');

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 

5-9-2016

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"

seriously.. this problem sucks
 */
//var convert = function(s, numRows) {
//    const arr = [];
//    
//    [...s].map( (e, i) => {
//        for(j = 0 ; j < numRows ; j++){
//            arr.push[s[j]];
//        }
//        arr.push(s[i]);
//    });
//    
//    
//    
//  return arr;
//};


/**********************************************/
/* attempt 2 their solution skiped to it fast */
/**********************************************/


function convert(s, numRows) {
    if (numRows == 1) return s;

    //StringBuilder ret = new StringBuilder();
    let ret = [];

    let n = s.length;
    let cycleLen = 2 * numRows - 2;

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j + i < n; j += cycleLen) {
            ret.push(s.charAt(j + i));
            if (i != 0 && i != numRows - 1 && j + cycleLen - i < n)
                ret.push(s.charAt(j + cycleLen - i));
        }
    }
    return ret.join();
}


console.log(convert("PAYPALISHIRING", 3));
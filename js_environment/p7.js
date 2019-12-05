//============
// Problem 7 - LeetCode
/**
 * @param {number} x
 * @return {number}
 */
//https://leetcode.com/problems/reverse-integer/
//First O(n) solution but I didn't know what the they were talking about on the "32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows." part.

//I asked for help on refinement
//https://leetcode.com/problems/reverse-integer/discuss/245526/I'm-faster-than-60-of-solutions-but-I-cheated
var reverse = function(x) {
    let new_string = "";
    let negative_check = false;
    if(x<0){
        negative_check = true; 
        x=x*-1;
    }
    let num_string = x.toString();
    for(let i=num_string.length-1;i>=0;i--){
        //console.log(num_string[i]);
        if(negative_check){
            negative_check = false;
            new_string += '-';
        }
        new_string += num_string[i];
    }
    //console.log(string);
    if(new_string>=Math.pow(2, 31)-1 ) return 0;
    else if(new_string<=-Math.pow(2, 31)) return 0; 
    return new_string;
};

//console.log(reverse('-1563847232'));
console.log(reverse('123475'));
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    
    return function(n) {
        for(let i = 1 ; i <= n ; i++){
            if(isBadVersion(i)==true) return i
        }
    };
};

//pretty sure this solution works but gives time limit exceeded. They are looking for something faster..
//
//I thought of binary search but didn't know what it was called or how to implement :) that seems to be a common solution though.
//
//
//TODO: Do the binary search implemenation solution without looking at their solution below.
//
//
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    
    return function(n) {
        let left = 1;
        let right = n;
        while (left < right){
            let mid = left + (right - left) / 2;
            if(isBadVersion(mid)){
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    };
};

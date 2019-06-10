/**
 * @param {number} x
 * @return {boolean}
 1st attempt: 5-4-2019
Runtime: 240 ms, faster than 90.51% of JavaScript online submissions for Palindrome Number.
Memory Usage: 45.2 MB, less than 67.87% of JavaScript online submissions for Palindrome Number.
 */
//var isPalindrome = function(x) {
//    if( x < 0 ) return false;
//    
//    const arr = [];
//    const rArr = [];
////    console.log( x );
////    console.log( x % 10);
////    console.log( Math.floor(x / 10) );
//    while( x > 0 ){
//        arr.push(x % 10);
//        x = Math.floor(x / 10);
//    }
//
//    for( i = arr.length ; i > 0 ; i--){
//        rArr.push(arr[i-1]);
//    }
//    
////    console.log(arr);
////    console.log(rArr);
//    
//    for( i = 0 ; i < Math.floor(arr.length/2) ; i++){
//        if(arr[i]!==rArr[i]) return false;
//        if(arr[i]===rArr[i] && i === (Math.floor(arr.length/2)-1)) return true;
//    }
//
//    return true;
//};
//








/**
 * @param {number} x
 * @return {boolean}
 2st attempt: 5-4-2019
Their solution which I converted from C#
 */
var isPalindrome = function(x) {
        // Special cases:
        // As discussed above, when x < 0, x is not a palindrome.
        // Also if the last digit of the number is 0, in order to be a palindrome,
        // the first digit of the number also needs to be 0.
        // Only 0 satisfy this property.
        if(x < 0 || (x % 10 == 0 && x != 0)) {
            return false;
        }

        let revertedNumber = 0;
        while(x > revertedNumber) {
            revertedNumber = revertedNumber * 10 + x % 10;
            x /= 10;
        }

        // When the length is an odd number, we can get rid of the middle digit by revertedNumber/10
        // For example when the input is 12321, at the end of the while loop we get x = 12, revertedNumber = 123,
        // since the middle digit doesn't matter in palidrome(it will always equal to itself), we can simply get rid of it.
        return x == revertedNumber || x == revertedNumber/10;
}



/**
 * @param {number} x
 * @return {boolean}
 3rd attempt: 5-5-2019
 Youtube solution which still doesnt work lol. Figuring out it is something to do w/ the math in translating the languages. (converted from java)
 */
var isPalindrome = function(x) {
        // Special cases:
        // As discussed above, when x < 0, x is not a palindrome.
        // Also if the last digit of the number is 0, in order to be a palindrome,
        // the first digit of the number also needs to be 0.
        // Only 0 satisfy this property.
        //  if(x < 0 || (x % 10 == 0 && x != 0)) {
        //  return false;
//        }
        if(x<0)return false;

        let revertedNumber = 0;
        while(x > revertedNumber) {
            let temp = revertedNumber * 10 + x % 10;
            if (Math.floor(temp / 10) != revertedNumber)
                return false;
            revertedNumber = temp;
            x = x / 10;
        }

    return true;

    
//            console.log("revertedNumber");
//            console.log(revertedNumber);
//            console.log("x");
//            console.log(x);
    
        // When the length is an odd number, we can get rid of the middle digit by revertedNumber/10
        // For example when the input is 12321, at the end of the while loop we get x = 12, revertedNumber = 123,
        // since the middle digit doesn't matter in palidrome(it will always equal to itself), we can simply get rid of it.
//        return x == revertedNumber || x == revertedNumber/10;
}


/**
 * @param {number} x
 * @return {boolean}
 4th attempt: 5-5-2019
 Their attempt number 4. The problem was that I had to do math.floor in multiple areas because Javascript does not support int so some maths do not get rounded to a nice round int number of 0 aka returned as false.
 */
var isPalindrome = function(x) {
        if(x < 0 || (x % 10 == 0 && x != 0)) {
            return false;
        }

        let revertedNumber = 0;
        while(x > revertedNumber) {
            revertedNumber = revertedNumber * 10 + x % 10;
            x = Math.floor(x / 10);
        }

        return x == revertedNumber || x == Math.floor(revertedNumber/10);
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(11));
console.log(isPalindrome(0));

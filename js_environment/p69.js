/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    left = 1;
    right = x;
    while(left <= right){
        const pivot = Math.floor(left + (right - left) / 2);
        if(pivot * pivot === x) return pivot;
        else if ( pivot * pivot < x) right = pivot - 1;
        else left = pivot + 1;
    }
};

//Original attempt. Could not solve.
//TODO: Keep trying to understand this with the solution below and get the answer quickly... unfortunately after viewing this has clever math up the crazy wazo so no wonder I couldn't solve it.
public int sqrt(int x) {
    if (x == 0)
        return 0;
    int left = 1, right = Integer.MAX_VALUE;
    while (true) {
        int mid = left + (right - left)/2;
        if (mid > x/mid) {
            right = mid - 1;
        } else {
            if (mid + 1 > x/(mid + 1))
                return mid;
            left = mid + 1;
        }
    }
}


//Funny simple answer lol...
var mySqrt = function(x) {
    return Math.floor(Math.pow(x,.5));
};

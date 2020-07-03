// Forward declaration of guess API.
// @param num, your guess
// @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
int guess(int num);
 
#include <iostream>
#include <array>
using namespace std; 

class Solution {
public:
    int guessNumber(int n) {
        int left = 0;
        int right = n;
        while(left <= right){
            int mid = left + (right - left) / 2;
            if(guess(mid) == 0) return mid;
            if(guess(mid) == 1){ left = mid + 1;}
            else { right = mid - 1;}
        }
        return -1;  
    }
};

//TODO: do this problem from scratch with no context...

/*******************/
/*    Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"



Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"


int[][] twoD_arr = new int[10][20];

*/

class Solution{
    public static void main(String args[]){
        Solution sol = new Solution();
        System.out.println(sol.zigzag("PAYPALISHIRING", 2));
    }
    public String zigzag(String s, int numRows){
        int[][] twoD_arr = new int[10][numRows];
        return twoD_arr;
    }
}
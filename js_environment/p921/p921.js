//Given a string S of '(' and ')' parentheses, we add the minimum number of parentheses ( '(' or ')', and in any positions ) so that the resulting parentheses string is valid.

//Formally, a parentheses string is valid if and only if:

//It is the empty string, or
//It can be written as AB (A concatenated with B), where A and B are valid strings, or
//It can be written as (A), where A is a valid string.
//Given a parentheses string, return the minimum number of parentheses we must add to make the resulting string valid.

 

//Example 1:

//Input: "())"
//Output: 1
//Example 2:

//Input: "((("
//Output: 3
//Example 3:

//Input: "()"
//Output: 0
//Example 4:

//Input: "()))(("
//Output: 4
//


const S = "())"; //1
//const S = "((("; //3
//const S = "()"; //0
//const S = "()))(("; //4


var minAddToMakeValid = function(S) {

   const stack = [];
   let count = 0;

    for(let i = 0 ; i < S.length ; i++){

        if(S[i]===')'){
            if( stack.length > 0 && stack[stack.length - 1] == '(')
              stack.pop();
            else
                count = count + 1
        }
        else stack.push('(')
    };

    for(let i = 0; i < stack.length ; i++){
        count = count + 1
    }



   return count;
};

console.log(minAddToMakeValid(S));

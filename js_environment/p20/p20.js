/**
 * First attempt and answer on 3-26-2019
 */

var isValid = function(s) {
    let i = 0;
    if(s.length===0)return true;
    while(i < s.length){
        if(s[i]==='(' && s[i+1]===')' || s[i]==='[' && s[i+1]===']' || s[i]==='{' && s[i+1]==='}'){ 
//            console.log(s[i]);
            s = s.slice(0, i) + s.slice(i+2);
//            console.log(s);
//            s = s.slice(i+1, 1);
            i = -1;
        }
        i++;
        if(s.length===0){return true;}
    }
    
    return false;
};

//attempt 2...


console.log(isValid("()")); //true
console.log(isValid("()[]{}")); //true
console.log(isValid("(]")); //false
console.log(isValid("([)]")); //false
console.log(isValid("{[]}")); //true
console.log(isValid("([]")); //false

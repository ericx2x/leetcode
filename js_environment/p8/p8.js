//6-7-2019
//my intial attempt

var myAtoi = function(str) {
    let num = 0;
    for(i=0;i<str.length;i++){
        if(str[i] !== "4" || str[i] !== "1" || str[i] !== "2" || str[i] !== "3" || str[i] !== "5" || str[i] !== "6" || str[i] !== "7" || str[i] !== "8" || str[i] !== "9" || str[i] !== "-"){
            str.splice(i, 1);
        }
    }
    return str;
};


console.log(myAtoi("42"));
//console.log(myAtoi("    -42"));
//console.log(myAtoi("4193 with words"));
//console.log(myAtoi("words and 987"));
//console.log(myAtoi("-91283472332"));
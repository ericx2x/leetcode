/**
 * First attempt and answer on 3-26-2019
 */

//var isValid = function(s) {
//    let i = 0;
//    if(s.length===0)return true;
//    while(i < s.length){
//        if(s[i]==='(' && s[i+1]===')' || s[i]==='[' && s[i+1]===']' || s[i]==='{' && s[i+1]==='}'){ 
////            console.log(s[i]);
//            s = s.slice(0, i) + s.slice(i+2);
////            console.log(s);
////            s = s.slice(i+1, 1);
//            i = -1;
//        }
//        i++;
//        if(s.length===0){return true;}
//    }
//
//    return false;
//};

////attempt 2...  //total fail used up hints
////String.prototype.replaceAt=function(index, replacement) {
////    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
////}
//
//var isValid = function(s) {
//    console.log(s);
//    console.log(s.length);
//    if(s.length % 2 === 1) return false;
////    if(s.length===0) return true;
////    if(s.length===2 && ((s[0]==='(' && s[1]===')') || (s[0]==='[' && s[1]===']') || (s[0]==='{' && s[1]==='}')) ){ return true; console.log(true);}
//    
//    s.split('').forEach((c, indx)=>{
//        if( c === '(' && (s.indexOf(')') > 0) ){
//            isValid(s.slice(0, indx) + s.slice(s.indexOf(')')+1, s.length));
//        }
//        else if( c === '[' && (s.indexOf(']') > 0) ){
//            isValid(s.slice(0, indx) + s.slice(s.indexOf(']')+1, s.length));
//        }
//        else if( c === '{' && ( s.indexOf('}') > 0 ) ){
//            isValid(s.slice(0, indx) + s.slice(s.indexOf('}')+1, s.length));
//        }
//        else return false;
//        console.log("Pies");
//        
////        else if( c === '{' ){
////            isValid(s.substr(indx+1, s.indexOf('}')-1));
//////            console.log(s['(']);
////        }
////        else if( c === '[' ){
////            isValid(s.substr(indx+1, s.indexOf(']')-1));
//////            console.log(s['(']);
////        }
//    });
//    
//    return true;
//};


// attempt 3
var isValid = function(s) {
//    let i = 0;
//    if(s.length===0)return true;]
    console.log(s);
    if(s.length % 2 === 1) return false;
    if(s.length === 2 && (s[0]==='(' && s[1]===')' || s[0]==='[' && s[1]===']' || s[0]==='{' && s[1]==='}')){ 
        console.log("WHAT?");
        return true;   
    }
    
    if(s.indexOf('(')>-1){ isValid(s.slice(s.indexOf('('), s.indexOf(')')+1));console.log("okay");}
    else if(s.indexOf('[')>-1) isValid(s.slice(s.indexOf('['), s.indexOf(']')+1));
    else if(s.indexOf('{')>-1) isValid(s.slice(s.indexOf('{'), s.indexOf('}')+1));
//    if(s.indexOf('(')) isValid(s.slice(0, s.indexOf('(')) + s.slice(s.indexOf(')')+1, s.length));
//    else if(s.indexOf('[')) isValid(s.slice(0, s.indexOf('[')) + s.slice(s.indexOf(']')+1, s.length));
//    else if(s.indexOf('{')) isValid(s.slice(0, s.indexOf('[')) + s.slice(s.indexOf('}')+1, s.length));

    return false;
};



//console.log(isValid("()")); //true
console.log(isValid("()[]{}")); //true
//console.log(isValid("(]")); //false
//console.log(isValid("([)]")); //false
//console.log(isValid("{[]}()")); //true
//console.log(isValid("([]")); //false
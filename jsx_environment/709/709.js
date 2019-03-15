//First solution

//var toLowerCase = function(str) {
//    return(str.toLowerCase());
//};


//Found solutions
const toLowerCase = (str) => {
    //Calculate Ascii diff from a to A
    const DIFF = ('a'.charCodeAt(0) - 'A'.charCodeAt(0));
    
//    console.log(DIFF);
//    console.log(Array.from(str));
    console.log(String.fromCharCode(23));
//    console.log(Array.from(str).map( ch => ( ch >= 'A' && ch <= 'Z' ) ? String.fromCharCode(ch.charCodeAt(0) + DIFF) : ch ));
    console.log(Array.from(str).map( ch => ( ch >= 'A' && ch <= 'Z' ) ? String.fromCharCode(ch.charCodeAt(0) + DIFF) : ch ));
    
    return Array
        .from(str)
        .map( ch => ( ch >= 'A' && ch <= 'Z' ) ? String.fromCharCode(ch.charCodeAt(0) + DIFF) : ch )
        .join('');
};






toLowerCase("Hello");
//console.log(toLowerCase("Hello"));
//console.log(toLowerCase("here"));
//console.log(toLowerCase("LOVELY"));
/**
 * @param {string[]} words
 * @return {number}
 
 This was my first attempt done on 3-15-2019. It is faster than 91.96% of online submissions while being more memory efficient than 55% of solutions. This one was easy to make fast once I learned strategies from solving p929 efficiently.
 
 
 ["a.-","b-...","c-.-.","d-..","e.","f..-.","g--.","h....","i..","j.---","k-.-","L.-..","M--","N-.","O---","P.--.","Q--.-","R.-.","S...","T-","U..-","V...-","W.--","X-..-","Y-.--","Z--.."]
 
 
 function myFunction() {
  var str = "bELLO WORLD";
  var n = str.charCodeAt(0);
  document.getElementById("demo").innerHTML = n;
}
 
 
 --...-.
 
 */
var uniqueMorseRepresentations = function(words) {
    
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    words = words.map((w)=>{
            let string = "";
            for(let i = 0 ; i < w.length ; i++){
//                console.log(w[i]+morse[w[i].charCodeAt(0)-97]);
                string += morse[w[i].charCodeAt(0)-97];
            }
            return string;
        
    });
    return(new Set(words).size);
//    console.log(words);
};



//after looking at solutions boost

//var uniqueMorseRepresentations = function(words) {  //this one is cool looking but slower even.. doing a lot of splits and joins on every word must create and combine a lot of arrays..
//    
//    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
//    words = words.map((w)=>{
//            return w.split('').map((c) => {
//               return ( morse[c.charCodeAt(0)-97] );
//            }).join('');
//    });
////    console.log(words);
////    console.log(new Set(words));
//    
//    return(new Set(words).size);
//};
//


/*
Best solution found on discussion boards.
Intuitive:
1. The more code for 'a' is the first element in 'MORE_CODES' array.
2. charCode for 'a' is 97
3. For any letter, the corresponding more code would be MORE_CODES[charCodeOf(letter) - 97]
4. For each word, we concat the morse code of letters to get the word morse representation
5. We set a counter to remember to unique word morse representations.
6. We put each  new word morse representation in a map, so that when we meet the same morse representation, we could skip it

Complexity:
- Time: O(n) where n equals to the total length of all words
- Space: O(n) where n equals to the number of words
*/



var uniqueMorseRepresentations = function(words) {
    
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const uniueReps = {};
    let counter = 0;
    const words = words.map((w)=>{
            let string = "";
            const morseRep = w.map((c) => {
                string += morse[w[i].charCodeAt(0)-97];
            });
            if (uniqueReps[morseRep] === undefined) { 
                counter++;
                uniqueReps[morseRep] = true;
            }
            return string;
    });
    return(new Set(words).size);
//    console.log(words);
};

//const MORSE_CODES = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
//
//const getMorseRepForWord = (word) => {
//    let morseRep = '';
//    for (let i = 0, wordLen = word.length; i <wordLen; ++i) {
//        morseRep += MORSE_CODES[word.charCodeAt(i) - 97];
//    }
//    return morseRep;
//}
//
//const uniqueMorseRepresentations = (words) => {
//    const uniqueReps = {};
//    let counter = 0;
//    for (let i = 0, wordsLen = words.length; i < wordsLen; ++i) {
//        const morseRep = getMorseRepForWord(words[i]);
//        if (uniqueReps[morseRep] === undefined) { 
//            ++counter;
//            uniqueReps[morseRep] = true;
//        }
//    }
//    return counter;
//}



//More efficeint attempt and failure.
//var uniqueMorseRepresentations = function(words) {
//    
//    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
//    const uniqueReps = {};
//    let counter = 0;
//    words.map((w)=>{
//            let morseRep = w.split('').map((c) => {
//                return (morse[c.charCodeAt(0)-97]);
//            });
//        morseRep = morseRep.join('');
//            if (uniqueReps[morseRep] === undefined) { 
//                counter++;
//                uniqueReps[morseRep] = true;
//            }
//    });
//    return(counter);
////    console.log(words);
//};


console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));


console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
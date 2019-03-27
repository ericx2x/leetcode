//var lengthOfLongestSubstring = function(s) {
//    var hashTable = {};
//    var longestString = "";
//    
//    for(var i = 0 ; i < s.length ; i++){
//        if (hashTable[s[i].toString()] !== undefined) {
////            longestString = 
//        }
//        hashTable[s[i]]=i;
//    }
//        
//    console.log(hashTable);
//    
//    return (s);
//};


//Some answer I must've found.
//
//const allUnique = str => {
//  const set = [...new Set(str)];
//  return (set.length === str.length) ? true: false;
//}
//
//const lengthOfLongestSubstring = str => {
//  let result = 0,
//      maxResult = 0;
//  for (let i=0; i<str.length-1; i++) {
////      console.log("i"+i);
//    for (let j=i+1; j<str.length; j++) {
////      console.log("j"+j);
//      console.log(str.substring(i,j));
//      if (allUnique(str.substring(i, j))) {
//        result = str.substring(i, j).length;
//        if (result > maxResult) {
//          maxResult = result;
//        }
//      }
//    }
//  return maxResult;
//  }
//}



//own attempt number 2?        //passed but just barely at 832MS faster than 5% memory usage at 90mb with less than 5% of online submissions

//var lengthOfLongestSubstring = function(s) {
//    let count = 0, maxCount = 0;
//    let hash = {};
//    s.split('').map((c, indx)=>{
////       console.log(c);
////        console.log(indx);
//        
//        for(let i = indx ; i < s.length ; i++){
//            if ( hash[s[i]]===undefined ) {
//                count++;
//                hash[s[i]] = s[i];
//            } else {
//                i = s.length;
//            }
////            console.log(c);
////            console.log(c + " - " + s[i+1]);
//
////            if(hash[s[i]]===undefined){
////                count++;
////                hash[s[i]] = true;
//////                console.log(s[i]);
//////                console.log(hash);
////            } else {
//////                hash[c] = true;
////                if(maxCount <= hash.length+1){maxCount = hash.length+1}
//////                console.log(console.log(hash));
////                hash = [];
////                count = 0;
////                console.log("break");
//////                break;
////            }
//        }
//        if(maxCount <= Object.keys(hash).length){
//            maxCount = Object.keys(hash).length
//        }
////        console.log(hash);
////        console.log(hash.length);
//        hash = {};
//        count++;
//    });
//        return maxCount;
//    
//    
//};
//own attempt number 3?  //slight boosted up to 30% speed..

//var lengthOfLongestSubstring = function(s) {
//    let maxCount = 0;
//    const set = new Set();
//        
//    for(let j = 0 ; j < s.length ; j++){
//        for(let i = j ; i < s.length ; i++){
//            if ( !set.has(s[i]) ) {
//                set.add(s[i]);
//            } else {
//                i = s.length;
//            }
//        }
//        if(maxCount < set.size){
//            maxCount = set.size
//        }
//        set.clear();
//    }
//    return maxCount;
//};



//after looking at leetcode solution... decided to see if I could implement like they do but with JS.  //I think I did but this solution takes so long it doesnt even submit.. O(n^3);
//
//var lengthOfLongestSubstring = function(s) {
//    let ans = 0;
//    for(let i = 0 ; i < s.length ; i++){
//      for(let j = i + 1; j <= s.length ; j++){
//          if(allUnique(s, i, j)) ans = Math.max(ans, j - i);
//          
//      }
//    }
//    return ans;
//};
//
//function allUnique(s, start, end){
//    const set = new Set();
//    for (let i = start; i < end ; i++){
//        let ch = s.charAt(i);
//        if(set.has(ch)) return false;
//        set.add(ch);
//    }
//    return true;
//}


//Leetcode's "Sliding Window" Solution done instead with JS. It's very fast at 96ms beatnig 89% of submissions with 35mb beating 76%. This was tricky but if you think about it, it is what your mind does actually.
var lengthOfLongestSubstring = function(s) {
    let ans = 0, i = 0, j = 0;
    const set = new Set();
    while(i < s.length && j < s.length){
        // try to extend the range [i, j]
        // console.log("["+i+", "+j+"]");
        // console.log(s.substring(i,j));

            if (!set.has(s.charAt(j))){
                set.add(s.charAt(j++));
                ans = Math.max(ans, j - i);
                console.log(ans);
            }
            else {
                set.delete(s.charAt(i++));
            }
    }
    return ans;
};



//console.log(lengthOfLongestSubstring(" "));
//console.log(lengthOfLongestSubstring("abcabcbb"));
//console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
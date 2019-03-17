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

var lengthOfLongestSubstring = function(s) {
    let count = 0, maxCount = 0;
    let hash = {};
    s.split('').map((c, indx)=>{
//       console.log(c);
//        console.log(indx);
        
        for(let i = indx ; i < s.length ; i++){
            if ( hash[s[i]]===undefined ) {
                count++;
                hash[s[i]] = s[i];
            } else {
                i = s.length;
            }
//            console.log(c);
//            console.log(c + " - " + s[i+1]);

//            if(hash[s[i]]===undefined){
//                count++;
//                hash[s[i]] = true;
////                console.log(s[i]);
////                console.log(hash);
//            } else {
////                hash[c] = true;
//                if(maxCount <= hash.length+1){maxCount = hash.length+1}
////                console.log(console.log(hash));
//                hash = [];
//                count = 0;
//                console.log("break");
////                break;
//            }
        }
        if(maxCount <= Object.keys(hash).length){
            maxCount = Object.keys(hash).length
        }
//        console.log(hash);
//        console.log(hash.length);
        hash = {};
        count++;
    });
        return maxCount;
    
    
};



console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
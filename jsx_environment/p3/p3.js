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

const allUnique = str => {
  const set = [...new Set(str)];
  return (set.length === str.length) ? true: false;
}

const lengthOfLongestSubstring = str => {
  let result = 0,
      maxResult = 0;
  for (let i=0; i<str.length-1; i++) {
      console.log("i"+i);
    for (let j=i+1; j<str.length; j++) {
      console.log("j"+j);
      console.log(str.substring(i,j));
      if (allUnique(str.substring(i, j))) {
        result = str.substring(i, j).length;
        if (result > maxResult) {
          maxResult = result;
        }
      }
    }
  return maxResult;
  }
}






console.log(lengthOfLongestSubstring("abcabcbb"));
//console.log(lengthOfLongestSubstring("bbbbb"));
//console.log(lengthOfLongestSubstring("pwwkew"));
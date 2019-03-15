/**
 * This was my first answer to this problem 929.js - This was done on 3-15-2019.
 * @param {string[]} emails
 * @return {number}
 */


//Questions on how to make it even more efficient
//https://leetcode.com/problems/unique-email-addresses/discuss/255982/How-do-I-make-my-JavaScript-solution-even-more-efficient

var numUniqueEmails = function(emails) {
    const splitEmail = [];
    const set1 = new Set();
    let index = 0;
    
    for(let i = 0 ; i < emails.length ; i++){
        splitEmail[0] = emails[i].substring(0, emails[i].indexOf("@"));
        splitEmail[1] = emails[i].substring(emails[i].indexOf("@"), emails[i].length);
        splitEmail[0] = splitEmail[0].replace(/\./g,'');
//        (splitEmail[0].indexOf("+")!=-1) ? index = splitEmail[0].indexOf("+") : false;
        (splitEmail[0].indexOf("+")!=-1) ? splitEmail[0] = splitEmail[0].substring(0, splitEmail[0].indexOf("+")) : false;
        
        emails[i] = splitEmail.join("");
        console.log(splitEmail[0]);
        console.log(splitEmail[1]);
//        console.log(emails[i]);
         set1.add(emails[i]);
        
        // emails[i] = emails[i].replace(/\+.*?\@\s?/g, '');
//        for( let j = 0 ; j < emails.length ; j++){
//            set1.add(emails[i]); //didn't realize I didn't need this in another loop. The outer loop already does the job
//        }
//        console.log(set1.size);

    }
    return set1.size;
};


//After seeing leetcode's python solution... //actually made it slower because split is hard to deal with.

//var numUniqueEmails = function(emails) {
////    const splitEmail = [];
//    let index = 0;
//    const set1 = new Set();
//    
//    for(let i = 0 ; i < emails.length ; i++){
//        
//        const splitEmail = emails[i].split("@");
//        
//        
//        
//        splitEmail[0] = splitEmail[0].replace(/\./g,'');
//        (splitEmail[0].indexOf("+")!=-1)?splitEmail[0] = splitEmail[0].substring(0, splitEmail[0].indexOf("+")):false;
//        emails[i] = splitEmail.join("");
////        console.log(splitEmail);
////        console.log(splitEmail[1]);
//        console.log(emails[i]);
//         
//        
//        for( let j = 0 ; j < emails.length ; j++){
//            set1.add(emails[i]);
//        }
//
//    }
//    return set1.size;
//};





console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]));
//console.log(numUniqueEmails(["testemail@leetcode.com","testemail1@leetcode.com","testemail+david@lee.tcode.com"]));
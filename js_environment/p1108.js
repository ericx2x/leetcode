/**
 * @param {string} address
 * @return {string}
 * TODO: had to use google. Try to do the problem over from scratch. with no guidance. TODO: look up other solutions.
 */
var defangIPaddr = function(address) {
  return address.replace(/\./gi,"[.]")
};


//Super easy solved in 2 mins with Runtime: 52 ms, faster than 72.95% of JavaScript online submissions for Defanging an IP Address.
//Memory Usage: 34.1 MB, less than 100.00% of JavaScript online submissions for Defanging an IP Address.

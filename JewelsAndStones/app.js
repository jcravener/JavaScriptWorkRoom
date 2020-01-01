/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
// Copied from someone else' LeetCode submission 
var numJewelsInStones = function(J, S) {
    
    var regex = new RegExp(`[${J}]`, 'g')
    var res = S.match(regex) || [];

    return res.length;

};

//  O(n**2) solution just to practice JavaScript syntax
var numJewelsInStonesIt = function(J, S) {

    var count = 0;

    for(var i = 0; i < J.length; i++) {
        c = J.charAt(i);
        for(var j = 0; j < S.length; j++) {
            cc = S.charAt(j);
            
            if(c === cc) {
                count++
            }

        }
    }
    return count;
};

J = "aA";
S = "aAAbbbb";

var r = numJewelsInStones(J, S);
console.log(r)
var r = numJewelsInStonesIt(J, S);
console.log(r)
/**
 * 
 * @param {string} address 
 * @return {string}
 * 
 */
// Just a copy of someon else' LeetCode solution to practice JavaScript
var defangIPaddr = function(address) {
    var result = "";

    for(var i=0; i< address.length;i++) {
        if(address[i] === ".")
            result += "[.]";
        else
            result += address[i]
    }

    return result;
}

var a = "192.168.1.1"
r = defangIPaddr(a)
console.log(r)
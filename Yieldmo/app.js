
function isBallanced(matrix) {

    let stk = []
    let opn = "("

    if(matrix.length == 0) {
        return false
    }

    for(let r of matrix) {
        for(let e of r) {
            if(e === opn) {
                stk.push(opn)
            }
            else {
                if(stk.length == 0) {
                    return false
                }
                else{
                    stk.pop()
                }
            }
        }
    }

    if(stk.length == 0) {
        return true
    }
    else {
        return false
    }
}

let m0 = []  // false
let m1 = [["(","("],
          [")",")"]]; // true
let m2 = [[")","(",")"],
          ["(","(",")"]]; // false
let m3 = [["(","(",")"],
          ["(",")",")"]]; // true
let m4 = [["(","(",")"],
          ["(",")",")"],
          ["(","(","("]]; // false
let m5 = [[")",")",")"],
          [")",")",")"]]; // false
let m6 = [["(","(","("],
          [")",")",")"]]; // true
let m7 = [[")","(","("],
          [")","(","("]]; // false
let m8 = [["(","(","(","("],
          [")","(",")","("],
          [")",")",")",")"]]; // true

console.log(isBallanced(m0))
console.log(isBallanced(m1))
console.log(isBallanced(m2))
console.log(isBallanced(m3))
console.log(isBallanced(m4))
console.log(isBallanced(m5))
console.log(isBallanced(m6))
console.log(isBallanced(m7))
console.log(isBallanced(m8))


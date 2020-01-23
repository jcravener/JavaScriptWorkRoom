
/*

    Given a URL return a corresponding url template
    If called multiple times, will over time return
    the corresponding urls at an **weighted** random distribution.

*/

function abTest(fromUrl) {

    if(fromUrl === "") {
        return null
    }

    var Url = fromUrl.slice(1)

    var d = { 
        home : [["/h1",7],["/h2",4],["/h3",6]],
        settings : [["/s1",10],["/s2",11]],
        acounts : [["/a1", 22]]
    }

    var mx = 0

    // get total weight for all url templates
    for(let i = 0; i < d[Url].length; i++) {
        mx += d[Url][i][1]
    }

    // get random number between 0 and total weight
    var rand = Math.floor((Math.random() * mx))
    var cum = 0

    // calulate cumulative weight and compare to random number
    // to find out what bucket the url template is in
    for(let i = 0; i < d[Url].length; i++) {
        cum += d[Url][i][1]
        if(rand < cum) {
            return [d[Url][i][1], d[Url][i][0]]
        }
    }

    return null
}

var n = 0
while(n < 1000) {
    console.log(abTest("/home"))
    n++
}

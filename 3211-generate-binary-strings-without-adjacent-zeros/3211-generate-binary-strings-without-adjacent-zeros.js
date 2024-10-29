/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function(n) {
    let arr = ["0", "1"];
    while(n>1){
        let temp = [];
        for(const x of arr){
            temp.push(x+"1");
            if(x[x.length-1] === "1") temp.push(x+"0");
        }
        arr = temp;
        n--;
    }
    return arr;
};
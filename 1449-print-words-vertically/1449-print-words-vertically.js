/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function(s) {
    let str = s.split(" ");
    let res = [];
    while (str.join("") !== ""){
        let sum = "";
        for(let i=0; i<str.length; i++){
            if(str[i][0] === undefined) sum += " ";
            else{
                sum += str[i][0];
                str[i] = str[i].slice(1);
            }
        }
        res.push(sum.trimEnd());
    }
    return res;
};
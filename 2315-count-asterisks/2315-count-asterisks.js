/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let asterisks = 0;
    s = s.split('|');
    for(let i=0; i<s.length; i++){
        if(i === 0 || i%2 ===0){
            for(let j=0; j<s[i].length; j++){
                if(s[i][j]==='*') asterisks++;
            }
        }
    }
    return asterisks;
};
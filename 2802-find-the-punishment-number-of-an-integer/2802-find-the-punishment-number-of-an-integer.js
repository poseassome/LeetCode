/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function(n) {
    function isValid(sq, pos, sum, val) {
        if(pos >= sq.length) return sum === val;
        for (let i=0; i+pos<sq.length; i++) {
            const curVal = parseInt(sq.substring(pos, pos+i+1));
            if(isValid(sq, pos+i+1, sum+curVal, val)) return true;
        }
        return false;
    }
    let punishmentNumber = 0;
    for(let i=1; i<=n; i++) {
        const sq = (i*i).toString();
        if(isValid(sq, 0, 0, i)) punishmentNumber += i*i;
    }
    return punishmentNumber;
};
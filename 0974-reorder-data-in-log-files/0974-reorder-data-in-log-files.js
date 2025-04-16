/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    const digits = [], words = [];
    for(const x of logs){
        const first = x.split(' ')[1];
        if(!isNaN(parseInt(first))) digits.push(x);
        else words.push(x);
    }
    words.sort((a,b) => {
        const n = a.split(' ').splice(1).join(' ');
        const m = b.split(' ').splice(1).join(' ');
        const compare = n.localeCompare(m);
        return compare === 0 ? a.localeCompare(b) : compare;
    })
    return words.concat(digits);
};
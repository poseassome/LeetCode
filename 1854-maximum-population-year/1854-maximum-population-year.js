/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
    let sH = new Map();
    let cnt = -Infinity, year = -Infinity;
    logs.forEach(el => {
        for(let i=el[0]; i<el[1]; i++){
            sH.set(i, (sH.get(i) || 0) + 1);
        }
    });
    let keys = [...sH.keys()].sort();
    keys.forEach(el => {
        const count = sH.get(el);
        if(count > cnt){
            year = el;
            cnt = count;
        }
    });
    return year;
};
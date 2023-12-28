/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let obj = {}, cnt = 0;
    for(let i=1; i<rings.length; i+=2){
        const rod = rings[i];
        if(obj[rod]) obj[rod] += rings[i-1];
        else obj[rod] = rings[i-1];
    }
    const val = Object.values(obj);
    for(let i=0; i<val.length; i++){
        if(val[i].includes('R') && val[i].includes('G') && val[i].includes('B')) cnt++;
    }
    return cnt;
};
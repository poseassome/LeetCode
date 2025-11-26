/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    const queue = [...senate];
    let minusR = 0;
    let minusD = 0;
    while(queue.length){
        let s = queue.shift();
        if(s === 'R' && minusR > 0){
            minusR--;
            continue;
        } else if(s === 'D' && minusD > 0){
            minusD--;
            continue;
        }
        if(queue.every(el => el === s)) return s === 'R' ? 'Radiant' : 'Dire';
        queue.push(s);
        s === 'R' ? minusD++ : minusR++ ;
    } 
};
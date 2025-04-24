/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let res = [];
    for(let i=0; i<boxes.length; i++){
        let cnt = 0;
        for(let j=0; j<boxes.length; j++){
            if(i === j) continue;
            if(boxes[j] === '1') cnt += Math.abs(i-j);
        }
        res.push(cnt);
    }
    return res;
};
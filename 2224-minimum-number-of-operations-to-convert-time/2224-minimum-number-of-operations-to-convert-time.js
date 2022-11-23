/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function(current, correct) {
    let cnt = 0;
    const [currentHH, currentMM] = current.split(':').map((el) => Number(el));
    const [correctHH, correctMM] = correct.split(':').map((el) => Number(el));
    
    cnt += correctHH - currentHH;
    let diff = correctMM - currentMM;
    
    if(correctMM < currentMM){
        cnt -= 1;
        diff += 60;
    }
    if(diff >= 15){
        cnt += Math.floor(diff/15);
        diff = diff%15;
    }
    if(diff >= 5){
        cnt += Math.floor(diff/5);
        diff = diff%5;
    }
    if(diff > 0) cnt += diff;

    return cnt;
};
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    let arr = [];
    const count = num => {
        return Number(num).toString(2).split('').filter(el => el === '1').length;
    }
    
    for(let hour=0; hour<12; hour++){
        for(let min=0; min<60; min++){
            if(count(hour)+count(min) === turnedOn){
                if(min<10) min = '0'+min;
                arr.push(`${hour}:${min}`);
            }
        }
    }
    return arr;
};
/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function(batteryPercentages) {
    let num = 0;
    for(const x of batteryPercentages){
        if(x-num > 0) num++;
    }
    return num;
};
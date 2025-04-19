/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let key = keysPressed[0];
    let longestPress = releaseTimes[0];
    for(let i=1; i<releaseTimes.length; i++){
        if(releaseTimes[i]-releaseTimes[i-1] > longestPress){
            longestPress = releaseTimes[i] - releaseTimes[i-1];
            key = keysPressed[i];
        } else if(releaseTimes[i]-releaseTimes[i-1] === longestPress && keysPressed[i] > key) key = keysPressed[i];
    }
    return key;
};
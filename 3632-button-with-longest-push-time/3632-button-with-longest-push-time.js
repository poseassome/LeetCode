/**
 * @param {number[][]} events
 * @return {number}
 */
var buttonWithLongestTime = function(events) {
    let [button, diff] = events[0];
    for(let i=1; i<events.length; i++){
        const [curButton, curTime] = events[i], [_, prevTime] = events[i-1];
        const curDiff = curTime-prevTime;
        if(curDiff > diff || (curDiff === diff && curButton < button)){
            diff = curDiff;
            button = curButton;
        }
    }
    return button;
};
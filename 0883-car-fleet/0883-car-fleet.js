/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let paired = position.map((el, idx) => [el, speed[idx]]);
    paired.sort((a, b) => b[0] - a[0]);
    
    let cnt = 0;
    let stack = [];
    for(let i=0; i<paired.length; i++){
        const [pos, spd] = paired[i];
        const time = (target-pos)/spd;
        if(stack.length === 0 || time > stack[stack.length-1]){
            cnt++;
            stack.push(time);
        }
    }
    return cnt;
};
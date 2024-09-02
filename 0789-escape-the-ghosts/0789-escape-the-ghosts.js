/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function(ghosts, target) {
    const [tX, tY] = target;
    const position = Math.abs(tX) + Math.abs(tY);
    for(let i=0; i<ghosts.length; i++){
        const [gX, gY] = ghosts[i];
        const gPosition = Math.abs(gX-tX) + Math.abs(gY-tY);
        if(gPosition <= position) return false;
    }
    return true;
};
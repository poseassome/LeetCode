/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
    let leftToRight = true;
    let remaining = n;
    let step = 1;
    let head = 1;

    while (remaining > 1) {
        if(leftToRight || remaining%2) head += step;
        remaining = Math.floor(remaining / 2);
        step *= 2;
        leftToRight = !leftToRight;
    }
    return head;
};
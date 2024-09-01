/**
 * @param {number} m
 * @param {number} n
 * @param {number[]} horizontalCut
 * @param {number[]} verticalCut
 * @return {number}
 */
var minimumCost = function(m, n, horizontalCut, verticalCut) {
    let cost = 0;
    horizontalCut.sort((a,b) => a-b);
    verticalCut.sort((a,b) => a-b);
    let sumH = horizontalCut.reduce((acc, cur) => acc+cur, 0);
    let sumV = verticalCut.reduce((acc, cur) => acc+cur, 0);
    while(horizontalCut.length && verticalCut.length){
        const lastH = horizontalCut[horizontalCut.length-1];
        const lastV = verticalCut[verticalCut.length-1];
        if(lastH > lastV){
            cost += (lastH+sumV);
            sumH -= horizontalCut.pop();
        } else {
            cost += (lastV+sumH);
            sumV -= verticalCut.pop();
        }
    }
    return cost + sumH + sumV;
};
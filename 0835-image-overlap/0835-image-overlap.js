/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {
    const img1Val = [], img2Val = [], len = img1.length;
    const map = new Map();
    for(let i=0; i<len; i++){
        for(let j=0; j<len; j++){
            img1[i][j] && img1Val.push({row: i, col: j});
            img2[i][j] && img2Val.push({row: i, col: j});
        }
    }
    img1Val.forEach(el1 => {
        img2Val.forEach(el2 => {
            const offsetKey = `${el1.row - el2.row}-${el1.col - el2.col}`;
            map.set(offsetKey, (map.get(offsetKey) || 0) + 1);
        })
    })
    return Math.max(...map.values(), 0);
};
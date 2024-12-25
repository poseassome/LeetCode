/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
    const set = new Set();
    let valid = 0;
    const traverse = (row, col) => {
        const key = `${row}-${col}`;
        if(set.has(key)) return;
        set.add(key);
        for(const [x, y] of stones){
            if(row === x || col == y) traverse(x, y);
        }
    }
    for(const [x, y] of stones){
        const key = `${x}-${y}`;
        if(set.has(key)) continue;
        traverse(x, y);
        valid++;
    }
    return stones.length - valid;
};
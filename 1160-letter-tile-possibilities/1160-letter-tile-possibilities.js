/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    const DFS = arr => {
        let sum = 0;
        for(let i=0; i<26; i++){
            if(arr[i] === 0) continue;
            sum++;
            arr[i]--;
            sum += DFS(arr);
            arr[i]++;
        }
        return sum;
    }

    let cnt = new Array(26).fill(0);
    for(const x of tiles){
        cnt[x.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }
    return DFS(cnt);
};
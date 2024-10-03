/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function(n) {
    let cnt = 0;
    const visited = Array(n+1).fill(false);
    const permute = idx => {
        if(idx > n) cnt++;
        for(let i=1; i<=n; i++){
            if(visited[i]) continue;
            if(i%idx && idx%i) continue;
            visited[i] = true;
            permute(idx+1);
            visited[i] = false;
        }
    }
    permute(1);
    return cnt;
};
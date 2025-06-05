/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function(boxGrid) {
    const m = boxGrid.length, n = boxGrid[0].length;
    const rotated = Array.from({length:n}, () => Array(m).fill(''));
    for(let i=0; i<m; i++){
        let empty = n-1;
        for(let j=n-1; j>=0; j--){
            if(boxGrid[i][j] === '*') empty = j-1;
            else if(boxGrid[i][j] === '#'){
                boxGrid[i][j] = '.';
                boxGrid[i][empty] = '#';
                empty--;
            }
        }
    }
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            rotated[j][m-1-i] = boxGrid[i][j];
        }
    }
    return rotated;
};
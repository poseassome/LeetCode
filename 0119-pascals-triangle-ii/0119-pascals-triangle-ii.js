/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let arr = [];
    if(rowIndex === 0){
        arr.push(1);
        return arr;
    }
    if(rowIndex === 1){
        arr.push(1, 1);
        return arr;
    }
    for(let i=0; i<=rowIndex; i++){
        arr[0] = 1;
        for(let j=i-1; j>0; j--){
            arr[j] = arr[j] + arr[j-1];
        }
        arr[i] = 1;
    }
    return arr;
};
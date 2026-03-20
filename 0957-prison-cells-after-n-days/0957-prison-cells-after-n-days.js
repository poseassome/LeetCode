/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, n) {
    let arr = [];
    let k = 0;
    let map1 = new Map(), map2 =new Map();
    for(let i=1; i<=n; i++){
        k++;
        s = '0';
        arr[0] = 0;
        for(let j=1; j<7; j++){
           if(cells[j-1] === cells[j+1]) arr[j] = 1;
           else arr[j] = 0;
           s += arr[j];
        }
        arr[7] = 0;
        s += 0;
        cells = arr;
        arr = [];
        if(map1.has(s)) i = n+1;
        else {
            map1.set(s);
            map2.set(k,s );
        }
    };
    if(k < n){
        let res =[];
        let y = n % (k-1);
        if(y === 0) y = k-1;
        let str = map2.get(y);
        for(const x of str){
            res.push(+x);
        }
        return res;
    } else return cells;
};
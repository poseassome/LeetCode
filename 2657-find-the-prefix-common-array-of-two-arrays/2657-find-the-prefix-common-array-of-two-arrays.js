/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    let Aset = new Set(), Bset = new Set(), common = new Set();
    let cnt = 0, res = [];
    A.map((el, idx) => {
        Aset.add(el);
        Bset.add(B[idx]);
        if(Aset.has(B[idx]) && !common.has(B[idx])){
            cnt++;
            common.add(B[idx]);
        }
        if(Bset.has(el) && !common.has(el)){
            cnt++;
            common.add(el);
        }
        res.push(cnt);
    })
    return res;
};
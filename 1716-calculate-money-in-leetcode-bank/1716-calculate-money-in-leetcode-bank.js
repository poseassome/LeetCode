/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let answer = 0;
    let add = 1;
    let mon = 1;
    for(let i=1; i<=n; i++){
        answer += add;
        add++;
        if(i%7 === 0){
            mon++;
            add = mon;
        }
    }
    return answer;
};
/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function(money, children) {
    let res = -1;
    money -= children;
    if(money >= 0) res = 0;
    while(money > 6){
        money -= 7;
        res++;
        if(money > 0 && children === res){
            res--;
            money += 7;
            break;
        }
    }
    if(money ===3 && children-res === 1)res--;
    return res;
};
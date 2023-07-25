/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function(mainTank, additionalTank) {
    let travel = 0;
    while(mainTank > 0){
        travel++;
        mainTank--;
        if(travel !== 0 && travel%5 === 0 && additionalTank-- > 0) mainTank++;
    }
    return travel*10;
};
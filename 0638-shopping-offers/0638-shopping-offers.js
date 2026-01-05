/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function(price, special, needs) {
    const map = new Map();
    const minCost = (needs) => {
        const key = needs.join(',');
        if (map.has(key)) return map.get(key);
        let cost = 0;
        for(let i=0; i<price.length; i++){
            cost += price[i] * needs[i];
        }
        for(const offer of special){
            const newNeeds = [];

            for(let i=0; i<price.length; i++){
                if(needs[i] < offer[i]) {
                    newNeeds.length = 0;
                    break;
                }
                newNeeds.push(needs[i] - offer[i]);
            }
            if(newNeeds.length > 0){
                cost = Math.min(cost, offer[offer.length-1] + minCost(newNeeds));
            }
        }
        map.set(key, cost);
        return cost;
    }

    return minCost(needs);
};
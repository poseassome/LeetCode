/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
    let step = 0, temp = capacity;
    for(let i=0; i<plants.length; i++){
        if(plants[i] <= capacity) {
            step++;
            capacity -= plants[i];
        } else {
            capacity = temp;
            let idx = i-1;
            let riverFill = idx - (-1);
            step += riverFill;
            let canFillStep = Math.abs(-1 -i);
            step += canFillStep;
            capacity -= plants[i];
        }
    }
    return step;
};
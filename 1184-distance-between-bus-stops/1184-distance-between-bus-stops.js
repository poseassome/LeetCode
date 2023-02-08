/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    if(start>destination) [start, destination] = [destination, start];
    const sum = distance.reduce((acc, cur) => acc+cur);
    const path = distance.slice(start, destination).reduce((acc, cur) => acc+cur);
    return Math.min(path, sum-path);
};
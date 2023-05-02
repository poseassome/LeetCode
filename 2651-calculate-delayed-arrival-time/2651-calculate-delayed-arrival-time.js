/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
    let delay = arrivalTime+delayedTime;
    return delay >= 24 ? delay-24 : delay;
};
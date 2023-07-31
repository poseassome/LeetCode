/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    const arrival = Math.max(Date.parse(arriveAlice), Date.parse(arriveBob));
    const leave = Math.min(Date.parse(leaveAlice), Date.parse(leaveBob));
    const day = 1000*60*60*24;
    return arrival > leave ? 0 : ((leave-arrival)/day)+1;
};
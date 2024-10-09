/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
    meetings.sort((a,b) => a[0]-b[0]);
    let day = 0;
    for(let i=0; i<meetings.length; i++){
        const [start, end] = meetings[i];
        if(start > day) days -= (end - start + 1);
        else if(end > day) days -= (end - day);
        day = Math.max(end, day);
    }
    return days;
};
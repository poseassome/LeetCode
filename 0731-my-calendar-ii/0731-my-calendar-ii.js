
var MyCalendarTwo = function() {
    this.calendar = [];
    this.overlaps = [];
};

/** 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(startTime, endTime) {
    for(const date of this.overlaps){
        if(startTime < date[1] && endTime > date[0]) return false;
    }
    for(const date of this.calendar){
        if(startTime < date[1] && endTime > date[0]){
            this.overlaps.push([Math.max(date[0], startTime), Math.min(date[1], endTime)]);
        }
    }
    this.calendar.push([startTime, endTime]);
    return true;
};

/** 
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(startTime,endTime)
 */
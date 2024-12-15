
var MyCalendar = function() {
    this.event = [];
};

/** 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendar.prototype.book = function(startTime, endTime) {
    for(const x of this.event){
        if(x[0] < endTime && x[1] > startTime) return false;
    }
    this.event.push([startTime, endTime]);
    return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(startTime,endTime)
 */
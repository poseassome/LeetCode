/**
 * @param {number} n
 */
var SeatManager = function(n) {
    this.seatArrays = []
    for(let i=0; i<n; i++){
        this.seatArrays.push(n-i);
    }
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function() {
    return this.seatArrays.pop();
};

/** 
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function(seatNumber) {
    for(let i=this.seatArrays.length-1; i>=0; i--){
        if(seatNumber<this.seatArrays[i]){
            this.seatArrays.splice(i+1, 0, seatNumber);
            return;
        }
    }
    this.seatArrays.push(seatNumber);
};

/** 
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */
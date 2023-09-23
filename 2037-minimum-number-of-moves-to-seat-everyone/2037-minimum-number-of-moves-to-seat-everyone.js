/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    let sortedSeats = seats.sort((a,b) => a-b);
    let sortedStudents = students.sort((a,b) => a-b);
    let moves = 0;
    for(let i=0; i<sortedStudents.length; i++){
        moves += Math.abs(sortedSeats[i]-sortedStudents[i]);
    }
    return moves;
};
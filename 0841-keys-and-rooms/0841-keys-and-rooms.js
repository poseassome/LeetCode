/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let visit = new Set();
    const DFS = (r, idx) => {
        visit.add(idx);
        const room = rooms[idx];
        for(const x of room){
            if(!visit.has(x)) DFS(r, x);
        }
    }
    DFS(rooms, 0);
    return visit.size === rooms.length;
};
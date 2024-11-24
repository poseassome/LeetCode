/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    let queue = new Array(people.length);
    people.sort((a,b) => a[0] === b[0] ? a[1]-b[1] : a[0]-b[0]);
    for(const p of people){
        let val = p[0], place = p[1];
        for(let i=0; i<=place; i++){
            queue[i] && queue[i][0] < val && place++;
        }
        if(queue[place]){
            while(queue[place]) place++;
            queue[place] = p;
        } else queue[place] = p;
    }
    return queue;
};
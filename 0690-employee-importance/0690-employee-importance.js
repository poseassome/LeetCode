/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    let total = 0;
    const next = id => employees.filter(el => el.id === id)[0];
    let queue = [next(id)];
    while(queue.length){
        const cur = queue.shift();
        total += cur.importance;
        for(const id of cur.subordinates){
            queue.push(next(id));
        }
    }
    return total;
};
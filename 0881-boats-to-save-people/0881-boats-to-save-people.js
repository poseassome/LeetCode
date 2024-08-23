/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let cnt = 0;
    people.sort((a,b) => a-b);
    let num1 = 0, num2 = people.length-1;
    while(num1 <= num2){
        if(people[num1] + people[num2] <= limit) num1++;
        num2--;
        cnt++;
    }
    return cnt;
};
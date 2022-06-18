/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let arr = new Array(num_people).fill(0);
    let i = 0;
    let candy = 1;
    while (candies>0) {
        arr[i] += candies-candy >= 0 ? candy : candies;
        candies -= candy;
        candy++;
        i++;  
        if (i===num_people) i = 0;
    }
    return arr;
};
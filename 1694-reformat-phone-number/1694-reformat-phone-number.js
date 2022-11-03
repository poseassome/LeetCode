/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
    let answer = [];
    number = number.replace(/[^0-9]/g, '');

    while(number.length > 4){
        answer.push(number.substring(0, 3));
        number = number.substring(3);
    }
    if(number.length === 4){
        answer.push(number.substring(0, 2));
        number = number.substring(2);
        answer.push(number);
    } else {
        answer.push(number);
    }
    return answer.join('-');
};
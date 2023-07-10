/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    const letter = coordinates.charCodeAt(0)-96;
    const number = coordinates[1];
    let letterBool = false, numberBool = false;
    
    if(letter%2 === 0) letterBool = true;
    if(number%2 === 0) numberBool = true;
    
    if(letterBool === numberBool) return false;
    else return true;
};
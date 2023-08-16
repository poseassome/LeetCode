/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function(length, width, height, mass) {
    const BULKY_THRESHOLD = 10000;
    const HEAVY_THRESHOLD = 100;
    const VOLUME_THRESHOLD = 1000000000;
    
    let isBulky = length >= BULKY_THRESHOLD || width >= BULKY_THRESHOLD || height >= BULKY_THRESHOLD || length*width*height >= VOLUME_THRESHOLD;
    let isHeavy = mass >= HEAVY_THRESHOLD;
    if(isBulky && isHeavy) return "Both";
    else if(isBulky) return "Bulky";
    else if(isHeavy) return "Heavy";
    else return "Neither";
};





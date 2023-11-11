/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function(initialEnergy, initialExperience, energy, experience) {
    let minHours = 0;
    for(let i=0; i<energy.length; i++){
        if(initialEnergy < energy[i]+1){
            const requiredEnergy = energy[i]+1 - initialEnergy;
            minHours += requiredEnergy;
            initialEnergy += requiredEnergy;
        }
        if(initialExperience < experience[i]+1){
            const requiredExp = experience[i]+1 - initialExperience;
            minHours += requiredExp;
            initialExperience += requiredExp;
        }
        initialExperience += experience[i];
        initialEnergy -= energy[i];
    }
    return minHours;
};
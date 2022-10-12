/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function(password) {
    if(password.length < 8) return false;
    if(!/\d/.test(password)) return false;
    if(!/[a-z]/.test(password)) return false;
    if(!/[A-Z]/.test(password)) return false;
    if(/(.)\1/.test(password)) return false;

    const specials = new Set('!@#$%^&*()-+');
    let hasSpecial = false;
    for(const x of password) {
        if(specials.has(x)) {
            hasSpecial = true;
            break;
        }
    }
    if(!hasSpecial) return false;
    return true;
};
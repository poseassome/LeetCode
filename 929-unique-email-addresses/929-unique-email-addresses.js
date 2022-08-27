/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let arr = [];
    for (let i=0; i<emails.length; i++) {
        let splitEmail = emails[i].split("@");
        let username = splitEmail[0].replace(/\./g, '').split('+')[0];
        let fullEmail = `${username}@${splitEmail[1]}`;
        if(arr.indexOf(fullEmail) === -1) arr.push(fullEmail);
    }
    return arr.length;
};
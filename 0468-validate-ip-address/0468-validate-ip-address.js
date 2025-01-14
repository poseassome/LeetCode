/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function(queryIP) {
    const ipv4_regex = /^(?!.*\b0\d)([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.([0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
    const ipv6_regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
    if(ipv4_regex.test(queryIP)) return "IPv4";
    if(ipv6_regex.test(queryIP)) return "IPv6";
    return "Neither";
};
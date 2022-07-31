/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    const day = date.split(' ')[0].replace(/[^0-9]/g, '');
    const formatDate = new Date(day+date.split(' ')[1]+date.split(' ')[2]);
    return formatDate.getFullYear()+'-'+(formatDate.getMonth()+1).toString().padStart(2,'0')+'-'+formatDate.getDate().toString().padStart(2,'0');
};
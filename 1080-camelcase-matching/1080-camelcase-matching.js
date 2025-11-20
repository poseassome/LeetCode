/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function(queries, pattern) {
    const isUppercase = str => /[A-Z]/g.test(str);
    const isCamelMatch = query => {
        let a = b = 0;
        while(a < query.length && b < pattern.length){
            const target = query[a];
            const value = pattern[b];
            if(isUppercase(target) && target !== value) return false;
            if(target === value) b++;
            a++;
        }
        return b === pattern.length && !isUppercase(query.slice(a));
    };
    return queries.map(el => isCamelMatch(el));
};
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let visitCnt = {};
    for(let i=0; i<cpdomains.length; i++){
        const [visits, domains] = cpdomains[i].split(" ");
        let subdomains = domains.split(".");
        while(subdomains.length){
            let subdomain = subdomains.join(".");
            visitCnt[subdomain] = visitCnt.hasOwnProperty(subdomain) ? Number(visitCnt[subdomain])+Number(visits) : visits;
            subdomains.shift();
        }
    }
    
    return Object.keys(visitCnt).map(el => `${visitCnt[el]} ${el}`);
};
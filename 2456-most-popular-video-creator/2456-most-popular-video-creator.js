/**
 * @param {string[]} creators
 * @param {string[]} ids
 * @param {number[]} views
 * @return {string[][]}
 */
var mostPopularCreator = function(creators, ids, views) {
    const creatorsSum = {}, mostViewed = {};
    let maxViews = 0;
    for(let i=0; i<creators.length; i++){
        const c = creators[i];
        creatorsSum[c] = (creatorsSum[c] || 0) + views[i];
        maxViews = Math.max(maxViews, creatorsSum[c]);
        if(mostViewed[c] === undefined) mostViewed[c] = i;
        const j = mostViewed[c];
        if(views[i] > views[j] || (views[i] === views[j] && ids[i] < ids[j])) mostViewed[c] = i;
    }
    const res = [];
    for(const x in creatorsSum){
        if(creatorsSum[x] === maxViews) res.push([x, ids[mostViewed[x]]]);
    }
    return res;
};
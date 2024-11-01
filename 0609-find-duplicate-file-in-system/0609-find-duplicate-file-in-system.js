/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    const map = new Map();
    for(const path of paths){
        const [dir, ...files] = path.split(' ');
        for(const file of files){
            const [start, end] = [file.indexOf('(')+1, file.lastIndexOf(')')];
            const content = file.slice(start, end);
            const fileName = file.slice(0, start-1);
            if(map.has(content)){
                const fileList = map.get(content) || [];
                fileList.push(dir+'/'+fileName);
                map.set(content, fileList);
            } else map.set(content, [dir+'/'+fileName]);
        }
    }
    const res = [...map.values()].filter(el => el.length>1);
    return [...res];
};
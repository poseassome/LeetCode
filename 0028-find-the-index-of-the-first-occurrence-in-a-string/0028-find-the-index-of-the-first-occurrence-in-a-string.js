/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // 정규식 생성 (생성자 함수 방식)
    const reg = new RegExp(needle);
    // 주어진 문자열에서 일치 탐색을 수행한 결과를 배열 혹은 null로 반환 (일치하는 첫 번째 값 반환)
    const match = reg.exec(haystack);
    if(!match) return -1;
    return match.index;
};
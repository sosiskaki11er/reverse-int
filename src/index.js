module.exports = function reverse (n) {
    let intStr = '' + Math.abs(n);
    let newStr = '';
    for (let i = 1; i <= intStr.length; i++) {
        newStr += intStr[intStr.length-i];
    }
    return +newStr;
}

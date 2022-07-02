module.exports = function reverse (n) {
let newInt='';
let intStr=number.toString();
for(let i=1;i<=number.toString().length;i++){
newInt=newInt+intStr[intStr.length-i];
}
return +(Number(newInt));
}

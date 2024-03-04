const hmm = [5, 10, [11, 12, [1, 2, 3]], 14, [15, 16]];

let allArr = [];
let countArr = 0 ;
const takeAllArr = (arr) => {
console.log(arr);
console.log(allArr);
console.log(countArr);
if(!arr.length){
console.log(allArr);
console.log(countArr);
if(countArr > 0){
const chotam = allArr ;
allArr = [];
countArr = 0 ;
return takeAllArr(chotam);
} else {
return allArr ;
}
} else {
if(!Array.isArray(arr[0])){
allArr.push(arr[0]);
arr.splice(0, 1);
takeAllArr(arr);
} else {
countArr++ ;
allArr.push(...arr[0]);
arr.splice(0, 1);
takeAllArr(arr);
}
}
}


takeAllArr(hmm);

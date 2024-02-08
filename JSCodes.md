const array = [1,1,2,3,4,5,5,6];

function Duplicate(arr){
let map = new Map();
let newArray = [];
for(let i=0 ; i<arr.length ; i++){
if(!map.has(arr[i])){
newArray.push(arr[i])
}
map.set(arr[i], i)
}

return newArray
}

console.log(Duplicate(array))

const array2 = ['a', 'b', 'a', 'b', 'c'];

function Repeat(arr){
let obj = {};
for(let i=0 ; i<arr.length ; i++){
obj[arr[i]]= obj[arr[i]]+ 1 || 1
}

return Object.entries(obj).filter((item)=> item[1]=== 1)[0]
}

console.log(Repeat(array2));

function flat(arr, depth = Infinity){
let newArray = [];
for(let i = 0 ; i< arr.length ;i++){
if(Array.isArray(arr[i]) && depth > 0 ){
newArray.push(...flat(arr[i],depth--))
}else{
newArray.push(arr[i]);
}
}
return newArray
}

console.log(flat([[1,2,3], 4, 5, 6]));

const string = 'Niteesh';

function Reverse(str){
let s = ''
if(str.length === 0 ){
return ''
}

s = Reverse(str.substring(1)) + str[0]

return s
}

console.log('Niteesh'.substring(1), Reverse(string))

function Reverselong(str){
let s = '';
let newstr= '';
for(let i = str.length -1 ; i >=0 ; i--){
if(str[i] ==' '){
newstr =s + " " + newstr;
s = ''
}else if(i=== 0){
s = s+ str[i];
newstr = s+ " " + newstr;
}

s = s + str[i];
}

return newstr.trim();
}

console.log(Reverselong('Niteesh varma Gandraju loves you'));

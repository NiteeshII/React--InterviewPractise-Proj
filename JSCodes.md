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

function stocksbuy(arr){
let least = arr[0];
let highest= arr[0];
for(let i = 1 ; i < arr.length ;i++){
if(arr[i] < least){
least = arr[i];
highest = least;
}

if(arr[i] > highest){
 highest = arr[i]
}
}

return [least , highest]
}

console.log(stocksbuy([7,1,5,3,6,4]));

--------------------------------------------------------------------

const Throtlling = (fn , delay)=> {
let flag = true;
return function(){
if(flag){
fn();
flag = false;
setTimeout(()=> {
flag = true;
}, delay)
}
}
}

const throttle = Throtlling(()=> console.log('niteesh'), 2000);
const unorder = document.getElementById('keys');

unorder.addEventListener('scroll', ()=> {
throttle();
})
// html Code 
<uL id="keys">
<li>key1</li>
<li>key1</li>
<li>key1</li>
<li>key1</li>
<li>key1</li>
<li>key1</li>
<li>key1</li>
</uL>
// css
ul{
  height: 100px;
  overflow-y: scroll;
}

--------------------------------------------------------------------------


/ Sorting Related/


const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function BubbleSort(arr){
let temp;
for(let i=0 ;i < arr.length; i++){
for(let j=0 ; j < arr.length ; j++){
if(arr[j] > arr[j+1]){
temp = arr[j];
arr[j]= arr[j+1];
arr[j+1]= temp;
}
}
}
return arr
}

 console.log(BubbleSort(numbers)) 

function selectionSort(arr){
let temp;
let min;
for(let i = 0 ; i < arr.length -1 ; i++){
temp =arr[i];
min = i;
for(let j= i+1 ; j< arr.length ; j++){
if(arr[j] < arr[min]){
min = j
}
}
arr[i]= arr[min];
arr[min] = temp
}
return arr
}

 console.log(selectionSort(numbers)) 


function InsertionSort(arr){
let temp;
let j;
for(let i = 1 ; i< arr.length ; i++){
temp =arr[i];
j=i-1
while(j>=0 && arr[j] > temp){
arr[j+1]= arr[j];
j=j-1
}

arr[j+1]= temp;
}

return arr
}

console.log(InsertionSort(numbers))

----------------------------------------------------------------------

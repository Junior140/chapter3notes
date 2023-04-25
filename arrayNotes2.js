//Arrays are 'pass by reference'
//This means you can accidentally change an array
//if you change another array that its equal to

let nums = [5, 4, 3, 2, 1];
let newNums = nums;
newNums[0] = 12;
console.log('nums: '+ nums);
console.log('newNums:'+ newNums);

//option 1: Use a for loop to push individual items
//into a new array , one at a time
let vals = [5, 4, 3, 2, 1];
let newvals = [];
for (let i = 0; i < vals.length; i++){
    newVals.push(vals[i]);
}
newVals[0]=12;
console.log('vals: '+newVals);

//option 2: Make a shallow copy
//Note: only works for id arrays
//NOTE: you cannot edit items as you copy them over
let ages = [5, 4, 3, 2, 1];
let newAges = [...ages];
newAges[0]=12;
console.log('ages: '+ages);
console.log('newAges:'+newAges);

//let's write a function to do the above
function compareArrays(arr){
    let newVals = [];
    for (let)
}
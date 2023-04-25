//1 + 2
let vals = [1, 2, 3, 4, 5, 6, 7]
let newVals = []
for (let i=0; i<vals.length; i++){
    newVals.push(vals[i]);
}
newVals[0]=-2
if (newVals[0] < 1){
    console.log('invalid');
} else {
    console.log(newVals)
}



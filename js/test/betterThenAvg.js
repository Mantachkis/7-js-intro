function betterThanAverage(classPoints, yourPoints) {
let sum=0;
let avg=0;


for(var i=0; i<classPoints.length; i++){
    sum+=classPoints[i];
    }
    //console.log(sum);
    avg = sum / (classPoints.length-1)
    console.log(classPoints.length);
    //console.log(avg);
    //console.log(yourPoints);
if(avg<yourPoints){
    return true}
else{return false}

}

console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90],9));
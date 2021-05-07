function positiveSum(arr) {
    let sum = 0;
    for(var i=0; i <= arr.length; i++){
     
      if ( arr[i] >=0){
        console.log(arr);  
        sum = sum + arr[i]}
    }
    return sum
  }


console.log(positiveSum([]));
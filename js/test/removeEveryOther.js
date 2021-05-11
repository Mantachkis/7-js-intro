  function removeEveryOther(arr){
    let newArr=[];
    
    for( var i = 0; i < arr.length; i+=2){ 
         console.log(i);
         newArr.push(arr[i]);
  
  }
 return newArr
}

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
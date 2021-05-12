function howMuchILoveYou(nbPetals) {
    const arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    
   for (var i=0; i<=nbPetals-1; i++){
       
 if( i==nbPetals-1)
 return arr[i%6]   
   }
 
 
}
console.log(howMuchILoveYou(7));
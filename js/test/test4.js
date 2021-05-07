function strCount(str, letter) 
{
  
 let letterCount = 0;
 for (var i = 0; i < str.length; i++) 
 {
    if (str[i] == letter) 
      {
      letterCount += 1;
      
      }
     
  }
  return letterCount; 
  

}


console.log(strCount('Hello', 'o'));
console.log(strCount('Hello', 'l'));
function strCount(str, letter) 
{
 let letterCount = 0;
 for (var i = 0; i < str.length; i++) 
 {
    if (strCount.charAt(i) == letter) 
      {
      strCount += 1;
      }
  }
  return strCount;

}


console.log(strCount('Hello'));
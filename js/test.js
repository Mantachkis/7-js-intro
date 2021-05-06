

// if(true){}
// for(  ; true ; ){}
// while(true){}
// function(kintamasis){}


   function check(a, x) 
{
  //  console.log("ka tu");
  for (let i = 0; i <= a.length; i++)
    {
    //  console.log(i);
      if (a[i] == x){
         return true;
        }  
    }
    return false;
 }

 var test=[55, 44, 32];
       console.log([66, 101],66, check([66, 101], 66));
       console.log( check([66, 101], 101));
       console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45))
       console.log(check(['t', 'e', 's', 't'], 'e'))
      console.log( check(['what', 'a', 'great', 'kata'], 'kat'))


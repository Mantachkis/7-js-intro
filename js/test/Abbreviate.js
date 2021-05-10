function abbrevName(name){
   let newName=name.split(" ");
   
    
let x="";
let y="";
    x= newName[0].charAt(0).toUpperCase();
    y= newName[1].charAt(0).toUpperCase();
    
     return x + '.' + y;
   }


   console.log(abbrevName("Sam Harris"));
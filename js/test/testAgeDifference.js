function differenceInAges(ages){
    let old=0;
    let young=100;
   
  
    for (var i = 0; i < ages.length; i++) {
       // console.log(i);
        
       if (ages[i] > old   ){ 
           old = ages[i];
       }
       if( ages[i]< young ) {young = ages[i]}
       
    }
    let mid=old - young;
    console.log(old);
    answer = [young, old, mid];

    return  answer;
       }
      

    
  
  
  

  console.log(differenceInAges([82, 15, 6, 38, 35]));
function countSheeps(arrayOfSheep) {
    let avis = 0;
    for(let i = 0; i < arrayOfSheep.length; i++)
     {
        if(arrayOfSheep[i]) {
        avis += 1
        }
  
    }
    return avis;
  }

  var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];
function noBoringZeros(n) {
    let strN=n.toString();
    let newN= strN.split("");
    console.log(strN);

    if(newN[0]===0){
        return newN.join('')
    }

    for(var i=newN.length - 1 ; i>0;i--)
    {
        
        if(newN[i]==0)
        {
           newN.splice(i,1);
        }
        else{
            return newN.join('')
        }
    }
    


  }


  console.log(noBoringZeros(960000));
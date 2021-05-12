function noBoringZeros(n) {
    let strN=n.toString();
    let newN= strN.split("");
    console.log(strN);

    if(newN[0]==0){
        return parseInt(newN.join(''))
    }

    for(var i=newN.length - 1 ; i>0;i--)
    {
        
        if(newN[i]==0)
        {
           newN.splice(i,1);
        }
        else{
            return parseInt(newN.join(''))
        }
    }
    


  }


  console.log(noBoringZeros(-105));
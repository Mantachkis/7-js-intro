function noBoringZeros(n) {
    let strN=n.toString();
    let newN= strN.split("");
    console.log(strN);

    for(var i=newN.length - 1 ; i>0;i--)
    {

        if(newN[i]==0)
        {
           newN.splice(i,1);
         
        }
    }
    


  }


  console.log(noBoringZeros(960000));
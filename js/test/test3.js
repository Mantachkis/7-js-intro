
function arrayMadness(a, b) 

{
  let suma=0;
  let sumb=0;
        for (let i = 0; i < a.length; i++) {
             suma += a[i]**2;
            console.log(suma);
        }
        for (let z=0; z<b.length;z++){
            sumb += b[z]**3
            console.log(sumb);
        }
        if (suma>sumb){return true}
        else{return false}

  }






console.log(arrayMadness([1,1,1],[1,2,3]));
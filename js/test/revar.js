function digitize(n) {
  let strN=n.toString();
  let newN= strN.split("");
  console.log(strN);
  let reverse=[];
    
    for (let i = 0; i < strN.length; i++) {
     console.log(i);
     reverse.shift(newN[i]);

    }
   
      console.log(reverse);
    }

    console.log(digitize(35231));
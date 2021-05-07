function tripleTrouble(one, two, three){

let newset='';

for (let i = 0; i < one.length; i++) {
    newset += one.charAt(i) + two.charAt(i) + three.charAt(i);
  }
  return newset;
}

  



console.log(tripleTrouble("this","test","lock"));
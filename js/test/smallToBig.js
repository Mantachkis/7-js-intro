function assertEquals(text) {
let result="";
var newText = text.split('');
//console.log(newText);

for(var i=0;i<text.length;i++){
   // console.log(i);
if (newText[i]== newText[i].toUpperCase()){
    result+=newText[i].toLowerCase();
   // console.log(result);
}
else{
   result+= newText[i].toUpperCase();
   //console.log(result);
}

  }
  return result
}


  console.log(assertEquals("hello WORLD"));




function correctPolishLetters (text) {

    let newString='';
    let i = text.length;

    for (let z = 0; z < i; z++) {
        const element = text[z];
         if (text [z] === 'ą') {
             newString += 'a';
         }
        else if (text [z] === 'ć' ) {
             newString += 'c';  
         } 
         else if (text [z] === 'ę' ) {
            newString += 'e';  
        } 
        else if (text [z] === 'ł' ) {
            newString += 'l';  
        } 
        else if (text [z] === 'ń' ) {
            newString += 'n';  
        } 
        else if (text [z] === 'ó' ) {
            newString += 'o';  
        } 
        else if (text [z] === 'ś' ) {
            newString += 's';  
        } 
        else if (text [z] === 'ź' ) {
            newString += 'z';  
        } 
        else if (text [z] === 'ż' ) {
            newString += 'z';  
        } 
         else{
        newString += text[z];}
             
         }
        
 return newString;
           }
        
        

console.log(correctPolishLetters('Jędrzej Błądziński'));

/*
function correctPolishLetters (text) {
    console.log(text);
    let newString = "";
    for (let i = 0; i < text.length; i++) {
  console.log(text[i]);

        switch (text [i]) {
            case 'ą' :
                 newString += 'a';
                  break;
            
            case 'ć' :
                newString += 'c'; 
                 break;
            
            case 'ę' : newString += 'e'; break;
           
            case 'ł' : newString += 'l'; break; 
            
            case 'ń' : newString += 'n'; break;
          
            case 'ó' : newString += 'o'; break;
            
            case 'ś' : newString += 's'; break;
           
            case 'ź' : newString +='z'; break;
           
            case 'ż' : newString += 'z'; break;
            default:
            newString += text[i];
            
           }
       
        } 
        
        return newString;
      
    }
    console.log(correctPolishLetters('Jędrzej Błądziński'));

*/
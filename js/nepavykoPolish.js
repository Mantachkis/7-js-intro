



function correctPolishLetters (string) {
    let pol = ['ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż'];
    let eng = ['a', 'c', 'e', 'l', 'n', 'o', 's', 'z', 'z'];
    
    for (const i of string) {
    console.log(i);
         if (string [i] === pol [i]); {
             string[i] === eng[i];
             console.log(i);
             
         }

           }
          // console.log(i);
        }

console.log(correctPolishLetters('Jędrzej Błądziński'));
/*  
function correctPolishLetters (string) {
    for (const i of string) {
    console.log(i);
     
        switch (i) {
            case 'ą' : 'a';break;
            case 'ć' : i = 'c'; break;
            case 'ę' : string[i] = 'e'; break;
            case string[i]='ł' : string[i]= 'l';
            case string[i]='ń' : string[i]= 'n';
            case string[i]='ó' : string[i]= 'o';
            case string[i]='ś' : string[i]= 's';
            case string[i]='ź' : string[i]= 'z';
            case string[i]='ż' : string[i]= 'z';
            break;
          
           }
           
        } 
      
    }
    console.log(correctPolishLetters('Jędrzej Błądziński'));


*/
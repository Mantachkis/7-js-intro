
function getDrinkByProfession(param){

let newString='';
let param2 = param.toLowerCase();



    
        
         if (param2 == "Jabroni".toLowerCase()) {
             newString += "Patron Tequila";
         }
        else if (param2 == "School Counselor".toLowerCase() ) {
             newString += "Anything with Alcohol";  
         } 
         else if (param2 == "Programmer".toLowerCase() ) {
            newString += "Hipster Craft Beer";  
        } 
        else if (param2 == "Bike Gang Member".toLowerCase() ) {
            newString += "Moonshine";  
        } 
        else if (param2 == "Politician".toLowerCase() ) {
            newString += "Your tax dollars";  
        } 
        else if (param2 == "Rapper".toLowerCase() ) {
            newString += "Cristal";  
        } 
        
         else{
        newString += "Beer";}
             
         
        
 return newString;
        }

console.log(getDrinkByProfession("jabrOni"));
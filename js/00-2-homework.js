//         Ciklo for panaudojimas

//Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
//0 - 4
const nuo=0;
const iki=4;
let sum=0

for (let i = nuo  ; i <= iki ; i++) {
    sum += i;
    
}
console.log(sum);


//0 - 100
var i=0;
const nuo2 = 0;
const iki2 = 100;
var number = null;

for (; i <= iki2 ;) {
  number += i;
  i++;
}
console.log(number);
//0 - 0

var count=null;
 const start=0;
 var end=100;
 var x=0;
 for(start in end){
     count += x;
     x++;
 }
 console.log(count);








//574 - 815

//-50 - 50

//-70 - 30


//panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
//pvz.: “abcdef” -> “fedcba”


const tekstas = 'abcdef';
let reverse = '';

for (let i = tekstas.length - 1; i >= 0; i--) {
    reverse += tekstas[i];
}

console.log(tekstas, '->', reverse);


console.log('----------' );


const tekstas1 = 'abcdef';
let reversed = "";
for (let value of tekstas1) {
  reversed = value + reversed;
}

console.log(tekstas1 , '->', reversed);


console.log('----------' );



const tekstas2 = 'abcdef';
let reversed2 = "";

for (let a = tekstas2.length - 1 ; a >= 0; a--) {
 reversed2 += tekstas2[a];
    
}
console.log(reversed2);


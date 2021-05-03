
//1. Kintamųjų inicijavimas

/*Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console */

const pirmasSkaicius = 99;
console.log(pirmasSkaicius);
const antrasSkaicius = 99;
console.log(antrasSkaicius);
const treciasSkaicius = 99;
console.log(treciasSkaicius);

console.log('--------------------');

/*  Sukurti 3 kintamuosius su teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console  */

const pirmasTekstas = 'Man';
console.log(pirmasTekstas);
const antrasTekstas = 'Patinka';
console.log(antrasTekstas);
const treciasTekstas = 'JS';
console.log(treciasTekstas);

console.log('--------------------');

/*Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console */
const pirmasSarasas = [1, 2, 4, 8, 9];
console.log(pirmasSarasas);
const antrasSarasas = [10, 20, 40, 80, 90];
console.log(antrasSarasas);
const treciasSarasas = [100, 200, 400, 800, 900];
console.log(treciasSarasas);

console.log('--------------------');

/*Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console */

const pirmasTekstoSarasas = ['Vienas', 'Du', 'Trys','Keturi', 'Penki'];
console.log(pirmasTekstoSarasas);
const antrasTekstoSarasas = ['One', 'Two', 'Three', 'Four', 'Five'];
console.log(antrasTekstoSarasas);
const treciasTekstoSarasas = ['En', 'To', 'Tre', 'Fire', 'Fem'];
console.log(treciasTekstoSarasas);

console.log('--------------------');

//2. Veiksmai su kintamaisiais

/*Susumuoti visus skaičiaus tipo kintamuosius
Rezultatą išvesti į consol */

const sumSkaiciai = pirmasSkaicius + antrasSkaicius +treciasSkaicius;
console.log(sumSkaiciai);


console.log('--------------------');


/*Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
Rezultatą išvesti į console */

const sakinys = pirmasTekstas + ' ' + antrasTekstas + ' ' + treciasTekstas;
console.log(sakinys);


console.log('--------------------');

/*  Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
1-2+3-4+5
Rezultatą išvesti į console
 */

const pirmosarasoSum = pirmasSarasas[0] - pirmasSarasas[1] + pirmasSarasas[2] - pirmasSarasas[3] + pirmasSarasas[4];
console.log(pirmosarasoSum);


const antrosarasoSum = antrasSarasas[0] - antrasSarasas[1] + antrasSarasas[2] - antrasSarasas[3] + antrasSarasas[4];
console.log(antrosarasoSum);

const treciosarasoSum = treciasSarasas[0] - treciasSarasas[1] + treciasSarasas[2] - treciasSarasas[3] + treciasSarasas[4];
console.log(treciosarasoSum);

console.log('--------------------');
/*Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas */

const pirmasSakinys= pirmasTekstoSarasas[0] + ', ' + pirmasTekstoSarasas[1] + ', ' + pirmasTekstoSarasas[2] + ', ' + pirmasTekstoSarasas[3] + ', ' + pirmasTekstoSarasas[4];
console.log(pirmasSakinys);

const antrasSakinys= antrasTekstoSarasas[0] + ', ' + antrasTekstoSarasas[1] + ', ' + antrasTekstoSarasas[2] + ', ' + antrasTekstoSarasas[3] + ', ' + antrasTekstoSarasas[4];
console.log(antrasSakinys);

const treciasSakinys= treciasTekstoSarasas[0] + ', ' + treciasTekstoSarasas[1] + ', ' + treciasTekstoSarasas[2] + ', ' + treciasTekstoSarasas[3] + ', ' + treciasTekstoSarasas[4];
console.log(treciasSakinys);


console.log('--------------------');
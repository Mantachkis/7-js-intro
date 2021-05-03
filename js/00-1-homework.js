
//1. Kintamųjų inicijavimas

/*Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console */

const pirmasSkaicius = 99;
console.log(pirmasSkaicius);
const antrasSkaicius = 100;
console.log(antrasSkaicius);
const treciasSkaicius = 80;
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

//3. Kintamųjų palyginimas

/*Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”,
 o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.*/

/*Tarpusavyje palyginti skaičiaus tipo kintamuosius:
kuris didesnis */
if (pirmasSkaicius > antrasSkaicius) {
    console.log('Pomidoras');
  } else {
      console.log('Bandykite kita karta');
  }

  if (antrasSkaicius < treciasSkaicius) {
    console.log('Pomidoras');
  } else {
      console.log('Bandykite kita karta');
  }
  
console.log('--------------------');
/*kuris mažesnis*/
if (pirmasSkaicius < antrasSkaicius) {
    console.log('Pomidoras');
  } else {
      console.log('Bandykite kita karta');
  }

  if (antrasSkaicius < treciasSkaicius) {
    console.log('Pomidoras');
  } else {
      console.log('Bandykite kita karta');
  }
  
console.log('--------------------');
/*ar jie lygūs*/

if (pirmasSkaicius == antrasSkaicius) {
    console.log('Pomidoras');
  } else {
      console.log('Bandykite kita karta');
  }

  if (antrasSkaicius == treciasSkaicius) {
    console.log('Pomidoras');
  } else {
      console.log('Bandykite kita karta');
  }
  
console.log('--------------------');


/*ar jie nelygūs*/
if (pirmasSkaicius != antrasSkaicius) {
    console.log('Pomidoras');
  } else {
      console.log('Bandykite kita karta');
  }

  if (antrasSkaicius != treciasSkaicius) {
    console.log('Pomidoras');
  } else {
      console.log('Bandykite kita karta');
  }
  
console.log('--------------------');


/*kuris didesnis arba lygus*/
if (pirmasSkaicius <= antrasSkaicius) {
    console.log('Pomidoras');
  } else {
      console.log('Bandykite kita karta');
  }

  if (antrasSkaicius <= treciasSkaicius) {
    console.log('Pomidoras');
  } else {
      console.log('Bandykite kita karta');
  }
  
console.log('--------------------');

/*kuris mažesnis arba lygus*/

if (pirmasSkaicius >= antrasSkaicius) {
    console.log('Pomidoras');
  } else {
      console.log('Bandykite kita karta');
  }

  if (antrasSkaicius >= treciasSkaicius) {
    console.log('Pomidoras');
  } else {
      console.log('Bandykite kita karta');
  }
  
console.log('--------------------');

///Išvesti teksto tipo kintamųjų ilgius

const pirmasIlgis= pirmasTekstas.length;
console.log(pirmasIlgis);

const antrasIlgis= antrasTekstas.length;
console.log(antrasIlgis);

const treciasIlgis= treciasTekstas.length;
console.log(treciasIlgis);

//Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
//kuris didesnis
if (pirmasIlgis > antrasIlgis) {
    console.log('Pomidoras');
  } else {
      console.log('Bandykite kita karta');
  }

  if (antrasIlgis > treciasIlgis) {
    console.log('Pomidoras');
  } else {
      console.log('Bandykite kita karta');
  }
  
console.log('--------------------');

//kuris mažesnis

if (pirmasIlgis < antrasIlgis) {
    console.log('Pomidoras');
  } else {
      console.log('Bandykite kita karta');
  }

  if (antrasIlgis < treciasIlgis) {
    console.log('Pomidoras');
  } else {
      console.log('Bandykite kita karta');
  }
  
console.log('--------------------');
//ar jie lygūs
if (pirmasIlgis == antrasIlgis) {
    console.log('Pomidoras');
  } else {
      console.log('Bandykite kita karta');
  }

  if (antrasIlgis == treciasIlgis) {
    console.log('Pomidoras');
  } else {
      console.log('Bandykite kita karta');
  }
  
console.log('--------------------');

//ar jie nelygūs

if (pirmasIlgis != antrasIlgis) {
    console.log('Pomidoras');
  } else {
      console.log('Bandykite kita karta');
  }

  if (antrasIlgis != treciasIlgis) {
    console.log('Pomidoras');
  } else {
      console.log('Bandykite kita karta');
  }
  
console.log('--------------------');
//kuris didesnis arba lygus
if (pirmasIlgis >= antrasIlgis) {
    console.log('Pomidoras');
  } else {
      console.log('Bandykite kita karta');
  }

  if (antrasIlgis >= treciasIlgis) {
    console.log('Pomidoras');
  } else {
      console.log('Bandykite kita karta');
  }
  
console.log('--------------------');
//kuris mažesnis arba lygus

if (pirmasIlgis <= antrasIlgis) {
    console.log('Pomidoras');
  } else {
      console.log('Bandykite kita karta');
  }

  if (antrasIlgis <= treciasIlgis) {
    console.log('Pomidoras');
  } else {
      console.log('Bandykite kita karta');
  }
  
console.log('--------------------');
//Išvesti sąrašo tipo kintamųjų ilgius

const pirmasSarasoIlgis= pirmasTekstas.length;
console.log(pirmasSarasoIlgis);

const antrasSarasoIlgis= antrasTekstas.length;
console.log(antrasSarasoIlgis);

const treciasSarasoIlgis= treciasTekstas.length;
console.log(treciasSarasoIlgis);

//Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
//kuris didesnis
//kuris mažesnis
//ar jie lygūs
//ar jie nelygūs
//kuris didesnis arba lygus
//kuris mažesnis arba lygus



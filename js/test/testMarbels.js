function guessBlue(blueStart, redStart, bluePulled, redPulled) {

    let chance = (blueStart -bluePulled) / (bluePulled + redPulled);

    console.log(chance);

    return chance;

   
}

console.log(guessBlue(5, 5, 2, 3));
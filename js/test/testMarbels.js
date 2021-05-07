function guessBlue(blueStart, redStart, bluePulled, redPulled) {

   var chance = (blueStart - bluePulled) / ((blueStart - bluePulled) + (redStart - redPulled));
    return chance;
}

console.log(guessBlue(12, 18, 4, 6));
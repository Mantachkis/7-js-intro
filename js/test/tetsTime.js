function past(h, m, s){
    let hMs = 0;
    let mMs = 0;
    let sMs = 0;
    let timeMs = 0;
    
    hMs += h * 60 * 60 * 1000;
    mMs += m * 60 * 1000;
    sMs += s * 1000;
    timeMs += hMs + mMs + sMs;
    return timeMs;
  }

  console.log(past(0,1,1));
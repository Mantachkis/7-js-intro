function testObject(text)
   
    let testUp= /[A-Z]/;
    let testLow=/[a-z]/;
    for (let i = 0; i < text.length; i++) {
        if (text[i]=testUp.test(text)) {
            return text[i].toLowerCase();
        }
        else{return text[i].toUpperCase()}
        


    }
   




  }


  console.log(testObject("hello WORLD"));
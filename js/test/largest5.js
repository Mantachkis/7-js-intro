function solution(digits){
    numbers = '1234567890';
    let answer = 0;
    let newNum = 0;
    
    for (let i=0; i<numbers.length; i++){
        
      let newNum = numbers.substr(5, 10);  
      if (newNum > answer){      
        answer = newNum;
      }
    }
   return answer
  }

  console.log(solution(1234567890));
function solution(number){
    const arr=[]
    for (i=0;i<number;i++){
      if(i%3 == 0){
        arr.push(i)}
      else if(i%5==0){
        
        arr.push(i)}
      else{    }
      }
      const som = arr.reduce((partialSum, a) => partialSum + a, 0)
      console.log(som)
      }

      console.log(solution(10))
const readline = require('readline-sync');
const { questionInt } = readline;

const fibbo = () => {

  const arr = [0,1]
  let i = 0;
  let sum = 0;
  const n = questionInt("pick a number ");

  while ( i <  n - 2 )
  {
    for(j = 0; j < arr.length; j++){
      if(!(arr[j+1])){
        sum += arr[j] + arr[j-1];
      }
    } 
    arr.push(sum);
    sum = 0;
    i++;
  }

  console.log(arr);

}
fibbo();
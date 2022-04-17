const readline = require('readline-sync');
const { questionInt } = readline;
const sorteio = () => {
  const guest = questionInt('Adivinhe o numero 1 a 10 ');
  const sort = Math.floor(Math.random() * 10);
  sort === guest ? console.log(`vc ganhooo \n`) : (console.log(`era ${sort} rsrsrs`) );
}

module.exports = sorteio;
const readline = require('readline-sync');
const { questionFloat } = readline;

const velocidadef = () => {
  const distancia = questionFloat('Qual a distancia percorrida? (m)');
const tempo  = questionFloat('Qual o tempo ? (s)');
const velocidade = (distancia / tempo).toFixed(2);
console.log(`a velocidade média do percurso foi de ${velocidade} M/S` );
}

module.exports = velocidadef
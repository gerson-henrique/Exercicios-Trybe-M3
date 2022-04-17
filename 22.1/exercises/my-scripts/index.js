const readline = require('readline-sync');
const { questionInt } = readline;
const guest = questionInt('qual função executar ? (1 - 3)');
switch (guest) {
  case 1:
    const IMC = require('./IMC')
    IMC();
    break;
    case 2:
      const vel = require('./velocidade')
      vel();
      break;
      case 3:
        const sort = require('./sorteio')
        sort();
        break;

  default:
    console.log('NUMERO INVALIDO, AUTO DESTRUIÇÂO ONLINE')
    break;
}
const yourNumberIs = (a) => {
  if (typeof a !== 'number') return 'O parâmetro deve ser um número.';
  if (a === 0 ) return 'Neutro';
return ( a > 0 ? 'Positivo' : 'Negativo');
}


module.exports = yourNumberIs
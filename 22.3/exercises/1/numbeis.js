const yourNumberIs = (a) => {
  if (a === 0 ) return 'Neutro';
return ( a > 0 ? 'Positivo' : 'Negativo');
}


module.exports = yourNumberIs
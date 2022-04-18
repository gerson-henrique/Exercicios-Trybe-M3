const calcularDivisao = (n1, n2) => {
  if (n2 == 0) throw new Error('Não pode ser feita uma divisão por Zero');
  const result = n1 / n2;
  return result;
}

try {
const resultado = calcularDivisao(2,0);
console.log(`result = ${resultado}`);
} catch (e) {
console.log(`error = ${e.message}`)
}
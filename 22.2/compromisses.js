const calcularDivisao = (n1, n2) => {
  const promise = new Promise((resolve,reject) => {
    if(n2 == 0 ) reject(Error,"Não divizão por zero");
    const result = n1 / n2;
    resolve(result)
  });

  return promise;
}
calcularDivisao(2,0)
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message));
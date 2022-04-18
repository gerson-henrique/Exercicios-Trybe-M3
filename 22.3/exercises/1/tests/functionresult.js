const { expect } = require('chai');
const numberIs = require("../numbeis")

describe("Sobre Parametros", () => {
  it('retorno é uma string', () => {
    expect(numberIs(1)).to.be.a('String');
  });
})

describe("Sobre retorno", () => {
  it('retorna "Positivo" para numeros positivos', () => {
    expect(numberIs(1)).to.be.equals('Positivo');
  });

  it('retorna "Negativo" para numeros Negativo', () => {
    expect(numberIs(-1)).to.be.equals('Negativo');
  });

  it('retorna "Neutro" para numeros Neutro', () => {
    expect(numberIs(0)).to.be.equals('Neutro');
  });

  
})
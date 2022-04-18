const { expect } = require('chai');
const numberIs = require("../numbeis")

describe("Caso o parametro seja válido", () => {
  describe("O Retorno da função",() => {
  it('É uma String', () => {
    expect(numberIs(1)).to.be.a('String');
  });

  it('É "Positivo" para numeros positivos', () => {
    expect(numberIs(1)).to.be.equals('Positivo');
  });

  it('É "Negativo" para numeros Negativo', () => {
    expect(numberIs(-1)).to.be.equals('Negativo');
  });

  it('É "Neutro" para numeros Neutro', () => {
    expect(numberIs(0)).to.be.equals('Neutro');
  });
})

})

describe("Caso o parametro seja válido", () => {
  describe("O Retorno da função", () => {
    it('é uma "string"', () => {
      const resposta = numberIs('AAAA');

      expect(resposta).to.be.a('string');
    });

    it('é igual a "o parâmetro deve ser um número"', () => {
      const resposta = numberIs('AAAA');

      expect(resposta).to.be.equals('O parâmetro deve ser um número.');
    });
  });
});
const readline = require('readline-sync');
const { questionFloat } = readline;



const IMCf = () => {


const peso = questionFloat('Qual o seu peso? (em kg) ');
const altura = questionFloat('Qual a sua altura? (em metros) ');
const IMC = (peso / (altura ^ 2)).toFixed(2);




IMC < 18.5 ? ( console.log('Magreza')) : (
  IMC < 24.9 ? (console.log('Peso Normal')) : (
    IMC < 29.9 ? (console.log('sobrepeso')) :
      IMC < 34.9 ? (console.log('obesidade G1')) :
        IMC < 39.9 ? (console.log('obesidade G2')) : 
          IMC >= 40 ? console.log('obesidade G3 +'): null

  )
)

console.log(`Peso : ${peso} \n IMC : ${IMC} \n Altura : ${altura}` );

}


module.exports = IMCf ;


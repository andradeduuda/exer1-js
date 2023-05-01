/*
solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;
*/

let numberOne = prompt ("Digite o primeiro número")
let numberTwo = prompt ("Digite o segundo número")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)

/*
Bora se desafiar? 👀 🧑‍🚀
- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)
Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
*/

if(numberOne === numberTwo) {
  alert("Os números inseridos são iguais")
} else{
  alert("Os números inseridos são diferentes")

}

if (sum === 0){
    alert("O resultado da soma é um número par")
} else {
  alert("O resultado da soma é um número ímpar")
}
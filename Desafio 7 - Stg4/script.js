let isEven, isEqual

function checkEven (num1, num2) {
    if((num1+num2) % 2 == 0){
        isEven = "par"
    }
    else {
        isEven = "ímpar"
    }
}

function checkEquality (num1, num2) {
    if(num1 == num2){
        isEqual = "iguais"
    }
    else{
        isEqual = "diferentes"
    }
}
let n1= Number(prompt(`Operações matemáticas com Javascript

Escreva o primeiro número:
`)) 

let n2= Number(prompt(`Operações matemáticas com Javascript

Escreva o segundo número:
`)) 

checkEven(n1, n2)
checkEquality(n1,n2)

alert(`Números digitados: ${n1} e ${n2}
---------------------------------------
Resultados:

Soma: ${n1+n2}
Subtração: ${n1-n2}
Multiplicação: ${n1*n2}
Divisão: ${(n1/n2).toFixed(2)}
Resto da divisão: ${n1%n2}`)


alert(`Números digitados: ${n1} e ${n2}
---------------------------------------
A soma dos números é ${isEven}
Os números são ${isEqual}`)
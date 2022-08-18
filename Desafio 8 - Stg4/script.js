let students = []

function Student(name){
    this.name = name
}

let typed

while(typed != 0){
    typed = prompt("Digite o nome do aluno, ou 0 para continuar")
    if(typed != 0){
        students.push(new Student(typed))
    }   
}

for(let student of students){
    student.g1 = prompt(`Digite a primeira nota do aluno(a) ${student.name}`)
    student.g2 = prompt(`Digite a segunda nota do aluno(a) ${student.name}`)
    student.average =  ((Number(student.g1) + Number(student.g2)) / 2)
    if(student.average >= 7){
        student.approval = "aprovado(a)! Parabéns"
    }else{
        student.approval = "em recuperação :( Estude bem para prova!"
    }
}

for(let student of students){
    alert(`Resultados:
    -------------------------------
    Aluno: ${student.name}
    Nota 1: ${student.g1}
    Nota 2: ${student.g2}
    Media: ${student.average}

    ${student.name} está ${student.approval}
    `)
}   
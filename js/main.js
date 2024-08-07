function Primeiro(){
    let vetor1 = [1,2,3,4,5]
    let vetor2 = []
    for(let i = 0; i < vetor1.length; i++){
        vetor2.push(vetor1[i] * 3)
    }
    document.getElementById('resultado').innerHTML = "O resultado é " + vetor2
}
function Segundo(){
    let vetor1 = [1,2,3,4,5]
    let vetor2 = []
    let num = document.getElementById('num').value
    for(let i = 0; i < vetor1.length; i++){
        vetor2.push(vetor1[i] * num)
    }
    document.getElementById('resultado').innerHTML = "A multiplicação é: " + vetor2
}
function Terceiro(){
    let vetor1 = [1,2,3,4,5]
    let vetor2 = []
    for(let i = 0; i < vetor1.length; i++){
        vetor2.push(vetor1[i] + 7)
    }
    document.getElementById('resultado').innerHTML ="O resultado é: " + vetor2
}
function Quarto(){
    let vetor1 = [1,2,3,4,5]
    let vetor2 = []
    let num = Number(document.getElementById('num').value)
    for(let i = 0; i < vetor1.length; i++){
        vetor2.push(vetor1[i] + num)
    }
    document.getElementById('resultado').innerHTML = "A soma dos números é: " + vetor2
}
function Quinto(){
    let vetorUmTemp = document.getElementById("vetorUm").value
    let vetorUm = vetorUmTemp.split(",").map(Number)
    let vetorDoisTemp = document.getElementById("vetorDois").value
    let vetorDois = vetorDoisTemp.split(",").map(Number)
    let vetorTres = []
    for(let i = 0; i < vetorUm.length; i++){
        vetorTres.push(vetorUm[i] + vetorDois[i])
    }
    document.getElementById('resultado').innerHTML = "A soma deles são: " + vetorTres
}
function Sexto(){
    let vetorUmTemp = document.getElementById("vetorUm").value
    let vetorUm = vetorUmTemp.split(",").map(Number)
    let vetorDoisTemp = document.getElementById("vetorDois").value
    let vetorDois = vetorDoisTemp.split(",").map(Number)
    let vetorTres = []
    for(let i = 0; i < vetorUm.length; i++){
        vetorTres.push(vetorUm[i] - vetorDois[i])
    }
    document.getElementById('resultado').innerHTML = "A subtração deles é: " + vetorTres
}
function Setimo(){
    let vetorTemp = document.getElementById("vetor").value
    let vetor = vetorTemp.split(",").map(Number)
    let soma = 0;
    for(let i = 0; i < vetor.length; i++){
        soma = soma + vetor[i]
    }
    document.getElementById('resultado').innerHTML = "A soma dos números é: " + soma
}
function Oitavo(){
    let vetorTemp = document.getElementById("vetor").value
    let vetor = vetorTemp.split(",").map(Number)
    let vetorInv = []
    for(let i = vetor.length - 1; i > -1; i--){
        vetorInv.push(vetor[i])
    }
    document.getElementById('resultado').innerHTML = "De forma inversa fica: " + vetorInv
}
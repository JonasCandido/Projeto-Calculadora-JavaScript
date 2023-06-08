var visor = document.getElementById("visor")
//Insere número
function inserirnum(num){
    if (visor.innerText == "0"){
        visor.innerHTML = ""
        visor.innerHTML = num
    }
    else {
        visor.innerHTML += num
    }
}

//Adiciona ponto 
function inserirponto(ponto){
        visor.innerHTML +=  ponto
}


//Deixa apenas zero no visor
function limpar(){
    visor.innerHTML = "0"
}


//Aqui começa os problemas

//Insere operadores
function inserirop(s){
    if (visor.innerText == "0"){
        visor.innerHTML = ""
    }
    sinal = s
    visor.innerHTML += sinal
}

//Calcula e mostra números
function calcular(){
    var resultado = visor.innerHTML
    if (resultado){
    visor.innerHTML = eval(resultado)
    }
}
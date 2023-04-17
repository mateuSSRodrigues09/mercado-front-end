/* MASCARA PARA A INPUT TELEFONE */

const inputtel = document.querySelector('#tel-func')

inputtel.addEventListener('keypress', () => {
    let tellength = inputtel.value.length

    if(tellength === 0){
        inputtel.value += "("
    }else if(tellength === 3){
        inputtel.value += ") 9"
    }

    if(tellength === 11){
        inputtel.value += "-"
    }
})


/* MASCARA PARA A INPUT CPF */

const inputcpf = document.querySelector('#cpf-func')

inputcpf.addEventListener('keypress', () => {
    let cpflength = inputcpf.value.length

    if(cpflength === 3 || cpflength === 7){
        inputcpf.value += "."
    }else if(cpflength === 11){
        inputcpf.value += "-"
    }
})

/*  MASCARA PARA A INPUT RG */  

const inputrg = document.querySelector('#rg-func')

inputrg.addEventListener('keypress', () => {
    let rglength = inputrg.value.length


})

/* OLHAR SE ESTÁ VAZIO AS INPUTS GERENTE */
const inpnome = document.querySelector('.inpnome')
const inptel = document.querySelector('.inptel')
const inpcpf = document.querySelector('.inpcpf')
const inprg = document.querySelector('.inprg')
const selgeren = document.querySelector('#funçao-funci')

/* ORGANIZAÇÃO BOX */



btncontinuar.addEventListener('click', () => {
    
    if(inpnome || inptel || inpcpf || inprg || selgeren === ""){
    alert('Por favor, digite todos os campos')
}else{
    boxgerente.classList.remove('active')
    boxfuncionario.classList.add('active')
}


})

function continuar(){
    const inpnome = document.querySelector('.inpnome')
    const inptel = document.querySelector('.inptel')
    const inpcpf = document.querySelector('.inpcpf')
    const inprg = document.querySelector('.inprg')
    const selgeren = document.getElementById('funçao-funci')

    const boxgerente = document.querySelector('.box-1.active')
    const boxfuncionario = document.querySelector('.box-2')
    const btncontinuar = document.querySelector('.btn-prox')

    if(inpnome.value || inptel.value || inpcpf.value || inprg.value == ""){
        alert('Por favor, digite todos os campos')
    }else if(selgeren.options[selgeren.selectedIndex].value == "" ){
        alert('Selecione o campo para continuar.')
    }
}

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


    const cadgerente = document.querySelector('.cadastro-gerente')
    const cadfuncionario = document.querySelector('.cadastro-funcionario')
    const btncontinuar = document.querySelector('.btn-prox')

    btncontinuar.addEventListener('click', () => {
        cadgerente.classList.add('active')
    })

    btncontinuar.addEventListener('click', () => {
        cadfuncionario.classList.add('active')
    })
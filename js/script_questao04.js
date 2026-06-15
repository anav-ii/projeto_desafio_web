//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#div-dados')

//CAPITURANDO O EVENTOSUBMIT DO FORMULÁRIO
formDados.addEventListener('submit' , (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

    let nota1 = parseFloat(objFormDados.get('nota1'))
    let nota2 = parseFloat(objFormDados.get('nota2'))
    let nota3 = parseFloat(objFormDados.get('nota3')) 

   
    let medianota = (nota1 + nota2 + nota3) / 3

    let situacao = ''

    if (medianota >= 6){
        situacao = ` aprovado`
    }else{
        situacao = `reprovado`
    }

    divResultado.innerHTML = `com a media ${medianota}, você esta ${situacao}` 

    divResultado.innerHTML = mediadanota
formDados.reset()

})


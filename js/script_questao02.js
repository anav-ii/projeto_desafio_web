//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario-pessoa')
const divResultado = document.querySelector('#div-dados')

//CAPITURANDO O EVENTOSUBMIT DO FORMULÁRIO
formDados.addEventListener('submit' , (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

    let largura = parseFloat(objFormDados.get('largura'))
    let altura = parseFloat(objFormDados.get('altura'))
     
    let area = largura * altura

   
    divResultado.innerHTML = `A área a ser pintada é de ${area.toFixed(2).replace
    (".",",")}m², Total de litros para piintar essa área é de ${parseFloat(area / 2)
.toFixed(2).replace(".",",")}`

formDados.requestFullscreen()

})


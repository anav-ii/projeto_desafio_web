//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#calcúlo do combustivel')
const divResultado = document.querySelector('#div-dados')

//CAPITURANDO O EVENTOSUBMIT DO FORMULÁRIO
formDados.addEventListener('submit' , (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

    let distância = parseFloat(objFormDados.get('distância'))
    let consumo = parseFloat(objFormDados.get('consumo'))
    let preço = parseFloat(objFormDados.get('preço')) 

    let area = largura * altura

   
    divResultado.innerHTML = `A distância a ser percorida ${area.toFixed(2).replace
    (".",",")}m², a quntidade de combustivelnecessário ${parseFloat(area / 2)
.toFixed(2).replace(".",",")} o valor total a pagar do combustivel ${parseFloat(valortotal)
    .toFixed(2).replace(".",",")}`

formDados.request()

})


//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#div-dados')

//CAPITURANDO O EVENTOSUBMIT DO FORMULÁRIO
formDados.addEventListener('submit' , (evt)=>{
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

    let distancia = parseFloat(objFormDados.get('distancia'))
    let consumo = parseFloat(objFormDados.get('consumo'))
    let preco = parseFloat(objFormDados.get('preco')) 

    let LitrosNecessarios = distancia / consumo;
    let ValorTotal = LitrosNecessarios * preco;

   
    divResultado.innerHTML = `quantidade de combustivel necessario ${LitrosNecessarios.toFixed(2).replace(".",",")} 
    ValorTotal a pagar R$ ${ValorTotal.toFixed(2).replace(".",",")}` 

formDados.reset()

})


console.log("teste")

console.log("comando de saida")

//comentario de linhas simples

/*
comentario de multiplas linhas,
 ou seja, posso descrever algo
 neste tipo de comentario...
*/


//criando variáveis
let num = 50
var num2 = 100
const num3 = 450

console.log(num)
console.log(num2)
console.log(num3)

if (true){
    let num4 = 420

    var num5 = 180

    console.log(num4)
    console.log(num)
}

console.log(num5)

num - 5
console.log(num)

num2 = 6 
console.log(num2)


//CONCATENAÇÃO
console.log("Valor de um" + num)
console.log("Valor de num3" , num3)
console.log("Valor de num2 $ {num2}")
console.log("a soma dos numeros" + (15 - 8))
console.log("A soma dos numeros" , 15 + 8)
console.log("A soma dos numeros ${15 + 8}")
console.log("A soma dos numeros" + num + num2)
console.log("A soma dos numeros" , num2 + 8)
console.log("A soma dos numeros ${num3 - num2}")

//OPERADORES MATEMÁTICOS
/*
   + SOMA
   - SUBTRAÇÃO
   * MULTIPLICAÇÃO
   / DIVISÃO
   % MÓDULO (RESTO DA DIVISÃO)

 */

   console.log("SOMA DAS VARIÁVEIS" , num + num2) 
   console.log("SUBTRAÇÃO DAS VARIÁVEL" , num - num) 
   console.log("MULTIPLICAÇÃO" , num5 % 2) 
   console.log("DIVISÃO DE VALORES" , num2 / 5) 
   console.log("RESTO DA DIVISÃO" , num2 % 2) 
   console.log("RESTO DA DIVISÃO ${num3 % 3}") 

   //OPERADORES RELACIONAIS
   /*
     -- IGUAL
     > MAIOR
     < MENOR
     >= MAIOR IGUAL
     <= MENOR IGUAL
     != DIFERENTE
   */
  
//OPERADORES LÓGICOS
/*
  && E
  || OU

 */

  console.log("TESTE DE RALACIONAIS ", 10 == 5)
  console.log("TESTE RELACIONAIS ", 10 != 5)
  console.log("TESTE RELACIONAIS ", 10 > 5)
  console.log("TESTE RELACIONAIS ", 10 < 5)
  console.log("TESTE RELACIONAIS ", 10 >= 5)
  console.log("TESTE RELACIONAIS ", 10 <= 5)
  console.log("TESTE LÓGICO ", (10 > 5) && (15 < 8))
  console.log("TESTE LÓGICO ", ( 10> 5) || (15 < 8)) 

  //TESTE LÓGICO
  let idade = 25
  if(idade >= 18){
    console.log('Maior de idade')
  }else{
    console.log('Menor de idade')
  }
/**
 *RENOVAÇÃO DE CNH
    MENOR QUE 18 - NÃO É PERMITIDO
    18 ATÉ 49 - 10 ANOS
    50 ATÉ 69 - 5 ANOS
    70 ACIMA - 3 ANOS
 */

    if (idade < 18){
        console.log('COM A IDADEDE ${idade}, NÃO É PERMITIDO CNH')
    }else if(idade < 50){
         console.log('COM A IDADE DE ${idade}, 10 ANOS PARA RENOVAR')
    }else if (idade < 70) {
        console.log('COM A IDDADE DE ${idade},  5 ANOS PARA RENOVAR')
    }else {
        console.log('COM  IDDADE DE ${idade}, 3 ANOS PARA RENOVAR')
    }
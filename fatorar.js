
function gerar (){
    let resposta = window.document.getElementById('resultado') // onde sera exibido a resposta
    let numeral = parseInt(window.document.getElementById('fatorar').value) //valor do input
    

        var depois = (numeral * (numeral - 1) )
        console.log(depois)
    
        while (numeral > 3) {
            var  contador = 2
            console.log(depois * (numeral - contador))
            depois = depois * (numeral - contador)
            numeral = numeral -1
            contador ++
            //resposta.innerHTML += `O resultado de ${depois} X ${numeral - contador} é = ${depois} <br>`
            
        }
        resposta.innerHTML = `O resultado final do fatorial é ${depois} <br>`   
    

}
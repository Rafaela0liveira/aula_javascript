function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
   
}
function redirecionar(){
    window.open("http://web.digitalinnovation.one/course/programacao-para-internet-com-javascript/learning/ddb54ad6-55fb-4eec-90d5-561a6010d14d");
    //window.location.href = "http://web.digitalinnovation.one/course/programacao-para-internet-com-javascript/learning/ddb54ad6-55fb-4eec-90d5-561a6010d14d";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina Carregada");
}

/*function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validade;
    if(idade>=18){
        validar = true;
    }else{
        validar = false
    }
    return; 
}

var idade = prompt("Qual sua idade?")
console.log(validaIdade(idade))
*/

//alert(soma(5,10));



/*var d = new Date();
alert(d.getMonth());
alert(d.getHours());
alert(d.getMinutes());
alert(d.getDay());
*/

/*var count;
for (count=0; count <= 5; count++){
    alert(count);
};
*/

/*var count = 0;
while (count < 5){
    console.log(count);
    count ++;
};
*/

/*var idade = prompt ("Qual sua idade ?");

if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/


/*var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxo"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/



//var lista = ["maça", "pêra", "laranja"]
//lista.push("uva")
//lista.pop();

//console.log(lista)
//console.log(lista.toString())
//console.log(lista.join(" | "))


//var nome = "Rafaela Oliveira";
//var idade = 24;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade+idade2);
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));
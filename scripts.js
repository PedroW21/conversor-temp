// Pegando os valores no html pelo css inputs

const input1 = document.getElementById("userInput");
const input2 = document.getElementById("secondInput");

// Opções

const opcao1 = document.getElementById("selecaoEscala1");
const opcao2 = document.getElementById("selecaoEscala2");


opcao1.addEventListener("input", function(){
    input1.value = "";
    input2.value = "";
    // console.log(opcao1.value);
});

opcao2.addEventListener("input", function()
{
    input1.value = "";
    input2.value = "";
    // console.log(opcao2.value)
});

input1.addEventListener("input", function(){ // colocamos um ouvido do JavaScript no html q caso ele ouça algo (alguem digitou algo ou mudou uma opção) ele atualize a variavel e nos passe;
    conversaoGeral(opcao1.value, opcao2.value)
});

function conversaoGeral(opcao1, opcao2)
{   
    let result; 
    let inputValue = parseInt(input1.value);

    // Verificacao da conversao de celsius e faren para kelvin
    if(opcao1 === "celsius" && opcao2 === "kelvin") result = celsiusToKelvin(inputValue);  
    if(opcao1 === "fahrenheit" && opcao2 === "kelvin") result = fahrenheitToKelvin(inputValue).toFixed(2);
    
    // Verificacao da conversao de celsius e kelvin para faren
    if(opcao1 === "kelvin" && opcao2 === "fahrenheit") result = kelvinToFahrenheit(inputValue).toFixed(2);
    if(opcao1 === "celsius" && opcao2 === "fahrenheit") result = celsiusToFahrenheit(inputValue)
    
    // Verificacao da conversao de faren e klevin para celsius
    if(opcao1 === "fahrenheit" && opcao2 === "celsius") result = fahrenheitToCelsius(inputValue).toFixed(2);
    if(opcao1 === "kelvin" && opcao2 === "celsius") result = kelvinToCelsius(inputValue);

    if(opcao1 === opcao2) result = "OPÇÃO INVÁLIDA";

    input2.value = result;
}

// Funções de conversão celcius e faren para kelvin

function celsiusToKelvin(dado)
{
    return dado + 273.15;
}

function fahrenheitToKelvin(dado)
{
    return ((dado-32) * 5/9) + 273.15;
}

// Funções de conversão de kelvin e celcius para faren

function kelvinToFahrenheit(dado)
{
    return ((dado-273.15) * 1.8) + 32;
}

function celsiusToFahrenheit(dado)
{
    return (dado * 1.8) + 32;
}

// Funções de conversão de faren e kelvin para celsius

function fahrenheitToCelsius(dado)
{
    return (dado - 32) / 1.8;
}

function kelvinToCelsius(dado)
{
    return dado - 273.15;
}


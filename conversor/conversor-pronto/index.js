// Pegando elementos no html
const opt1 = document.getElementById("scaleoptions1");
const opt2 = document.getElementById("scaleoptions2");
const input1 = document.getElementById("input1"); // dados inseridos pelo usuario
const input2 = document.getElementById("input2"); // onde vamos mostrar os dados

// Colocando eventos
opt1.addEventListener("input", (() => {
    input1.value = "";
    input2.value = "";
}));
opt2.addEventListener("input", (() => {
    input1.value = "";
    input2.value = "";
}));

input1.addEventListener("input", (() => options(opt1.value, opt2.value)));


function options(opt1,opt2)
{
    // console.log("I was invoked")
    // console.log(opt1)
    // console.log(opt2)

    let inputValue = parseInt(input1.value)   
    let result;

    // conversão de todos para kelvin
    if(opt1 === "celcius" && opt2 === "kelvin") result = convertCelciusToKelvin(inputValue);
    if(opt1 === "fahrenheit" && opt2 === "kelvin") result = convertFahrenheitToKelvin(input1.value).toFixed(2);

    // conversão de todos para fahrenheit
    if(opt1 === "celcius" && opt2 === "fahrenheit") result = convertCelciusToFaren(inputValue);
    if(opt1 === "kelvin" && opt2 === "fahrenheit") result = convertKelvinToFaren(inputValue).toFixed(2);
    
    // conversao de todos para celcius
    if(opt1 === "fahrenheit" && opt2 === "celcius") result = convertFarenToCelcius(inputValue).toFixed(2);
    if(opt1 === "kelvin" && opt2 === "celcius") result = convertKelvinToCelcius(inputValue);

    // em caso de pares iguais
    if(opt1 === "kelvin" && opt2 === "kelvin") result = "OPÇÃO INVÁLIDA";
    if(opt1 === "fahrenheit" && opt2 === "fahrenheit") result = "OPÇÃO INVÁLIDA";
    if(opt1 === "celcius" && opt2 === "celcius") result = "OPÇÃO INVÁLIDA";

    result = result ? result : ""; // para não aparecer NaN no campo

    //console.log(result)
    input2.value = result; 
}

function convertCelciusToKelvin(data)
{
    return data + 273.15;
}

function convertFahrenheitToKelvin(data)
{
    return ((data - 32) * 5/9) + 273.15;
}

function convertCelciusToFaren(data)
{
    return (data * 1.8) + 32;
}

function convertKelvinToFaren(data)
{
    return (data - 273.15) * 1.8 + 32
}

function convertFarenToCelcius(data)
{
    return (data - 32) / 1.8;
}

function convertKelvinToCelcius(data)
{
    return data - 273;
}
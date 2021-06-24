const btnTranslate=document.querySelector("#btn-translate");
const input=document.querySelector("#input-feild")
const outputbraille=document.querySelector("#output-braille")
const outputmorse=document.querySelector("#output-morse")
const errorMsg=document.querySelector("#errorMsg");

function translate()
{
    const urlToCall="https://api.funtranslations.com/translate/morse.json"+"?text="+input.value;
    fetch(urlToCall)
    .then(response=>response.json())
    .then(json=>
        {
            let outputText=json.contents.translated
            console.log(outputText)
            outputmorse.innerHTML=outputText;
        })
        .catch(ErrorHandler)
}

function ErrorHandler(error)
{
    alert("Something went wrong")
}

function translateBraille()
{
    const urlToCall2="https://api.funtranslations.com/translate/braille/unicode.json"+"?text="+input.value;
    fetch(urlToCall2)
    .then(response=>response.json())
    .then(json=>
    {
        let outputText=json.contents.translated.reduce((text,item)=>text+=item,"");
        console.log(outputText)
        outputbraille.innerHTML=outputText
    })
    .catch(ErrorHandler)
}

btnTranslate.addEventListener("click",function()
{
    //translateMorse(input.value);
    translate("morse")
    translateBraille();
})
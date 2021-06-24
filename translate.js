const btnTranslate=document.querySelector("#btn-translate");
const input=document.querySelector("#input-feild")
const outputbraille=document.querySelector("#output-braille")
const outputmorse=document.querySelector("#output-morse")
const errorMsg=document.querySelector("#errorMsg");

const urlmorse="https://api.funtranslations.com/translate/morse.json"
const urlbraille="https://api.funtranslations.com/translate/braille/unicode.json"

const url="https://api.funtranslations.com/translate/"
//const inputText=input.value;

// function translate(inputText)
// {
//     console.log("clicked")
//     console.log(inputText)
//     fetch(urlConstruction(inputText))
//     .then(response=>response.json())
//     .then(json=>
//         {
//             let translated=getTranslatedTextFromJson(json)
//             setOutputText(translated)
//         })
//     .catch(ErrorHandler)
// }


function translate()
{
    const urlToCall=urlmorse+"?text="+input.value;
    fetch(urlToCall)
    .then(response=>response.json())
    .then(json=>
        {
            if(json.error.code)
            {
                errorMsg.innerHTML=json.error.message;
            }
            //console.log(json.error.message);
            else{
                let translated=getTranslatedTextFromJson(json)
                console.log(translated)
                outputmorse.innerHTML=translated;
            }
            
        })
    .catch(ErrorHandler)
}

function ErrorHandler(error)
{
    alert("Something went wrong")
}

function getTranslatedTextFromJson(jsonFile)
{
    return jsonFile.contents.translated;
}

function translateBraille()
{
    const urlToCall="https://api.funtranslations.com/translate/braille/unicode.json"+"?text="+input.value;
    //console.log(urlToCall)

    fetch(urlToCall)
    .then(response=>response.json())
    .then(json=>
        {
            if(json.error.code)
            {
                errorMsg.innerHTML=json.error.message;
            }   
            else
            {
                let outputText=json.contents.translated.reduce((text,item)=>text+=item,"");
                console.log(outputText)
                outputbraille.innerHTML=outputText
            }
        })
    .catch(ErrorHandler)
}


btnTranslate.addEventListener("click",function()
{
    //translateMorse(input.value);
    translate("morse")
    //translateBraille();
})
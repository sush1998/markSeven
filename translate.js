const btnTranslate=document.querySelector("#btn-translate");
const input=document.querySelector("#input-feild")
const output=document.querySelector("#output")

const urlMorse="https://api.funtranslations.com/translate/morse.json"
const urlBraille="https://api.funtranslations.com/translate/braille.json"
//const inputText=input.value;

function translate(inputText)
{
    console.log("clicked")
    console.log(inputText)
    fetch(urlConstruction(inputText))
    .then(response=>response.json())
    .then(json=>
        {
            let translated=getTranslatedTextFromJson(json)
            setOutputText(translated)
        })
    .catch(ErrorHandler)
}

function ErrorHandler(error)
{
    console.log(error)
}

function setText(text)
{
    output.innerHTML=text;
}

function urlConstruction(textToTranslate)
{
    return url+"?text="+textToTranslate;
}

function getTranslatedTextFromJson(jsonFile)
{
    return jsonFile.contents.translated;
}


btnTranslate.addEventListener("click",function()
{
    translateMorse(input.value);
    
})
const json={
    "success": {
        "total": 1
    },
    "contents": {
        "translated": [
            "⠀",
            "⠀",
            "⠠",
            "⠋",
            "⠥",
            "⠝",
            "⠀",
            "⠠",
            "⠞",
            "⠗",
            "⠁",
            "⠝",
            "⠎",
            "⠇",
            "⠠",
            "⠝",
            "⠎",
            "⠀",
            "⠓",
            "⠁",
            "⠎",
            "⠀",
            "⠐",
            "⠎",
            "⠹",
            "⠬",
            "⠀",
            "⠿",
            "\r",
            "\n",
            "⠐",
            "⠑",
            "⠽",
            "⠐",
            "⠕",
            "⠲",
            "\r",
            "\n"
        ],
        "text": "Fun Translations has something for everyone.",
        "translation": {
            "source": "english",
            "destination": "braille unicode"
        }
    }
}

function printJson(json)
{
    let translated=json.contents.translated.reduce((text,item)=>text+=item,"");
    console.log(translated)
}

printJson(json);
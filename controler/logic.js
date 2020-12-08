// Code to be moved to Controler file.
var morse_code_alphabet = {
    "a": " .- ",
    "b": " -... ",
    "c": " -.-. ",
    "d": " -.. ",
    "e": " . ",
    "f": " ..-. ",
    "g": " --. ",
    "h": " .... ",
    "i": " .. ",
    "j": " .--- ",
    "k": " -.- ",
    "l": " .-.. ",
    "m": " -- ",
    "n": " -. ",
    "o": " --- ",
    "p": " .--. ",
    "q": " --.- ",
    "r": " .-. ",
    "s": " ... ",
    "t": " - ",
    "u": "  ..- ",
    "v": " ...- ",
    "w": " .-- ",
    "x": " -..- ",
    "y": " -.-- ",
    "z": " --.. ",    
    " ": "  ",
    "1": " .---- ",
    "2": " ..--- ",
    "3": " ...--",
    "4": " ....- ",
    "5": " ..... ",
    "6": " -.... ",
    "7": " --... ",
    "8": " ----.. ",
    "9": " ----. ",
    "0": " ----- ",
    ",": " --..-- ",
    ".": " .-.-.- ",
    "?": " ..--.. ",
    ";": " -.-.- ",
    ":": " ---... ",
    "/": " -..-. ",
    "-": " -....- ",
    "'": " .----. ",
    "(": " -.--. ",
    ")": " -.--.- ",
    "_": " ..--.- ",
    "@": " .--.-. ",
    "!": " -.-.-- ",
    "&": " .-... ",
    "=": " -...- ",
    "+": " .-.-. ",
    "\"": " .-..-. ",
    "$": " ...-..- "
}

// Select DOM objects.
const inputTextarea = document.querySelector("#input_textarea");
const outputTextarea = document.querySelector("#output_textarea");
const textToMorseButton = document.querySelector("#text_morse");
// Add event listiners.
textToMorseButton.addEventListener( "click", () => {
    translateTextToMorse();
})


function  translateTextToMorse(){
    const input = inputTextarea.value.toLowerCase();
    let output = "";

    if(input){
        for(let i = 0; i < input.length; i++){
            output += morse_code_alphabet[input[i]]
        }
    }
    else{
        console.log("No text to translate. Please try again.");
    }
    console.log(output);
    outputTextarea.value = output;
}


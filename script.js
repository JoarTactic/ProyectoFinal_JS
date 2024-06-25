function convertLength(){
    const unit = document.getElementById('length-unit').value;
    const value = document.getElementById('length-input').value;
    let respuesta;
    switch(unit){
        case "meters" :
            respuesta = value * 1;
            break;
        case "kilometers" :
            respuesta = value / 1000;
            break;
        case "centimeters" :
            respuesta = value * 100;
            break;
        case "millimeters" :
            respuesta = value * 1000;
            break;
        case "miles" :
            respuesta = (value / 1609.344).toFixed(6);
            break;
        case "yards" :
            respuesta = value * 1.09361;
            break;
        case "feet" :
            respuesta = value * 3.28084;
            break;
        case "inches" :
            respuesta = value * 39.3701;
            break;
        default:
            ;
    }
    document.getElementById('length-result').textContent = respuesta;
}

function convertVolume(){
    const unit = document.getElementById('volume-unit').value;
    const value = document.getElementById('volume-input').value;
    let respuesta;
    switch(unit){
        case "liters" :
            respuesta = value * 1;
            break;
        case "milliliters" :
            respuesta = value * 1000;
            break;
        case "gallons" :
            respuesta = (value / 3.785411).toFixed(6);
            break;
        case "quarts" :
            respuesta = value * 1.05669;
            break;
        case "pints" :
            respuesta = value * 2.11338;
            break;
        case "cups" :
            respuesta = value * 4.16667;
            break;
        case "fluid ounces" :
            respuesta = value * 33.814;
            break;
        default:
            ;
    }
    document.getElementById('volume-result').textContent = respuesta;
}

function convertWeight(){
    const unit = document.getElementById('weight-unit').value;
    const value = document.getElementById('weight-input').value;
    let respuesta;
    switch(unit){
        case "kilograms" :
            respuesta = value * 1;
            break;
        case "grams" :
            respuesta = value / 1000;
            break;
        case "milligrams" :
            respuesta = value / 1000000;
            break;
        case "pounds" :
            respuesta = value * 2.20462;
            break;
        case "ounces" :
            respuesta = value * 35.274;
            break;
        default:
            ;
    }
    document.getElementById('weight-result').textContent = respuesta;
}

function convertTemperature(){
    const unit = document.getElementById('temperature-unit').value;
    const value = document.getElementById('temperature-input').value;
    let respuesta;
    switch(unit){
        case "celsius" :
            respuesta = value * 1;
            break;
        case "fahrenheit" :
            respuesta = value * 1.8 + 32;
            break;
        case "kelvin" :
            respuesta = parseFloat(value) + 273.15;
            break;
        default:
            ;
    }
    document.getElementById('temperature-result').textContent = respuesta;
}
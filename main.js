function Inverter() {
    var string = document.getElementById('valor').value
    var newString = "";
    for (var i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return document.getElementById('resultado').innerHTML = newString 
}

function Limpar() {
    document.getElementById('valor').value = '' 
    document.getElementById('resultado').innerHTML = '' 
}
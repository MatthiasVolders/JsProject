let submitButton = document.getElementById("submit")
let ErrorMessages = []
let message


validateForm = () => {
    checkEmptyField("voornaam", "Het veld voornaam is vereist.<br>")

    checkEmptyField("naam", "Het veld naam is vereist.<br>")

    checkEmptyField("gebruikersnaam", "Het veld gebruikersnaam is vereist.<br>")

    valideerEmail("mailadres")

    if (document.getElementById("mailadres").value == "") {
        checkEmptyField("mailadres", "Het veld E-mailadres is vereist.<br>")
    } else if (valideerEmail("mailadres") == false) {
        ErrorMessages.push("E-mailadres is niet correct.<br>")
    }

    valideerEmail("mailadres")

    controleerWachtwoord("wachtwoord", "HerhaalWachtwoord")

    checkEmptyField("adres", "Het veld adres is vereist.<br>")

    checkLand("Land", 'Het veld land is vereist.<br>')
    checkProvincie("Provincie", 'Het veld provincie is vereist.<br>')

    checkPostcode("postcode")

    checkAlgemeneVoorwaarden("AlgemeneVoorwaarden")

    if (ErrorMessages.length == 0) {
        messages = '<div class="alert alert-success" role="alert">'
        messages += '<h4 class="alert-heading">Goed gedaan</h4>'
        messages += '<p>Alles goed ingevuld, je bent nu geregistreerd!<p>'
        messages += '</div>'
        messages += '<div class="alert alert-info" role="alert">'
        messages += '<h4 class="alert-heading">Betaalmethode</h4>'
        messages += valideerBetaling("betaaloptie")
        messages += '</div>'
    } else {
        messages = '<div class="alert alert-danger" role="alert">'
        messages += '<h4 class="alert-heading">Dit zijn jouw Errors, die je nog in orde moet brengen.</h4>'
        messages += ErrorMessages.join('')
        messages += '</div>'
        // https://www.youtube.com/watch?v=In0nB0ABaUk&t=315s

    }
    document.getElementById('foutmeldingen').innerHTML = messages
    ErrorMessages = []
}


checkLand = (veldLand) => {
    let land = document.getElementById(veldLand).value
    
    if (land == "Kies een Land") {
        ErrorMessages.push("Het veld land is vereist.<br>")
    }
}
checkProvincie = (veldProvincie) => {
   let provincie = document.getElementById(veldProvincie).value
   
   if (provincie == "Kies een Provincie") {
       ErrorMessages.push("Het veld provincie is vereist.<br>")
   }
}

checkEmptyField = (veld, melding) => {
    let invoer = document.getElementById(veld).value
    if (invoer == "") {
        ErrorMessages.push(melding)
    }
}


valideerBetaling = (veld) => {
    const radioButtons = document.getElementsByName(veld);
    let selectedbetaalmethode;
    //https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedbetaalmethode = radioButton.value;
            break;
        }
    }
    return "Je betalingswijze is " + selectedbetaalmethode
   
}


checkPostcode = (veld) => {
    let invoer = document.getElementById(veld).value
    if (invoer == "") {
        ErrorMessages.push("Het veld postcode is vereist.<br>")
    } else if (invoer > 9999 || invoer < 1000) {
        ErrorMessages.push("De waarde van uw postcode moet tussen 1000 en 9999 liggen.<br>")
    }

}


controleerWachtwoord = (veldWachtwoord, veldHerhaal) => {
    let wachtwoord = document.getElementById(veldWachtwoord).value
    let herhaal = document.getElementById(veldHerhaal).value
    if (wachtwoord == "" || herhaal == "") {
        checkEmptyField(veldWachtwoord, "Het veld wachtwoord is vereist.<br>")
        checkEmptyField(veldHerhaal, "Het herhalende wachtwoord is vereist.<br>")
    } else {
        if (wachtwoord != herhaal) {
            ErrorMessages.push("Je wachtwoorden zijn niet hetzelfde.<br>")
        }
        if (wachtwoord.length < 8) {
            ErrorMessages.push("Je wachtwoord moet minstens 8 karakters lang zijn.<br>")
        }
    }

}


checkAlgemeneVoorwaarden = (veld) => {
    let invoer = document.getElementById(veld)
    if (invoer.checked == false) {
        ErrorMessages.push("Je moet de algemene voorwaarden accepteren.<br>")
    }
}


valideerEmail = (emailadres) => {
    let email = document.getElementById(emailadres)
    var validRegex = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~]+[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/;
    //https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript#how_to_validate_email_using_javascript
    if (email.value.match(validRegex)) {
        return true;
    } else {
        return false;
    }

}

submitButton.addEventListener("click", validateForm)
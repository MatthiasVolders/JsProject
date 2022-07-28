let submitButton = document.getElementById("submit")
let ErrorMessages = []
let message

function validateForm(){
    checkEmptyField("voornaam", "Het veld voornaam is vereist.<br>")

    checkEmptyField("naam", "Het veld naam is vereist.<br>")

    checkEmptyField("gebruikersnaam", "Het veld gebruikersnaam is vereist.<br>")

    checkEmptyField("mailadres", "Het veld email is vereist.<br>")

    checkEmptyField("adres", "Het veld adres is vereist.<br>")

    controleerWachtwoord("wachtwoord", "HerhaalWachtwoord")

    checkLand("Land", 'Het veld land is vereist.<br>')

    checkProvincie("Provincie", 'Het veld provincie is vereist.<br>')

    checkPostcode("postcode", 'Het veld postcode is vereist.<br>')

    checkAlgemeneVoorwaarden("AlgemeneVoorwaarden")

    if (ErrorMessages.length == 0) {
        messages = '<div class="alert alert-success" role="alert">'
        messages += '<h4 class="alert-heading">Goed gedaan</h4>'
        messages += '<p>Alles is goed ingevuld, u bent nu geregistreerd!<p>'
        messages += '<p>Bedankt voor uw tijd om dit formulier in te vullen.<p></div>'
       
        messages += '<div class="alert alert-info" role="alert">'
        messages += '<h4 class="alert-heading">Uw betaalmethode</h4>'
        messages += valideerBetaling("betaaloptie")
        messages += '</div>'
        
        } else {
    
        messages = '<div class="alert alert-danger" role="alert">'
        messages += '<h4 class="alert-heading">Dit zijn jouw errors, die je nog in orde moet brengen.</h4>'
        messages += ErrorMessages.join('')
        messages += '</div>'
        

    }
    document.getElementById('foutmeldingen').innerHTML = messages
    ErrorMessages = []
    // https://www.youtube.com/watch?v=In0nB0ABaUk&t
}

    function checkEmptyField (VELD, MESSAGE){
        let tekst = document.getElementById(VELD).value
        if (tekst == "") {
        ErrorMessages.push(MESSAGE)
    }
}

    function checkLand(LAND){
        let land = document.getElementById(LAND).value
        if (land == "Kies een Land") {
        ErrorMessages.push("Het veld land is vereist.<br>")
    }
}

    function checkProvincie(PROVINCIE) {
        let provincie = document.getElementById(PROVINCIE).value
        if (provincie == "Kies een Provincie") {
        ErrorMessages.push("Het veld provincie is vereist.<br>")
    }
}




    function valideerBetaling(VELD){
        const radioButtons = document.getElementsByName(VELD);
        let selectedbetaalmethode;
    //https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/
        for (const radioButton of radioButtons) {
        if (radioButton.checked) {selectedbetaalmethode = radioButton.value;break;}
    }
    return "Je betalingswijze is " + selectedbetaalmethode
   
}


    function checkPostcode(VELD) {
        let tekst = document.getElementById(VELD).value
        if (tekst == "") {
        ErrorMessages.push("Het veld postcode is vereist.<br>")
        } else if (tekst > 9999 || tekst < 1000) {
        ErrorMessages.push("De waarde van uw postcode moet tussen 1000 en 9999 liggen.<br>")
    }

}


    function controleerWachtwoord(VELDWW, VELDHerhaalWW) {
        let wachtwoord = document.getElementById(VELDWW).value
        let herhaal = document.getElementById(VELDHerhaalWW).value
        if (wachtwoord == "" || herhaal == "") {
            checkEmptyField(VELDWW, "Het veld wachtwoord is vereist.<br>")
            checkEmptyField(VELDHerhaalWW, "Het herhalende wachtwoord is vereist.<br>")
        } else {
            if (wachtwoord != herhaal) {
            ErrorMessages.push("Je wachtwoorden zijn niet hetzelfde.<br>")
        }
            if (wachtwoord.length < 8) {
            ErrorMessages.push("Je wachtwoord moet minstens 8 karakters lang zijn.<br>")
        }
    }

}


    function checkAlgemeneVoorwaarden(VELD) {
        let tekst = document.getElementById(VELD)
        if (tekst.checked == false) {
        ErrorMessages.push("Je moet de algemene voorwaarden accepteren.<br>")
    }
}


submitButton.addEventListener("click", validateForm)
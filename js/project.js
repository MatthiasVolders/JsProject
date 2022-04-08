function myFunction() {
    var voornaam = document.getElementById("voornaam");
    var naam = document.getElementById("naam");
    var gebruikersnaam = document.getElementById("gebruikersnaam");
    var exampleInputEmail1 = document.getElementById("exampleInputEmail1");
    var wachtwoord = document.getElementById("wachtwoord");
    var herhaalwachtwoord = document.getElementById("herhaalwachtwoord");
    var provincie = document.getElementById("provincie");
    var postcode = document.getElementById("postcode");
    
    var flexCheckDefault2 = document.getElementById("flexCheckDefault2");
    

    
    let msg="";  
          
    if(!voornaam.value) { // or checked
      msg += "voornaam is vereist \n";
    }
    if(!naam.value) { // or checked
        msg += "naam is vereist \n";
      }
      if(!gebruikersnaam.value) { // or checked
        msg += "gebruikersnaam is vereist \n";
      }
      if(!exampleInputEmail1.value) { // or checked
        msg += "Email is vereist, moet gebruik maken van een @ \n";
      }
      if(!wachtwoord.value) { // or checked
        msg += "wachtwoord is vereist \n";
      }
      if(!herhaalwachtwoord.value) { // or checked
        msg += "herhaalwachtwoord is vereist \n";
      }
      if(!provincie.value) { // or checked
        msg += "provincie is vereist \n";
      }
      if(!postcode.value) { // or checked
        msg += "postcode is vereist \n";
      }
      
      if(!flexCheckDefault2.value) { // or checked
        msg += "Algemene voorwaarden moet aangevinkt zijn.\n";
      }
      
    alert(msg);
  }
let requestURL = 'https://api.sncf.com/v1/coverage/sncf/stop_areas/stop_area:OCE:SA:87391003/departures?datetime=20200909T104704';
let request = new XMLHttpRequest();
var jsonObj2;

request.addEventListener("progress", updateProgress, false);
request.addEventListener("load", transferComplete, false);
request.addEventListener("error", transferFailed, false);
request.addEventListener("abort", transferCanceled, false);

request.open('GET', requestURL);

request.onload = function(e) {
    console.log("cc");
    let superHeroes = request.response;
    populateHeader(superHeroes);
}
request.setRequestHeader("Authorization","f30d872d-839e-4488-82eb-6e97db5e38f9");
request.responseType = 'json';
request.send();

function populateHeader(jsonObj) {
    console.log("yo");
    jsonObj2 = jsonObj;
    let myH1 = document.createElement('h1');
    //myH1.textContent = jsonObj.departures.0.display_informations.direction;
    for(let i=0; i<jsonObj2.departures.length; i++) {
        console.log(jsonObj2.departures[i].display_informations.direction);
    }
}


// ...

// progression des transferts depuis le serveur jusqu'au client (téléchargement)
function updateProgress (oEvent) {
    if (oEvent.lengthComputable) {
        var percentComplete = oEvent.loaded / oEvent.total;
        // ...
    } else {
        // Impossible de calculer la progression puisque la taille totale est inconnue
    }
}

function transferComplete(evt) {
    alert("Le transfert est terminé.");
}

function transferFailed(evt) {
    alert("Une erreur est survenue pendant le transfert du fichier.");
}

function transferCanceled(evt) {
    alert("Le transfert a été annulé par l'utilisateur.");
}


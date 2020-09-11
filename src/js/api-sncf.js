let loading = true;
let errored = false;
let errors = null;
let data = {};
let now = new Date();
let annee   = now.getFullYear();
let mois    = now.getMonth() + 1;
let jour    = now.getDate();
let heure   = now.getHours();
let minute  = now.getMinutes();
let seconde = now.getSeconds();
let API_URL = 'https://api.sncf.com/v1/coverage/sncf/stop_areas/stop_area:OCE:SA:87391003/departures?datetime=' + annee + mois + jour + heure + minute + seconde;
let API_Gare = 'https://ressources.data.sncf.com/api/records/1.0/search/?dataset=referentiel-gares-voyageurs&q=&sort=pltf_departement_libellemin&facet=gare_agencegc_libelle&facet=gare_regionsncf_libelle&facet=gare_ug_libelle&facet=pltf_departement_libellemin&facet=pltf_segmentdrg_libelle'
let requestURL = API_URL;
let departs = "";


axios.get(requestURL, {
    headers: {
        'Authorization': 'f30d872d-839e-4488-82eb-6e97db5e38f9'
    }
})
    .then(response => {
        Object.assign(data, response.data);
    })
    .catch(error => {
        errors = error;
        errored = true;
    })
    .finally(() => {
        loading = false;
        data.departures.forEach(departure => {
            let departureTime = departure.stop_date_time.departure_date_time.slice(9, 11) + 'h' + departure.stop_date_time.departure_date_time.slice(12, 14);
            departs = departs + departure.display_informations.direction + " à " + departureTime + "<br>";
        })
        document.getElementById("result_sncf").innerHTML=departs;
    });

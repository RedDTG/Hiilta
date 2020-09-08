let callBackGetSuccess = function(data) {
    console.log("donnees api", data)
}

window.buttonAPI = function() {
    let url = "https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_tan-arrets-horaires-circuits&q=&lang=FR";

    $.get(url, callBackGetSuccess).done(function() {
        //alert( "second success" );
    })
        .fail(function() {
            alert( "error" );
        })
        .always(function() {
            //alert ( "finished" );
        });
}
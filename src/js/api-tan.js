let loading = true;
let errored = false;
let errors = null;
let data = null;
let requestURL = 'http://open.tan.fr/ewp/arrets.json/47,21661/-1,556754';

console.log('DEBUT TAN')

axios.get(requestURL, {
    'Access-Control-Allow-Origin': '*',
})
    .then(response => {
        console.log('RESPONSE TAN')
        console.log(response);
        data = response.data;
    })
    .catch(error => {
        console.log('ERROR TAN')
        console.log(error);
        errors = error;
        errored = true;
    })
    .finally(() => {
        loading = false;
        console.log('DATA TAN')
        console.log(data);
    });

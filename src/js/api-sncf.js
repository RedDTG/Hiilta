let loading = true;
let errored = false;
let errors = null;
let data = {};
let requestURL = 'https://api.sncf.com/v1/coverage/sncf/stop_areas/stop_area:OCE:SA:87391003/departures?datetime=20200909T104704';

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
        console.log(data);
    });

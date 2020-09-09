const mix = require('laravel-mix');

mix.js(['src/js/app.js', 'src/js/api_google'], 'public/js')
   .sass('src/scss/app.scss', 'public/css');

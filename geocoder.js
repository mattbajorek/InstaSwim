var geocoder = require('geocoder');
 
// Geocoding 
geocoder.geocode("08816", function ( err, data ) {
  // do something with data
  console.log(data.results[0].geometry)
});
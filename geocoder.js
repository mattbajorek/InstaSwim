var geocoder = require('geocoder');
 
// Geocoding 
geocoder.geocode("Miami, FL", function ( err, data ) {
  // do something with data
  console.log(data.results[0].geometry)
});
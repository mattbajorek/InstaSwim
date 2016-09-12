// Google Maps
  function initMap() {
  	var cities = [
  		{
  			position: {lat: 40.4333407, lng: -74.41152459999999},
  			title: 'East Brunswick, NJ'
  		},
  		{
  			position: {lat: 25.7616798, lng: -80.1917902},
  			title: 'Miami, FL'
  		}
  	]

  	// Make the map and zoom over entire USA
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 39, lng: -95},
      zoom: 4
    });

    // Put markers on the cities
    for (var i in cities) {
    	var marker = new google.maps.Marker({
	      position: cities[i].position,
	      map: map,
	      title: cities[i].title
	    });
    }
  }
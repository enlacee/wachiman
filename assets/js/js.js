
function initMap() {
	var options =  {center: {lat: -12.097524, lng: -77.02725},
		zoom: 15,
		scrollwheel:true,
  		draggable: true,
		disableDefaultUI: true,
		mapTypeControlOptions:false,
		panControl:false,
		zoomControl:true
	};

	var markerSVG = {
	url: 'assets/icons/point.svg',
	scaledSize: new google.maps.Size(50, 50)
	};

	if (window.screen.availWidth <= 500) {
		options.zoom = 24;
		markerSVG.scaledSize = new google.maps.Size(200, 200);
	}

	var map = new google.maps.Map(document.getElementById('map'), options);
	var infoWindow = new google.maps.InfoWindow();
	var pos;

  var sector1 = [
      {lat:-12.100109, lng:  -77.040617},
      {lat: -12.096490, lng: -77.038182},
      {lat:-12.091412, lng:  -77.038868},
      {lat: -12.092388, lng: -77.046389},
      {lat:-12.086450, lng:  -77.047280},
      {lat: -12.086628, lng: -77.048374},
      {lat:-12.085301, lng:  -77.048851},
      {lat: -12.086990, lng: -77.050310},
      {lat:-12.093080, lng:  -77.053234},
      {lat: -12.090143, lng: -77.057654},
      {lat:-12.092220, lng:  -77.059049},
      {lat: -12.093468, lng: -77.059360},
      {lat:-12.096091, lng:  -77.059714},
      {lat: -12.097990, lng: -77.055830},
      {lat:-12.099207, lng:  -77.052912},
      {lat: -12.098934, lng: -77.050101},
      {lat:-12.098556, lng:  -77.049307}
  ];

  var sector1a = new google.maps.Polygon({
    paths: sector1,
    strokeColor: '#000000',
    strokeOpacity: 0.4,
    strokeWeight: 3,
    fillColor: 'Red',
    fillOpacity: 0.2
  });

  var sector2 = [
      {lat:-12., lng:  -77.},
      {lat:-12., lng:  -77.}
  ];

  var sector2a = new google.maps.Polygon({
    paths: sector2,
    strokeColor: '#000000',
    strokeOpacity: 0.4,
    strokeWeight: 3,
    fillColor: 'Orange',
    fillOpacity: 0.2
  });

    var sector3 = [
      {lat:-12.090667, lng:  -77.033514},
      {lat: -12.097129, lng: -77.032613},
      {lat:-12.103602, lng:  -77.031594},
      {lat: -12.110274, lng: -77.037023},
      {lat:-12.108973, lng:  -77.038230},
      {lat: -12.109854, lng: -77.039126},
      {lat: -12.108396, lng: -77.040488},
      {lat:-12.107486, lng:  -77.039528},
      {lat: -12.100665, lng: -77.038096},
      {lat:-12.100109, lng:  -77.040617},
      {lat: -12.096490, lng: -77.038182},
      {lat:-12.091412, lng: -77.038868}
  ];

  var sector3a = new google.maps.Polygon({
    paths: sector3,
    strokeColor: '#000000',
    strokeOpacity: 0.4,
    strokeWeight: 3,
    fillColor: 'Red',
    fillOpacity: 0.2
  });

  var sector41 = [
      {lat:-12.090667, lng:  -77.033514},
      {lat: -12.091381, lng: -77.030146},
      {lat:-12.091947, lng:  -77.030210},
      {lat: -12.092514, lng: -77.030307},
      {lat:-12.092283, lng:  -77.029373},
      {lat: -12.096537, lng: -77.028783},
      {lat:-12.097129, lng: -77.032613}
  ];

  var sector41a = new google.maps.Polygon({
    paths: sector41,
    strokeColor: '#000000',
    strokeOpacity: 0.4,
    strokeWeight: 3,
    fillColor: 'Orange',
    fillOpacity: 0.2
  });

  var sector42 = [
      {lat: -12.091947, lng: -77.030210},
      {lat: -12.092514, lng: -77.030307},
      {lat: -12.092283, lng:   -77.029373},
      {lat: -12.096537, lng: -77.028783},
      {lat: -12.098294, lng:   -77.028526},
      {lat: -12.098189, lng: -77.027345},
      {lat: -12.098787, lng:   -77.026058},
     {lat: -12.091958, lng: -77.022528},
      {lat: -12.090772, lng: -77.022753}
  ];

  var sector42a = new google.maps.Polygon({
    paths: sector42,
    strokeColor: '#000000',
    strokeOpacity: 0.4,
    strokeWeight: 3,
    fillColor: 'Green',
    fillOpacity: 0.2
  });

  var sector43 = [
      {lat:  -12.097129 , lng: -77.032613},
      {lat: -12.096537, lng: -77.028783},
      {lat:  -12.098294 , lng: -77.028526},
      {lat: -12.098189, lng: -77.027345},
      {lat:  -12.098787 , lng: -77.026058},
      {lat: -12.102857, lng: -77.027227},
      {lat: -12.103602, lng: -77.031594}
  ];

  var sector43a = new google.maps.Polygon({
    paths: sector43,
    strokeColor: '#000000',
    strokeOpacity: 0.4,
    strokeWeight: 3,
    fillColor: 'Orange',
    fillOpacity: 0.2
  });

  var sector44 = [
      {lat:  -12.091958 , lng: -77.022528},
      {lat: -12.101976, lng: -77.018676},
      {lat: -12.102857, lng: -77.027227},
      {lat: -12.098787, lng: -77.026058}
  ];

  var sector44a = new google.maps.Polygon({
    paths: sector44,
    strokeColor: '#000000',
    strokeOpacity: 0.4,
    strokeWeight: 3,
    fillColor: 'Orange',
    fillOpacity: 0.2
  });

  var sector5 = [
      {lat:-12.101976, lng:  -77.018676},
      {lat:-12.091958, lng:  -77.022528},
      {lat:-12.090772, lng:  -77.022753},
      {lat:-12.088758, lng:  -77.007679},
      {lat:-12.098682, lng:  -77.012207},
      {lat:-12.107976, lng:  -77.010340},
      {lat:-12.108532, lng:  -77.013902},
      {lat:-12.108724, lng:  -77.014304},
      {lat:-12.105774, lng:  -77.016327},
      {lat:-12.103382, lng:  -77.016499},
      {lat:-12.102438, lng:  -77.016413}
  ];

  var sector5a = new google.maps.Polygon({
    paths: sector5,
    strokeColor: '#000000',
    strokeOpacity: 0.4,
    strokeWeight: 3,
    fillColor: '#FF0000',
    fillOpacity: 0.2
  });


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = {
        lat: position.coords.latitude ,
        lng: position.coords.longitude
      };


	 // NOW CREATE THE ACTUAL MARKER ON THE MAP
	 var marker = new google.maps.Marker({
	    position: pos,
		opacity: 1,
		icon: markerSVG,
	    title: 'Mi posición'
	  });

    marker.setMap(map);
    map.setCenter(pos);

  marker.addListener('click', function(e) {
    var contenido =
        google.maps.geometry.poly.containsLocation(e.latLng, sector41a) ?
        'Dentro de sector 4-1' :
        google.maps.geometry.poly.containsLocation(e.latLng, sector42a) ?
        'Dentro de sector 4-2' :
        google.maps.geometry.poly.containsLocation(e.latLng, sector43a) ?
        'Dentro de sector 4-3' :
        google.maps.geometry.poly.containsLocation(e.latLng, sector44a) ?
        'Dentro de sector 4-4' :
        'Fuera';;;;

    var infowindow = new google.maps.InfoWindow({
    content: contenido });

    infowindow.open(map, marker);
  });

    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }

	// mostrar poligonos
	sector1a.setMap(map);
	sector2a.setMap(map);
	sector3a.setMap(map);
	sector41a.setMap(map);
	sector42a.setMap(map);
	sector43a.setMap(map);
	sector44a.setMap(map);
	sector5a.setMap(map);
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}

//google.maps.event.addDomListener(window, 'resize', initMap);
//google.maps.event.addDomListener(window, 'load', initMap)

function getMaxValue() {
	var theAPI = context.url + '/api/data-reporte.json';
	$.getJSON( theAPI, function( data ) {
		console.log('data', data);
	});
}

// Init App
window.onload = function(){

	// init app
	initMap();
	getMaxValue();
};

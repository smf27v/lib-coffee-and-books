$.ajax({
  url: "http://localhost:3000/api/locations",
  method: "GET",
  success: function(response) {
    var myLocations = response;
      const ironhackBCN = {
      	lat: 41.3977381,
      	lng: 2.190471916};
  var map = new google.maps.Map(document.getElementById('map'),
    {
      zoom: 15,
      center: ironhackBCN
    });

    let markers = [];
    myLocations.forEach(function(locations){
    let title = locations.name
    let position = {
      lat: locations.location.coordinates[1],
      lng: locations.location.coordinates[0]
    };
    var pin = new google.maps.Marker({ position, map, title  });
    markers.push(pin)
  });
},
  error: function(err) {
    console.log(err);
  }
});

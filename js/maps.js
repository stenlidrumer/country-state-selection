      // Defining some global variables
      var map, geocoder, marker, infowindow;
      // Creating Map and Geocoder
      function initialize() {
            geocoder = new google.maps.Geocoder();
            var latlng = new google.maps.LatLng(42.50606, 27.46781);
            var myOptions = {
            zoom: 15,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
            }
      // Encode Addres to Location
      function codeAddress() {
            // Get geocode from address
            var address = document.getElementById("address").value;
            geocoder.geocode( { 'address': address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                  map.setCenter(results[0].geometry.location);
            // Create new Marker at position
            var marker = new google.maps.Marker({
           map: map,
           position: results[0].geometry.location
       });
       // Create variables with address, latitud y longitud
       var address = results[0].formatted_address;
       var lat = Math.round((results[0].geometry.location.lat())*1000000)/1000000;
       var lng = Math.round((results[0].geometry.location.lng())*1000000)/1000000;
            
            // Create content to show from results[0].geometry.location
            var content = '<strong>' + address + '</strong><br />';
                  content += 'Lat: ' + lat + '<br />';
                  content += 'Lng: ' + lng;
            // Show content in infowindow
            var infowindow = new google.maps.InfoWindow();
            infowindow.setContent(content);
       infowindow.open(map, marker);
              
     } else {
       alert("Geocode was not successful for the following reason: " + status);
     }
            });
      }
	  window.onload=initialize();
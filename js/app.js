geocoder = new google.maps.Geocoder();
address = "19125";

function getCoordinates(address, callback ){
  var coordinates;
  geocoder.geocode({address:address}, function(results, status){
    coords_obj = results[0].geometry.location;
    coordinates = [coords_obj.k, coords_obj.D];
    callback(coordinates);
  })
}
// IG AUTHORIZATION CODE 
// 98f282b3767e4cbeaa3f92d357eebbf0

$(document).ready(function(){
    console.log("page ready");
  $.ajax({
    type:"GET",
    dataType:"jsonp",
    cache:false,
    url:"https://api.instagram.com/v1/media/popular?client_id=3a5105a86e9646508f189e1c20cd1e3b",
    success: function(photo) {
      for (var i=0; i<15; i++) {
        console.log(photo.data[i]);
        // $("#target").append("<a href='" + photo.data[i].link +"'><img src='" + photo.data[i].images.low_resolution.url +"' /></a>");
      }
    }
  });

});
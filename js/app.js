var map;

geocoder = new google.maps.Geocoder();

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

// $(document).ready(function(){
//   console.log(lat);
//     console.log("page ready");
//   $.ajax({
//     type:"GET",
//     dataType:"jsonp",
//     cache:false,
//     url:"https://api.instagram.com/v1/media/popular?client_id=3a5105a86e9646508f189e1c20cd1e3b",
        https://api.instagram.com/v1/media/search?lat=48.858844&lng=2.294351&client_id=3a5105a86e9646508f189e1c20cd1e3b
//     success: function(photo) {
//       for (var i=0; i<15; i++) {
//         console.log(photo.data[i]);
//       }
//     }
//   });
// });

function initialize() {
  var address = prompt('What is the Address you are looking for?')  
  getCoordinates(address, function(coords){
    var mapOptions = {
      zoom: 13,
      center: new google.maps.LatLng(coords[0], coords[1]),
      MapTypeId:google.maps.MapTypeId.ROADMAP,
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
    lat = mapOptions.center.k;
    lng = mapOptions.center.D;

    $(".results").append(lat, lng);
    // instagram
    $.ajax({
      type:"GET",
      dataType:"jsonp",
      cache:false,
      url:"https://api.instagram.com/v1/media/search?lat="+lat+"&lng="+lng+"&client_id=78e45908b3534571b3f1c3f7b459f993",
      success: function(photo){
        for (var i= 0; i <10; i++){
          console.log(photo.data[i]);
          $("#instagram").append("<div class='instagram-pic' id='pic-"+ photo.data[i].id +"' ><a target='_blank' href='" + photo.data[i].link +"'><span class='likes'>"+photo.data[i].likes.count +"</span><img class='instagram-img' src='" + photo.data[i].images.low_resolution.url +"' /></a></div>");
          }
        }
      })
    });
  }

  // google.maps.event.addDomListener(window, 'load', initialize);


$(document).ready(function(){
  initialize();


});






function OpenNavigate(){
	$(".hidden-navigate-thanh").animate({left: '0px'});
	$(".screen-all-foggy").css('display','block');
}

function CloseNaviage(){
	$(".hidden-navigate-thanh").animate({left: '-200px'});
	$(".screen-all-foggy").css('display','none');
}
function RedirectHome(){
	window.location.replace("../main.html");
}
function RedirectService(){
	window.location.replace("../service.html");
}
function RedirectAbout(){
	window.location.replace("../about.html");
}

var mapCanvas;
var myPosition;
var map;

function myMap() {
  mapCanvas = document.getElementById("googleMap");
  var myCenter = new google.maps.LatLng(10.7882639,106.7411211);
  var mapOptions = {center: myCenter, zoom: 15};
  map = new google.maps.Map(mapCanvas, mapOptions);
  
}

function GetMyPosition(){
	getLocation();
}

function getLocation() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
    
}

function showPosition(position) {

    myPosition = position.coords;
    var myCenter = new google.maps.LatLng(myPosition.latitude, myPosition.longitude);
    map.setCenter(myCenter);
    var marker = new google.maps.Marker({position:myCenter});
 	marker.setMap(map);
    var infowindow = new google.maps.InfoWindow({
    	content:"You Are Here!"
    });

	infowindow.open(map,marker);
}
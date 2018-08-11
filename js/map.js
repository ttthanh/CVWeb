
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

function myMap() {
	var mapProp= {
	    center:new google.maps.LatLng(51.508742,-0.120850),
	    zoom:5,
	};
	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
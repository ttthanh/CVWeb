$(".nav-top-menu-thanh").hover(
  function() {
    let check = $( this ).text().toString().trim();
	if (check == 'HOME'){
			$(".top-of-page").removeClass("top-page-image-2");
			$(".top-of-page").removeClass("top-page-image-3");
			$(".top-of-page").addClass("top-page-image-1");
			$(".top-of-page").css("color","white");
	}else{ 
		if (check == "SERVICE"){
			$(".top-of-page").removeClass("top-page-image-1");
			$(".top-of-page").removeClass("top-page-image-3");
			$(".top-of-page").addClass("top-page-image-2");
			$(".top-of-page").css("color","blue");
		}else{
			$(".top-of-page").removeClass("top-page-image-1");
			$(".top-of-page").removeClass("top-page-image-2");
			$(".top-of-page").addClass("top-page-image-3");
			$(".top-of-page").css("color","black");
		}

	}
	
  }, function() {
		$(".top-of-page").removeClass("top-page-image-2");
		$(".top-of-page").removeClass("top-page-image-3");
		$(".top-of-page").addClass("top-page-image-1");
		$(".top-of-page").css("color","white");
  }
);

function OpenNavigate(){
	$(".hidden-navigate-thanh").animate({left: '0px'});
	$(".screen-all-foggy").css('display','block');
}

function CloseNaviage(){
	$(".hidden-navigate-thanh").animate({left: '-200px'});
	$(".screen-all-foggy").css('display','none');
}
function RedirectHome(){
	window.location.replace("/");
}
function RedirectService(){
	window.location.replace("service.html");
}
function RedirectAbout(){
	window.location.replace("about.html");
}
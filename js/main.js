$(".nav-top-menu-thanh").hover(
  function() {
    let check = $( this ).text().toString().trim();
	
	if (check == 'HOME'){
	console.log(check + "1");
		$(".top-of-page").removeClass("top-page-image-2");
		$(".top-of-page").removeClass("top-page-image-3");
		$(".top-of-page").addClass("top-page-image-1");
		$(".top-of-page").css("color","white");
	}else{ 
		if (check == "SERVICE"){
			console.log(check + "2");
			$(".top-of-page").removeClass("top-page-image-1");
			$(".top-of-page").removeClass("top-page-image-3");
			$(".top-of-page").addClass("top-page-image-2");
			$(".top-of-page").css("color","blue");
		}else{
			console.log(check + "3");
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
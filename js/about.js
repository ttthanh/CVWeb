function OpenNavigate(){
	$(".hidden-navigate-thanh").animate({left: '0px'});
	$(".screen-all-foggy").css('display','block');
}

function CloseNaviage(){
	$(".hidden-navigate-thanh").animate({left: '-200px'});
	$(".screen-all-foggy").css('display','none');
}
function RedirectHome(){
	window.location.replace("main.html");
}
function RedirectService(){
	window.location.replace("service.html");
}
function RedirectAbout(){
	window.location.replace("about.html");
}




$(window).scroll(function (event) {
    var topCheck = $(window).scrollTop();

    if(topCheck >= 420){
    	var topCss = topCheck - 420;
    	var valueString = topCss + "px";
    	$(".spy-list-element").css("top", valueString);
    }else{
    	$(".spy-list-element").css("top", "0px");
    }
    
    // Check element
    var ele1 = $("#list-item-1").offset().top;
    var ele2 = $("#list-item-2").offset().top;
    var ele3 = $("#list-item-3").offset().top;
    var ele4 = $("#list-item-4").offset().top;
    var ele5 = $("#list-item-5").offset().top;
    var ele6 = $("#list-item-6").offset().top;
    var ele7 = $("#list-item-7").offset().top;
    var ele8 = $("#list-item-8").offset().top;
    console.log("tcc" + topCheck);
    console.log("ele1" + ele1);
    console.log("ele2" + ele2);
    console.log("ele3" + ele3);
    console.log("ele4" + ele4);
    console.log("ele5" + ele5);
    console.log("ele6" + ele6);
    console.log("ele7" + ele7);
    console.log("ele8" + ele8);

    var tricktopCheck = topCheck + 200;
    if(tricktopCheck >= ele8){
        AddClass(7);
        return false;   
    }
    if(tricktopCheck >= ele7){
        AddClass(6);
        return false;   
    }
    if(tricktopCheck >= ele6){
        AddClass(5);
        return false;   
    }
    if(tricktopCheck >= ele5){
        AddClass(4);
        return false;   
    }
    if(tricktopCheck >= ele4){
        AddClass(3);
        return false;   
    }
    if(tricktopCheck >= ele3){
        AddClass(2);
        return false;   
    }
    if(tricktopCheck >= ele2){
        AddClass(1);
        return false;   
    }
    if(tricktopCheck >= ele1){
        AddClass(0);
        return false;   
    }

});

function AddClass(index){
    $(".spy-list-element a").each(function(){
        $(this).removeClass("bg-warning");
    });

    $(".spy-list-element").children().eq(index).addClass("bg-warning");
}

function ScrollTo(item,event){
    event.preventDefault();
    var elementHtml = "#" + item;
    
    var valueTop = $(elementHtml).offset().top - 80;
    $(".spy-list-element").hide();
    $("html, body").animate({ scrollTop: valueTop }, "slow", function() {
        $(".spy-list-element").slideDown();
    });
    
}
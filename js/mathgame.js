var point = 0;
var level = 0;
var result,mathCalculate;
var numberOfList = 2;
var lstNumber = [];
var lstSign = [];

var interVal1, interVal2;

$(document).ready(function() {
	
	$('#exampleModalCenter').modal({ show: false});
	InitTheGame();
	StartTheGame();

});

function InitTheGame(){
	point = 0;
	level = 0;
	mathCalculate = '';
	result = '';
}

function StartTheGame(){
	$("#screen-play-game").empty();
	interVal1 = setInterval(function(){ 
		
		
		$(".math-counting").each(function(){
			//console.log($(this).css("top"))
			var valueCount = parseInt($(this).css("top")) + 1;
			$(this).css("top", valueCount);
			//console.log(valueCount);
			if (valueCount >= 300){
				//lose game
				//alert("Asdads");
				LoseGame();
			}
		});

		
	}, 40);

	interVal2 = setInterval(function(){
		CreateMathAndresult();

		var html = '';
		html += '<div class="badge badge-success math-counting">';
		html += mathCalculate
		html += '<span class="result-point">';
		html += result
		html += '</span>';
		html += '</div>';
		
		$("#screen-play-game").append(html);
		
	}, 2000);
}

function LoseGame(){

	$('#exampleModalCenter').find("#the-point-int").text(point);
	$('#exampleModalCenter').modal('show');
	clearInterval(interVal1);
	clearInterval(interVal2);
}

function Resetgame(){
	$('#exampleModalCenter').modal('toggle');
	InitTheGame();
	StartTheGame();
}

function PlayAnotherGame(){
	window.location.replace("../service.html");
}

document.onkeypress = function (e) {
    e = e || window.event;
    // use e.keyCode
    if(e.keyCode == 114){
    	
    	CheckRightOrWrong(1);
    }
    if(e.keyCode == 119){
    	
    	CheckRightOrWrong(0);
    }
};

function CheckRightOrWrong(resultUser){
	var resultMarchine = $("#screen-play-game").children().eq(0).find(".result-point").text();
	if(parseInt(resultMarchine) == parseInt(resultUser)){
		ClearOffThingMath();
		DetectUpLevel();
	}else{
		LoseGame();
	}

}

function DetectUpLevel(){
	if(point > 10){
		//plus hard
		numberOfList = 2;
		level = 1;
	}
	if(point > 25){
		//plus and minus
		numberOfList = 2;
		level = 2;
	}
	if(point > 35){
		//plus and minus with 3
		numberOfList = 3;
		level = 3;
	}
	if(point > 50){
		//plus and minus with 3, hard
		numberOfList = 3;
		level = 4;
	}
	if(point > 70){
		//plus and multyply
		level = 5;
	}
	if(point > 80){
		//plus and multyply and minus
		level = 6;
	}
	if(point > 90){
		//plus and multyply and minus with 3
		numberOfList = 3;
		level = 7;
	}
	if(point > 100){
		//plus and multyply and minus with 3 hard
		numberOfList = 3;
		level = 8;
	}
	if(point > 110){
		//plus and multyply and minus and divide
		level = 9;
	}

	//console.log(point+'//' + numberOfList + "//" +level);

}

function MakeList(){
	lstNumber = [];
	lstSign = [];
	for (var i=0;i<numberOfList;i++){
		lstNumber.push(CreateNumber());

	}

	for (var i=0;i<numberOfList-1 ;i++){
		lstSign.push(CreateSign());
		
	}

}

function CreateMathAndresult(){
	MakeList();


	var resultCal = parseInt(lstNumber[0]);
	mathCalculate = resultCal;
	for(var i = 0; i < lstSign.length; i++){
		switch(lstSign[i]){
			case 1:
				mathCalculate = mathCalculate + " + " + lstNumber[i + 1];
				resultCal = resultCal + parseInt(lstNumber[i + 1]);
				break;
			case 2:
				mathCalculate = mathCalculate + " - " + lstNumber[i + 1];
				resultCal = resultCal - parseInt(lstNumber[i + 1]);
				break;
			case 3:
				mathCalculate = mathCalculate + " * " + lstNumber[i + 1];
				resultCal = resultCal * parseInt(lstNumber[i + 1]);
				break;
			case 4:
				mathCalculate = mathCalculate + " / " + lstNumber[i + 1];
				resultCal = resultCal / parseInt(lstNumber[i + 1]);
				break;
		}
	}

	var valueFalseTrue = Math.random();
	//valueFalseTrue = 0

	//console.log(mathCalculate);
	//console.log(resultCal);
	//console.log(result);
	if(valueFalseTrue > 0.5){
		resultCal = parseInt(resultCal) + parseInt(Math.random() * 3) + 1 ;
		result = 0;
	}else{
		result = 1;
	}
	//console.log(mathCalculate);
	//console.log(resultCal);
	mathCalculate = mathCalculate + " = " + resultCal;
	//console.log(result);


	
}

function CreateSign(){
	var signReturn;
	//signReturn = Math.floor(Math.random() * 4) + 1;

	//1 +
	//2 -
	//3 *
	//4 /
	if(level <= 1){
		signReturn = 1;
	}

	if(level > 1 && level <= 4){
		signReturn = Math.floor(Math.random() * 2) + 1;
	}

	if(level == 5){
		signReturn = Math.floor(Math.random() * 2) + 1;
		if (signReturn == 2){
			signReturn = 3;
		}
	}

	if(level == 6){
		signReturn = Math.floor(Math.random() * 2) + 1;
	}

	if(level > 6){
		signReturn = Math.floor(Math.random() * 3) + 1;
	}


	return signReturn;
}

function CreateNumber(){
	var numberReturn;
	switch(level){
		case 0:
			numberReturn = parseInt(Math.random() * 10 );
			break;
		case 1:
			numberReturn = parseInt(Math.random() * 50 );
			break;
		case 2:
			numberReturn = parseInt(Math.random() * 10 );
			break;
		case 3:
			numberReturn = parseInt(Math.random() * 10 );
			break;
		case 4:
			numberReturn = parseInt(Math.random() * 20 );
			break;
		case 5:
			numberReturn = parseInt(Math.random() * 10 );
			break;
		case 6:
			numberReturn = parseInt(Math.random() * 10 );
			break;
		case 7:
			numberReturn = parseInt(Math.random() * 10 );
			break;
		case 8:
			numberReturn = parseInt(Math.random() * 10 );
			break;
		case 9:
			numberReturn = parseInt(Math.random() * 10 );
			break;	
	}

	return numberReturn;
}

function ClearOffThingMath(){
	$("#screen-play-game").children().eq(0).remove();
	point = point + 1;
}

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

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
var canvas;
$(document).ready(function(){
  canvas = new fabric.StaticCanvas('myCanvas');
  canvas.setHeight(500);
  canvas.setWidth(800);
  


  InitGame();
});

function InitGame(){
    canvas.clear();
    canvas.setBackgroundColor("gray");

    InitMeterial();
}

function InitMeterial(){
  fabric.loadSVGFromURL('../resource/svg/house.svg', (objects, options) => { 
        var house = fabric.util.groupSVGElements(objects, options);
        house.set({
          left:200,
          top:300,
          hasControls:false,
          selectable:false
        });
        house.scaleToWidth(100);
        house.scaleToHeight(100);

        canvas.add(house); 

        house.clone((o) => {
          let abc = o;
          abc.set({
            left:100,
            top:300,
            hasControls:false,
            selectable:false
          });
          canvas.add(abc); 

        });


        canvas.calcOffset();
        canvas.renderAll();
    }); 
    fabric.loadSVGFromURL('../resource/svg/sunny.svg', (objects, options) => { 
        let sunny = fabric.util.groupSVGElements(objects, options);
        sunny.set({
          left:200,
          top:10,
          hasControls:false,
          //selectable:false
        });
        sunny.scaleToWidth(100);
        sunny.scaleToHeight(100);

        this.canvas.add(sunny); 
        this.canvas.calcOffset();
        this.canvas.renderAll();
    }); 
}
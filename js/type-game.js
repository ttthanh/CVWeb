
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
var width = 1000;
var height = 500;
var timeBomb;
var speedBomb;


$(document).ready(function(){
  canvas = new fabric.StaticCanvas('myCanvas');
  canvas.setHeight(height);
  canvas.setWidth(width);
  
  fabric.Object.prototype.idObject = "";
  fabric.Object.prototype.typeObject = "";

  InitGame();
});

function InitGame(){
    canvas.clear();
    canvas.setBackgroundColor("gray");

    InitMeterial();
    InitPlaneAndBomb();
    
    setTimeout(function(){
      (function animate() {
    console.log("why not herer");
    console.log(canvas);
    canvas.getObjects().concat().forEach(function(obj) {
      console.log(obj.typeObject);
        if(obj.typeObject == "plane"){
         
          obj.left -= 3;
          console.log(obj.left);
        }
        if(obj.typeObject == "plane1"){
          
          obj.left += 1;
          console.log(obj.left);
        }

        if (obj.left > 1300 || obj.left < -300 || obj.top > 700) {
          canvas.remove(obj);
        }

    });
    fabric.util.requestAnimFrame(animate);
    canvas.renderAll();
})();
    },800);
      //animate();
    
}

function InitMeterial(){
    fabric.loadSVGFromURL('../resource/svg/house.svg', (objects, options) => { 
        var house = fabric.util.groupSVGElements(objects, options);
        house.set({
          left:0,
          top:400,
          hasControls:false,
          idObject:'232',
          selectable:false
        });
        house.scaleToWidth(100);
        house.scaleToHeight(100);

        canvas.add(house); 

        house.clone((o) => {
          let abc = o;
          abc.set({
            left:400,
            top:400,
            hasControls:false,
            selectable:false
          });

          canvas.add(abc); 

        });

        house.clone((o) => {
          let abc = o;
          abc.set({
            left:900,
            top:400,
            hasControls:false,
            selectable:false
          });
          canvas.add(abc); 
        });


        canvas.calcOffset();
        canvas.renderAll();
    });
    fabric.loadSVGFromURL('../resource/svg/house1.svg', (objects, options) => { 
        var house = fabric.util.groupSVGElements(objects, options);
        house.set({
          left:100,
          top:400,
          hasControls:false,
          selectable:false
        });
        house.scaleToWidth(100);
        house.scaleToHeight(100);

        canvas.add(house); 

        house.clone((o) => {
          let abc = o;
          abc.set({
            left:500,
            top:400,
            hasControls:false,
            selectable:false
          });
          canvas.add(abc); 

        });


        canvas.calcOffset();
        canvas.renderAll();
    });
    fabric.loadSVGFromURL('../resource/svg/house2.svg', (objects, options) => { 
        var house = fabric.util.groupSVGElements(objects, options);
        house.set({
          left:200,
          top:400,
          hasControls:false,
          selectable:false
        });
        house.scaleToWidth(100);
        house.scaleToHeight(100);

        canvas.add(house); 

        house.clone((o) => {
          let abc = o;
          abc.set({
            left:600,
            top:400,
            hasControls:false,
            selectable:false
          });
          
          canvas.add(abc); 

        });
        house.clone((o) => {
          let abc = o;
          
          abc.set({
            left:800,
            top:400,
            hasControls:false,
            selectable:false
          });
          canvas.add(abc); 

        });


        canvas.calcOffset();
        canvas.renderAll();
    });
    fabric.loadSVGFromURL('../resource/svg/house3.svg', (objects, options) => { 
        var house = fabric.util.groupSVGElements(objects, options);
        house.set({
          left:300,
          top:400,
          hasControls:false,
          selectable:false
        });
        house.scaleToWidth(100);
        house.scaleToHeight(100);

        canvas.add(house); 

        house.clone((o) => {
          let abc = o;
          abc.set({
            left:700,
            top:400,
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
          left:900,
          top:10,
          hasControls:false,
          //selectable:false
        });
        sunny.scaleToWidth(100);
        sunny.scaleToHeight(100);

        this.canvas.sendToBack(sunny);
        this.canvas.add(sunny); 
        this.canvas.calcOffset();
        this.canvas.renderAll();
    }); 



}

function InitPlaneAndBomb(){
  setInterval(function() {
    fabric.loadSVGFromURL('../resource/svg/plane.svg', (objects, options) => { 
        let sunny = fabric.util.groupSVGElements(objects, options);
        sunny.set({
          left:900,
          top:Math.floor((Math.random() * 80) + 10),
          hasControls:false,
          typeObject: 'plane'
          //selectable:false
        });
        sunny.scaleToWidth(50);
        sunny.scaleToHeight(50);

        this.canvas.sendToBack(sunny);
        this.canvas.add(sunny); 
        this.canvas.calcOffset();
        this.canvas.renderAll();
    });
    console.log("run SVG 1");
  }, 1550);

  setInterval(function() {
    fabric.loadSVGFromURL('../resource/svg/plane1.svg', (objects, options) => { 
        let sunny = fabric.util.groupSVGElements(objects, options);
        sunny.set({
          left:0,
          top:Math.floor((Math.random() * 150) + 130),
          hasControls:false,
          typeObject: 'plane1'
          //selectable:false
        });
        sunny.scaleToWidth(50);
        sunny.scaleToHeight(50);

        this.canvas.sendToBack(sunny);
        this.canvas.add(sunny); 
        this.canvas.calcOffset();
        this.canvas.renderAll();
    });
    console.log("run SVG 2");
  }, 6550);

  

  
  
  
}









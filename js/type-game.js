
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

  InitGame();
});

function InitGame(){
    canvas.clear();
    canvas.setBackgroundColor("gray");

    InitMeterial();

    console.log(canvas);

    var circle = new fabric.Circle({
      radius: 20, fill: 'green', left: 100, top: 100,idObject:'2323'
    });
    var triangle = new fabric.Triangle({
      width: 20, height: 30, fill: 'blue', left: 50, top: 50,idObject:'2323AS'
    });

    canvas.add(circle, triangle);

    setTimeout(function(){
      canvas.forEachObject(function(obj){
        console.log("id Object");
      });

      canvas.getObjects().forEach(function(obj){
        console.log("id Object" + obj.idObject);
          
      });
    },2000)
    
    
    //InitPlaneAndBomb();
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
    fabric.Image.fromURL('../assets/ladybug.png', function(img) {
      img.set('left', fabric.util.getRandomInt(200, 600)).set('top', -50);
      img.movingLeft = !!Math.round(Math.random());
      canvas.add(img);
    });
  }, 250);

  setInterval(function() {
    fabric.Image.fromURL('../assets/ladybug.png', function(img) {
      img.set('left', fabric.util.getRandomInt(200, 600)).set('top', -50);
      img.movingLeft = !!Math.round(Math.random());
      canvas.add(img);
    });
  }, 3550);
}
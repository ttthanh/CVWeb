
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
var level,point;
var lstContain;
var positionLetter;
var displayKeyBomb;


$(document).ready(function(){
  canvas = new fabric.StaticCanvas('myCanvas');
  canvas.setHeight(height);
  canvas.setWidth(width);
  
  fabric.Object.prototype.idObject = "";
  fabric.Object.prototype.typeObject = "";
  fabric.Object.prototype.numberObject = "";

  InitGame();
});

function InitGame(){
    canvas.clear();
    canvas.setBackgroundColor("#3dc2e0");

    point = 0;
    level = 2;

    ChangeDifficult(level);

    InitMeterial();
    InitPlaneAndBomb();
    
    setTimeout(function(){
      (function animate() {
          
          canvas.getObjects().concat().forEach(function(obj) {
           
              if(obj.typeObject == "plane"){
               
                obj.left -= 3;
                
              }
              if(obj.typeObject == "plane1"){
                
                obj.left += 1;
                
              }
              if(obj.typeObject == "bomb"){
                
                obj.top += 0.3;
                
              }
              if(obj.typeObject == "textObj"){
                
                obj.top += 0.3;
                
              }

              

              if(obj.typeObject == "bombB"){
                
                obj.top += 1;
               
              }
              if(obj.typeObject == "textObjB"){
                
                obj.top += 1;
                
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
    var size = 50;
    fabric.loadSVGFromURL('../resource/svg/house.svg', (objects, options) => { 
        var house = fabric.util.groupSVGElements(objects, options);
        house.set({
          left:size * 0,
          top:455,
          hasControls:false,
          selectable:false
        });
        house.scaleToWidth(size);
        house.scaleToHeight(50);

        canvas.add(house); 

        house.clone((o) => {
          let abc = o;
          abc.set({
            left:size * 6,
            top:455,
            hasControls:false,
            selectable:false
          });

          canvas.add(abc); 

        });

        house.clone((o) => {

          let abc = o;
          abc.set({
            left:size * 12,
            top:455,
            hasControls:false,
            selectable:false
          });
          canvas.add(abc); 
        });

        house.clone((o) => {

          let abc = o;
          abc.set({
            left:size * 16,
            top:455,
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
          left:size * 1,
          top:450,
          hasControls:false,
          selectable:false
        });
        house.scaleToWidth(size);
        house.scaleToHeight(50);

        canvas.add(house); 

        house.clone((o) => {
          let abc = o;
          abc.set({
            left:size * 7,
            top:450,
            hasControls:false,
            selectable:false
          });
          canvas.add(abc); 

        });

        house.clone((o) => {
          let abc = o;
          abc.set({
            left:size * 13,
            top:450,
            hasControls:false,
            selectable:false
          });
          canvas.add(abc); 

        });

        house.clone((o) => {
          let abc = o;
          abc.set({
            left:size * 19,
            top:450,
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
          left:size * 2,
          top:455,
          hasControls:false,
          selectable:false
        });
        house.scaleToWidth(size);
        house.scaleToHeight(50);

        canvas.add(house); 

        house.clone((o) => {
          let abc = o;
          abc.set({
            left:size * 8,
            top:455,
            hasControls:false,
            selectable:false
          });
          
          canvas.add(abc); 

        });
        house.clone((o) => {
          let abc = o;
          
          abc.set({
            left:size * 14,
            top:455,
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
          left:size * 3,
          top:450,
          hasControls:false,
          selectable:false
        });
        house.scaleToWidth(size);
        house.scaleToHeight(50);

        canvas.add(house); 

        house.clone((o) => {
          let abc = o;
          abc.set({
            left:size * 9,
            top:450,
            hasControls:false,
            selectable:false
          });
          canvas.add(abc); 

        });
        house.clone((o) => {
          let abc = o;
          abc.set({
            left:size * 15,
            top:450,
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


    fabric.loadSVGFromURL('../resource/svg/school.svg', (objects, options) => { 
        var house = fabric.util.groupSVGElements(objects, options);
        house.set({
          left:size * 4,
          top:415,
          hasControls:false,
          selectable:false
        });
        house.scaleToWidth(size * 2);
        house.scaleToHeight(100);

        canvas.add(house); 

        house.clone((o) => {
          let abc = o;
          abc.set({
            left:size * 10
          });
          canvas.add(abc); 

        });

        house.clone((o) => {
          let abc = o;
          abc.set({
            left:size * 17,
          });
          canvas.add(abc); 

        });

        
        canvas.calcOffset();
        canvas.renderAll();
    });
}

function InitPlaneAndBomb(){
  //var timeToSetin = 1550;
  //var timeToSetin1 = 6550;
  var time = setInterval(function() {
    fabric.loadSVGFromURL('../resource/svg/plane.svg', (objects, options) => { 
        let sunny = fabric.util.groupSVGElements(objects, options);
        sunny.set({
          left:900,
          top:Math.floor((Math.random() * 50) + 10),
          hasControls:false,
          typeObject: 'plane'
          //selectable:false
        });
        sunny.scaleToWidth(30);
        sunny.scaleToHeight(30);

        this.canvas.sendToBack(sunny);
        this.canvas.add(sunny); 
        this.canvas.calcOffset();
        this.canvas.renderAll();
    });
    
  }, 1550);

  var time1 = setInterval(function() {
    fabric.loadSVGFromURL('../resource/svg/plane1.svg', (objects, options) => { 
        let sunny = fabric.util.groupSVGElements(objects, options);
        sunny.set({
          left:0,
          top:Math.floor((Math.random() * 90) + 110),
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
    
  }, 8550);

  //setInterval(come, 10000);
  var time1 = setInterval(function() {
    var typeOfbomb = Math.floor((Math.random() * 4) + 1);
    CreateBomb(typeOfbomb);
  },1800);


  
}

function CreateBomb(typeOfbomb){
  var leftObject = Math.floor((Math.random() * 900) + 50);
  var numberType = Math.floor((Math.random() * (lstContain.length - 1) ) + 0);
  switch (typeOfbomb){
    case 1:
      var idBombAndText = createIDobject();
      fabric.loadSVGFromURL('../resource/svg/bomb.svg', (objects, options) => { 
        let sunny = fabric.util.groupSVGElements(objects, options);
        sunny.set({
          left: leftObject,
          top:0,
          idObject: idBombAndText,
          hasControls:false,
          typeObject: 'bomb'
          //selectable:false
        });
        sunny.scaleToWidth(50);
        

        this.canvas.add(sunny); 
        
      });
      var iText2 = new fabric.IText(lstContain[numberType] , {
        left: parseInt(leftObject + positionLetter),
        top: -44,
        fontFamily: 'Helvetica',
        fontsize:6,
        fill: 'white',
        padding:7,
        hasBorders:true,
        idObject: idBombAndText,
        backgroundColor:'black',
        numberObject: "0",
        typeObject: 'textObj'
      });
      this.canvas.add(iText2);
      this.canvas.bringToFront(iText2);

      this.canvas.calcOffset();
      this.canvas.renderAll();

      break;
    case 2:
      var idBombAndText = createIDobject();
      fabric.loadSVGFromURL('../resource/svg/bomb1.svg', (objects, options) => { 
        let sunny = fabric.util.groupSVGElements(objects, options);
        sunny.set({
          left:leftObject,
          top:0,
          idObject: idBombAndText,
          hasControls:false,
          typeObject: 'bomb'
          //selectable:false
        });
        sunny.scaleToWidth(50);
        
        this.canvas.add(sunny);
      });
      var iText2 = new fabric.IText(lstContain[numberType], {
        left: parseInt(leftObject + positionLetter),
        top: -44,
        fontFamily: 'Helvetica',
        fontsize:6,
        fill: 'white',
        padding:7,
        hasBorders:true,
        idObject: idBombAndText,
        backgroundColor:'black',
        numberObject: "0",
        typeObject: 'textObj'
      });
      this.canvas.add(iText2);
      this.canvas.bringToFront(iText2);
      this.canvas.calcOffset();
      this.canvas.renderAll();
      break;
    case 3:
      var idBombAndText = createIDobject();
      fabric.loadSVGFromURL('../resource/svg/bomb2.svg', (objects, options) => { 
        let sunny = fabric.util.groupSVGElements(objects, options);
        sunny.set({
          left:leftObject,
          top:0,
          hasControls:false,
          idObject: idBombAndText,
          typeObject: 'bomb'
          //selectable:false
        });
        sunny.scaleToWidth(50);
        

        this.canvas.add(sunny);
      });

      var iText2 = new fabric.IText(lstContain[numberType], {
        left: parseInt(leftObject + positionLetter),
        top: -44,
        fontFamily: 'Helvetica',
        fontsize:6,
        fill: 'white',
        padding:7,
        hasBorders:true,
        idObject: idBombAndText,
        backgroundColor:'black',
        numberObject: "0",
        typeObject: 'textObj'
      });
      this.canvas.add(iText2);
      this.canvas.bringToFront(iText2);
      this.canvas.calcOffset();
      this.canvas.renderAll();

      break;
     case 4:
      var idBombAndText = createIDobject();
      var allowBomb = Math.floor((Math.random() * 4) + 1);
      if(allowBomb == 4){
        fabric.loadSVGFromURL('../resource/svg/bomb3.svg', (objects, options) => { 
          let sunny = fabric.util.groupSVGElements(objects, options);
          sunny.set({
            left:leftObject,
            top:0,
            hasControls:false,
            idObject: idBombAndText,
            typeObject: 'bombB'
            //selectable:false
          });
          sunny.scaleToWidth(55);
        
         
          this.canvas.add(sunny); 
          
        });

        var iText2 = new fabric.IText(lstContain[numberType], {
          left: parseInt(leftObject + positionLetter),
          top: -44,
          fontFamily: 'Helvetica',
          fontsize:6,
          fill: 'white',
          padding:7,
          hasBorders:true,
          idObject: idBombAndText,
          backgroundColor:'black',
          numberObject: "0",
          typeObject: 'textObjB'
        });
        this.canvas.add(iText2);
        this.canvas.bringToFront(iText2);
        this.canvas.calcOffset();
        this.canvas.renderAll();

      }


      break; 
  }
}

function ChangeDifficult(level){

  switch(level){
    case 1:
      timeBomb = 1800;
      speedBomb = 0.3;
      lstContain = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
      positionLetter = 9;
      break;
    case 2:
      timeBomb = 1800;
      speedBomb = 0.3;
      lstContain = ['AA','AB','AD','AG','AH','AI','AM','AN','AS','AW','AT','AX','AY','BA','BE','BI','BO','DA','DO','DY','EE','EX','FA','EN','GA','GO','HA','HE','HI','HO','ID','IF','IS','IT','OI','JO','JU','KA','KI','LA','LI','MA','ME','MI','MO'];
      positionLetter = 3;
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    case 6:
      break;
    case 7:
      break;
    case 8:
      break;
  }
}

function createIDobject(){
  var day = new Date();
  return day.getMilliseconds();
}


window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;
   
   KillBomb(String.fromCharCode(key));
}

function KillBomb(keyBomb){
    //let value = this.currentTemplate.remark;
    this.canvas.forEachObject((o) => {
        if(o.typeObject == "textObjB" || o.typeObject == "textObj"){

          var giaTritext = o.text;
          
          if(giaTritext.toString().indexOf(keyBomb) != -1){
            o.setSelectionStyles({ textBackgroundColor: 'rgba(0,255,0,00.5)' },giaTritext.toString().indexOf(keyBomb),giaTritext.toString().indexOf(keyBomb) + 1);
            var number = parseInt(o.numberObject);
            number = number + 1;
            o.set("numberObject",number)
          }

          if(parseInt(o.numberObject) == giaTritext.length){
            DeletOut(o.idObject);
          }

          
        }
        
      
    });
    this.canvas.renderAll();

}

function DeletOut(idOb){
  console.log(idOb);
  this.canvas.forEachObject((o) => {
      if(o.idObject.toString() == idOb.toString()){
          console.log("not remove ah");
          this.canvas.remove(o);
      }
  });
  this.canvas.renderAll();
}
var canvas = document.getElementById("canvas"); //Used to call the c
var ctx = canvas.getContext("2d"); // the initial call declaration b

var frog = new Image(); frog.src = "frogger.png.png";
var car = new Image(); car.src = "froggercars.png";
var car1 = new Image(); car1.src = "froggercars1.png";
var car2 = new Image(); car2.src = "froggercars2.png";
var car3 = new Image(); car3.src = "froggercars3.png";
var car4 = new Image(); car4.src = "froggercars4.png";
var car5 = new Image(); car5.src = "froggercars5.png";
var car6 = new Image(); car6.src = "froggercars6.png";
var car7 = new Image(); car7.src = "froggercars7.png";


var x = 50;
var y = 444;
var width = 30 ;
var height = 30;

var carx1 = 100;
var carx2 = 500;
var carx3 = 60;
var carx4 = 400;
var carx5 = 360;
var carx6 = 60;
var carx7 = 400;
var carx8 = 160;

var cary1 = 400;
var cary2 = 400;
var cary3 = 355;
var cary4 = 355;
var cary5 = 310;
var cary6 = 265;
var cary7 = 310;
var cary8 = 265;

var carWidth = 60;
var carHeight = 35;

var lx= 300;
var lx1= 60;
var lx2= 100;
var lx3= 400;
var lx4= 480;
var lx5= 60;
var lx6= 120;
var lx7= 500;

var ly= 180;
var ly1 = 180;
var ly2 = 136;
var ly3 = 136;
var ly4 = 92;
var ly5 = 92;
var ly6 = 48;
var ly7 = 48;

var lwidth= 120;
var lheight= 30;

var padx1 = 20;
var padx2 = 120;
var padx3 = 220;
var padx4 = 320;
var padx5 = 420;
var padx6 = 520;

var pady1 = 4;
var pady2 = 4;
var pady3 = 4;
var pady4 = 4;
var pady5 = 4;
var pady6 = 4;

var padWidth = 30;
var padHeight = 30;

var pad1 = false;
var pad2 = false;
var pad3 = false;
var pad4 = false;
var pad5 = false;
var pad6 = false;

var carAll = [car,car1,car2,car3,car4,car5,car6,car7];     
var carx = [carx1,carx2,carx3,carx4,carx5,carx6,carx7,carx8];
var cary = [cary1,cary2,cary3,cary4,cary5,cary6,cary7,cary8];


var rightPressed = false;
var leftPressed = false;
var downPressed = false;
var upPressed = false;
var up = true;
var down = true;
var right = true;
var left = true;

var lives = 3;
var livesLost = 0;
var play = true;
var victoryCondition= false;
document.addEventListener("keydown", keyDownHandler, false );
document.addEventListener("keyup", keyUpHandler, false );

 function keyDownHandler(e){
     if(e.keyCode == 39){rightPressed = true;}
     if(e.keyCode == 37){leftPressed = true;}
     if(e.keyCode == 38){upPressed = true;}
     if(e.keyCode == 40){downPressed = true;}
     
 }
 function keyUpHandler(e){
     if(e.keyCode == 39){rightPressed = false;}
     if(e.keyCode == 37){leftPressed = false;}
     if(e.keyCode == 38){upPressed = false;}
     if(e.keyCode == 40){downPressed = false;}
     
 }

function drawBackground(){
    // next up is to draw two rectangles on the Canvas
ctx.fillStyle = "green"; //USed to specify the background of the tiles
ctx.fillRect(0,440,570,45);
ctx.fillRect(0,220,570,45);
 
// add a line boundary to our car
ctx.beginPath();
ctx.moveTo(0,395);
ctx.lineTo(570,395);
ctx.strokeStyle = "white";
ctx.setLineDash([5]);
ctx.strokeWidth =2;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0,350);
ctx.lineTo(570,350);
ctx.strokeStyle = "white";
ctx.setLineDash([0]);
ctx.strokeWidth =4;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0,305);
ctx.lineTo(570,305);
ctx.strokeStyle = "white";
ctx.setLineDash([5]);
ctx.strokeWidth =2;
ctx.stroke();

//Adding water
ctx.fillStyle= "Yellow";
ctx.fillRect(0,0,570,220);
}
function drawLogs(){
    ctx.fillStyle = "tan";
    var logx = [lx,lx1,lx2,lx3,lx4,lx5,lx6,lx7];
    var logy = [ly,ly1,ly2,ly3,ly4,ly5,ly6,ly7];
    
    for(i=0;i<logx.length;i++){
       
        ctx.fillRect(logx[i],logy[i],lwidth,lheight);   
    }    
}    
function moveLogs(){

         if(lx < canvas.width +100 ){
            lx += 0.65;
       }else{lx = -100;
            }
         if(lx1 < canvas.width +100 ){
             lx1 += 0.65;
       }else{lx1 = -100;
            }
        if(lx4 < canvas.width +100 ){
            lx4 += 0.65;
       }else{lx4 = -100;
            }
        if(lx5 < canvas.width +100 ){
            lx5 += 0.65;
       }else{lx5 = -100;
            }

    
        if(lx2 > 0-lwidth ){
        lx2 -= 0.65;
        }else{
        lx2 = canvas.width+100;
        }
        if(lx3 > 0-lwidth ){
        lx3 -= 0.65;
        }else{
        lx3 = canvas.width+100;
        } 
        if(lx6 > 0-lwidth ){
        lx6 -= 0.65;
        }else{
        lx6 = canvas.width+100;
        }
        if(lx7 > 0-lwidth ){
        lx7 -= 0.65;
        }else{
        lx7 = canvas.width+100;
        }
}
function float(){
    if(lx+lwidth >= x && lx<= x+width && y+height>= ly && ly+lheight>= y ){
        if(x < canvas.width-30){
            x += 0.65;}      
            } 
    else if(lx1+lwidth >=x && lx1<= x+width && y+height>= ly1 && ly1+lheight>= y ){
        if(x < canvas.width-30){
            x += 0.65;}        
            } 
    else if(lx2+lwidth >=x && lx2<= x+width && y+height>= ly2 && ly2+lheight>= y ){
        if(x > 0){
            x -= 0.65;}        
            } 
    else if(lx3+lwidth >=x && lx3<= x+width && y+height>= ly3 && ly3+lheight>= y ){
        if(x > 0){
            x -= 0.65;}        
            } 
     else if(lx4+lwidth >=x && lx4<= x+width && y+height>= ly4 && ly4+lheight>= y ){
        if(x < canvas.width-30){
            x += 0.65;}        
            }
     else if(lx5+lwidth >=x && lx5<= x+width && y+height>= ly5 && ly5+lheight>= y ){
        if(x < canvas.width-30){
            x += 0.65;}        
            }
    else if(lx6+lwidth >=x && lx6<= x+width && y+height>= ly6 && ly6+lheight>= y ){
        if(x > 0){
            x -= 0.65;}        
            }
    else if(lx7+lwidth >=x && lx7<= x+width && y+height>= ly7 && ly7s+lheight>= y ){
        if(x > 0){
            x -= 0.65;}        
            }
    else if(y<220){
            y= 488;
            }
}
function drawPads(){
var padx = [padx1,padx2,padx3,padx4,padx5,padx6];
var pady = [pady1,pady2,pady3,pady4,pady5,pady6];
    for(i=0;i<padx.length;i++){
        ctx.fillStyle="seagreen";
        ctx.fillRect(padx[i],pady[i],padWidth,padHeight);
    }
}
function onPad(){
    if(padx1+padWidth >= x && padx1<= x+width && y+height>= pady1 && pady1+padHeight>= y ){
            pad1= true;
            y= 488;
       }else if(padx2+padWidth >= x && padx2<= x+width && y+height>= pady2 && pady2+padHeight>= y ){
            pad2= true;
            y= 488;
       }else if(padx3+padWidth >= x && padx3<= x+width && y+height>= pady3 && pady3+padHeight>= y ){
            pad3= true;
            y= 488;
       }else if(padx4+padWidth >= x && padx4<= x+width && y+height>= pady4 && pady4+padHeight>= y ){
            pad4= true;
            y= 488;
       }else if(padx5+padWidth >= x && padx5<= x+width && y+height>= pady5 && pady5+padHeight>= y ){
            pad5= true;
            y= 488;
       }else if(padx6+padWidth >= x && padx6<= x+width && y+height>= pady6 && pady6+padHeight>= y ){
            pad6= true;
            y= 488;
       }else if(y<48){
           y=488;
       }
    var pads = [pad1,pad2,pad3,pad4,pad5,pad6];
    var padx = [padx1,padx2,padx3,padx4,padx5,padx6];
    var pady = [pady1,pady2,pady3,pady4,pady5,pady6];
    for(i=0;i<padx.length;i++){
    if(pads[i]== true){
     ctx.drawImage(frog,padx[i],pady[i],padWidth,padHeight)   
    }
}
}
function drawFrog(){
    ctx.drawImage(frog,x,y,width,height);
}
function drawCars(){
   for(i=0;i<carx.length;i++){
       ctx.drawImage(carAll[i],carx[i],cary[i],carWidth,carHeight);
        
        for(j=0;j<=3;j++){
            if(carx[j] < canvas.width +100){
                carx[j] += 0.65;
            }else{carx[j] = -100; }
    }
          for(j=0;j<=3;j++){
            if(carx[j] < canvas.width +100){
                carx[j] += 2;
            }else{carx[j] = -100; }
    }
       for(k=4;k<=carx.length;k++){
            if(carx[i] > -100){
                carx[i] -= 2;
            }else{carx[i] =  canvas.width + 100; }
           
       }  
       
}
}
function drawLives(){
    if(lives - livesLost != 0){
        ctx.fillStyle = "white";
        ctx.font = "30px Arial";
        ctx.fillText("LIVES: "+ (lives - livesLost),(canvas.width/2)-70,525)
       }
    if(pad1&&pad2&&pad3&pad4&&pad5&&pad6){
        victoryCondition = true;
        ctx.font= "80px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("Victory is urs",(canvas.width/2)-60,525);
    }
}
function gameOver(){
    if(lives-livesLost == 0){
        play = false;
        ctx.fillStyle = "white";
        ctx.font = "72px Arial";
        ctx.fillText("GAME OVER BITCHES ",0,100)
        ctx.font = "28px Arial";
        ctx.fillText("refresh! ",50,150)
       }
}
function moveFrog(){
    
    if(upPressed== true && up == true && y>20){
        y = y-44;
        up = false;
    }
    if(upPressed == false){
        up = true;
       }
    

    if(downPressed== true && down == true && y+height < canvas.height-80){
        y = y+44;
        down = false;
    }
    if(downPressed == false){
        down = true;
       }
    
    
    if(rightPressed== true && right == true && x+width < canvas.width - 20 ){
        x = x+44;
        right = false;
    }
    if(rightPressed == false){
        right = true;
       }
    
    
    if(leftPressed== true && left == true && x>20){
        x = x-44;
        left = false;
    }
    if(leftPressed == false){
        left = true;
       }
    
}
function runOver(){
    
    for(i=0;i<carx.length;i++){
        
    if(x+width>= carx[i] && carx[i]+carWidth>=x && cary[i]+carHeight >= y && y+height>= cary[i]  ){
         y= 488;
    }    
    }
}


function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if(victoryCondition == false){
        drawLives();
        gameOver();
    }
    
    if(play == true ){
    drawBackground();
    drawLogs();
    moveLogs();
    float();
    drawPads();
    onPad();
    drawFrog();
    moveFrog(); 
    drawCars();
    runOver();
    
    }
        
    
    requestAnimationFrame(draw);
}
draw();



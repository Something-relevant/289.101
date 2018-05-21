/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red when the puck is over it
- the puck 'teleports' to the opposite boundary when it crosses one (think asteroids/snake)
- create an item that makes the puck bigger
- create an item that makes the puck smaller

*/

//declaring puck intial location
var puck_x = 210;
var puck_y = 210;
var puck_w = 10;
var puck_h = 10;
var puck = document.getElementById('puck');

var speed = 40;
 

//adding coordinates to puck

puck.style.top = puck_y + 'px';
puck.style.left = puck_x + 'px';

puck.style.width = puck_w + 'px';
puck.style.height = puck_h + 'px';

//function to log coordinates
function  logCoordinates(){
    console.log('x=' + puck_x + 'y=' + puck_y);
}

//collision dectection
function checkCollision(){
    
    if(puck_x >= 250 && puck_x < 350 && puck_y >= 150 && puck_y < 250){
        console.log('collision');
        
        document.getElementById('gap').style.backgroundColor = 'red';
    
         }
    else{
        
        document.getElementById('gap').style.backgroundColor = 'white';
    
    }
}

//teleport
function teleportx(){
    
    if (puck_x < 0){
        
        puck_x = 600;
    }
    
    else if(puck_x > 600){
        
        puck_x = 0;
    }
}
function teleporty(){
    
    if (puck_y < 0){
        
        puck_y = 400;
    }
    
    else if(puck_y > 400){
        
        puck_y = 0;
    }
}

function grow(){
    
    if(puck_x > 150 && puck_x < 200 && puck_y > 80 && puck_y < 130){
        
        puck_w += 10;
        puck_h += 10;
        
        puck.style.width = puck_w + 'px';
        puck.style.height = puck_h + 'px';
    }
    
}


//move left
document.getElementById('left').addEventListener('click', function(){
    
    puck_x -= speed;
    puck.style.left = puck_x + 'px';
    
    logCoordinates();
    checkCollision();
    teleportx();
    teleporty();
    grow();
});

//right button
document.getElementById('right').addEventListener('click', function(){
    
    puck_x += speed;
    puck.style.left = puck_x + 'px';
    
    logCoordinates();
    checkCollision();
     teleportx();
    teleporty();
    grow();
});

//up button
document.getElementById('up').addEventListener('click', function(){
    
    puck_y -= speed;
    puck.style.top = puck_y + 'px';
    
    logCoordinates();
    checkCollision();
     teleportx();
    teleporty();
    grow();
    
});

//down button
document.getElementById('down').addEventListener('click', function(){
    
    puck_y += speed;
    puck.style.top = puck_y + 'px';
    
    logCoordinates();
    checkCollision();
     teleportx();
    teleporty();
    grow();
    
});



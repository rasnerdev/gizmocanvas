function pintamelo() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');
    // Entrecejo...
    ctx.beginPath();
    ctx.arc(230,190,140,0,Math.PI,true);   // Boca (contra reloj)
    ctx.fillStyle="white";
    ctx.fill();


// OJO IZQUIERDO
//////////////////////////////////////////////////////////////////////////
	// Circulo marrón ojo izquierdo (GRANDE)
    ctx.beginPath();
    ctx.arc(100,240,190,0,Math.PI,true);   // Boca (contra reloj)
    ctx.fillStyle="#7B3F1B";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(130,150,50,0,Math.PI*2,true); // Círculo
    ctx.fillStyle="#FABF9B";
    ctx.fill();

	// Ojo ovalado blanco del ojo izquierdo
	ctx.save();
	ctx.scale(1.4, 1.3);
	ctx.beginPath();
	ctx.arc(93,115,32,0,Math.PI*2,true); // Círculo
	ctx.fillStyle="white";
	ctx.fill();
	ctx.closePath();
	ctx.restore();

    ctx.beginPath();
    ctx.arc(130,150,30,0,Math.PI*2,true); // Círculo
    ctx.fillStyle="#7B3F1B";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(130,150,20,0,Math.PI*2,true); // Círculo
    ctx.fillStyle="black";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(147,152,4,0,Math.PI*2,true); // Círculo
    ctx.fillStyle="white";
    ctx.fill();


// OJO DERECHO
//////////////////////////////////////////////////////////////////////////
    ctx.beginPath();
    ctx.arc(330,150,100,0,Math.PI*2,true); // Círculo
    ctx.fillStyle="white";
    ctx.fill();
    


    ctx.beginPath();
    ctx.arc(330,150,50,0,Math.PI*2,true); // Círculo
    ctx.fillStyle="#FABF9B";
    ctx.fill();

// Ojo ovalado blanco del ojo izquierdo
	ctx.save();
	ctx.scale(1.4, 1.3);
	ctx.beginPath();
	ctx.arc(236,115,32,0,Math.PI*2,true); // Círculo
	ctx.fillStyle="white";
	ctx.fill();
	ctx.closePath();
	ctx.restore();


    ctx.beginPath();
    ctx.arc(330,150,30,0,Math.PI*2,true); // Círculo
    ctx.fillStyle="#7B3F1B";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(330,150,20,0,Math.PI*2,true); // Círculo
    ctx.fillStyle="black";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(348,153,4,0,Math.PI*2,true); // Círculo
    ctx.fillStyle="white";
    ctx.fill();

////////////////////////////////////////////////////////////////
    // Cuadro para hacer ojo derecho recto 
    ctx.beginPath();
    ctx.moveTo(208,112);
    ctx.lineTo(208,192);
    ctx.lineTo(238,192);
    ctx.lineTo(238,112);
    ctx.fillStyle="#7B3F1B"; 
    ctx.closePath();
    ctx.fill();
//////////////////////////////////////////////////////////////////


var lapiz = canvas.getContext('2d');
lapiz.rotate(-35*Math.PI/180);
lapiz.save();
lapiz.scale(0.60, 1);
lapiz.beginPath();
lapiz.arc(62, 193, 10, 0, Math.PI*2, false);
lapiz.fillStyle="white";
lapiz.fill();
lapiz.closePath();
lapiz.restore();

lapiz.save();
lapiz.scale(0.60, 1);
lapiz.beginPath();
lapiz.arc(335, 310, 10, 0, Math.PI*2, false);
lapiz.fillStyle="white";
lapiz.fill();
lapiz.closePath();
lapiz.restore();



////////////////////////////////////////////////////////
// OCICO

// 1º ovalo
lapiz.rotate(35*Math.PI/180);
lapiz.save();
lapiz.scale(1.2, 0.8);
lapiz.beginPath();
lapiz.arc(195,230,30,0,Math.PI*2,true); // Círculo
//nariz1.arc(62, 193, 10, 0, Math.PI*2, false);
lapiz.fillStyle="#FABF9B";
lapiz.fill();
lapiz.closePath();
lapiz.restore();


// 2º Óvalo
lapiz.save();
lapiz.scale(1, 0.5);
lapiz.beginPath();
lapiz.arc(235,460,80,0,Math.PI*2,true); // Círculo
//nariz1.arc(62, 193, 10, 0, Math.PI*2, false);
lapiz.fillStyle="#FABF9B";
lapiz.fill();
lapiz.closePath();
lapiz.restore();


// 3º Óvalo
lapiz.save();
lapiz.scale(1, 0.4);
lapiz.beginPath();
lapiz.arc(235,660,120,0,Math.PI*2,true); // Círculo
//nariz1.arc(62, 193, 10, 0, Math.PI*2, false);
lapiz.fillStyle="#FABF9B";
lapiz.fill();
lapiz.closePath();
lapiz.restore();

//////////////////////////////////////////////////////////////////////////	
	// Ocico
	ctx.beginPath();
	ctx.fillStyle="black"; 
//	ctx.strokeStyle = "#A36651";
//	ctx.strokeStyle="#7B3F1B"; 
	ctx.strokeStyle = "#AD705E";
    ctx.beginPath();
	ctx.lineWidth = 3;

	ctx.moveTo(150, 250);
	ctx.quadraticCurveTo(170, 270, 200, 250);
	ctx.moveTo(200, 250);
	ctx.quadraticCurveTo(235, 230, 270, 250);
	ctx.moveTo(270, 250);
	ctx.quadraticCurveTo(295, 270, 320, 250);
	ctx.stroke();


// ARREGLOS DEL OCICO
	ctx.strokeStyle = "#7B3F1B";
    ctx.beginPath();
	ctx.lineWidth = 45;

	ctx.moveTo(105, 290);
	ctx.quadraticCurveTo(235, 320, 365, 290);
	ctx.stroke(); 




// AGUJEROS DE LA NARIZ
// #B97C6A
	ctx.beginPath();
	ctx.fillStyle="black"; 
//	ctx.strokeStyle = "#A36651";
//	ctx.strokeStyle="#7B3F1B"; 
	ctx.strokeStyle = "#B97C6A";
    ctx.beginPath();
	ctx.lineWidth = 3;

// Agujero izquierdo
lapiz.rotate(35*Math.PI/180);
lapiz.save();
lapiz.scale(0.7, 1);
lapiz.beginPath();
lapiz.arc(405,20,10,0,Math.PI*2,true); // Círculo
lapiz.fillStyle="#B97C6A";
lapiz.fill();
lapiz.closePath();
lapiz.restore();

// Agujero derecho
lapiz.rotate(-55*Math.PI/180);
lapiz.save();
lapiz.scale(0.7, 1);
lapiz.beginPath();
lapiz.arc(245,253,10,0,Math.PI*2,true); // Círculo
lapiz.fillStyle="#B97C6A";
lapiz.fill();
lapiz.closePath();
lapiz.restore();


// Agujero derecho
lapiz.rotate(20*Math.PI/180);
lapiz.save();
lapiz.scale(1, 1.2);
lapiz.beginPath();
lapiz.arc(235,373,100,0,Math.PI*2,true); // Círculo
lapiz.fillStyle="white";
lapiz.fill();
lapiz.closePath();
lapiz.restore();





ctx.fillStyle="white";
	ctx.strokeStyle = "white";
ctx.moveTo(208, 282);
ctx.quadraticCurveTo(185, 330, 140, 340);
 
ctx.quadraticCurveTo(250, 360, 335, 340);

ctx.quadraticCurveTo(300, 332, 270, 282);

ctx.quadraticCurveTo(240, 282, 208, 282);

ctx.fill(); 


ctx.stroke();
 




  }
}

pintamelo(); 
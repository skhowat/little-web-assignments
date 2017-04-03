var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

console.log(context);

//context.fillStyle = 'blue';
//context.fillRect(20, 50, 40, 200);

//context.fillStyle = 'green';
//context.fillRect(120, 100, 40, 150);

//context.fillStyle = 'red';
//context.fillRect(220, 150, 40, 100);

/*context.beginPath();
context.moveTo(50, 50);
context.lineTo(200, 60);
context.lineTo(150, 90);

context.stroke();
context.fillStyle = 'red';
context.fill();*/

context.beginPath();
context.arc(200, 200, 50, 0, Math.PI * 2);

context.fill();

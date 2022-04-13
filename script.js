/**@type{HTMLCanvasElement} */

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;

let x = 0;
let y = 0;
let hue = Math.random() * 360
let hue1 = Math.random() * 360;

function draw() {
 
if (Math.random() > 0.5) {
  ctx.beginPath();
  ctx.shadowColor = "rgba(255,255,255,0.7)";
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = 5;
  ctx.shadowBlur = 10;
  ctx.lineWidth = 5
  ctx.strokeStyle = "hsl(" + hue + ", 100%, 50%)";
  ctx.moveTo(0 + x, 0 + y);
  ctx.lineTo(25 + x, 25 + y);
  ctx.stroke();
}else{
   
   ctx.beginPath();
   ctx.shadowColor = "rgba(255,255,255,0.7)";
   ctx.shadowOffsetX = 5;
   ctx.shadowOffsetY = 5;
   ctx.shadowBlur = 10;
   ctx.strokeStyle = "hsl(" + hue1 + ", 100%, 50%)";
   ctx.moveTo(25 + x, 0 + y);
   ctx.lineTo(0 + x, 25 + y);
   ctx.stroke();
}
   x = x += 25;
    if(x > canvas.width){
      y = y + 25
      x *= -1
    }else if (y  > canvas.height) {
      requestAnimationFrame(false)
    }
  }
      
    


function animate() {
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.fillStyle = "rgba(255, 255, 255, 0.001)";
  // ctx.fillRect(0, 0, canvas.width, canvas.height);
  draw();

  requestAnimationFrame(animate);
}

animate();

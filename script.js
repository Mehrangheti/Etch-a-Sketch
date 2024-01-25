const resize = document.querySelector('#resize');
const eraser = document.querySelector('.eraser');
const brush = document.querySelector('.brush');
const color = document.querySelector('.color');
const clear = document.querySelector('.clear');



const canvas= document.querySelector('canvas')
const area= canvas.getContext('2d')

let drawing_during=false
let current_color=''

window.addEventListener('load', ()=>{
  
  canvas.width=canvas.offsetWidth
  canvas.height=canvas.offsetHeight
})

function draw(e) {
  if (!drawing_during) return
  area.lineTo(e.offsetX, e.offsetY)
  area.strokeStyle=`${current_color}`
  area.stroke()
}
function str_drawing() {
   drawing_during=true
   area.beginPath()
}
function draw_end() {
  drawing_during=false
}
color.addEventListener('change', ()=>{
   current_color=color.value
})
brush.addEventListener('click', ()=>{
  brush.classList.add('active')
  eraser.classList.remove('active')
  current_color=color.value
  draw()
})
eraser.addEventListener('click', ()=>{
  eraser.classList.add('active')
  brush.classList.remove('active')
  current_color= 'white'
})
clear.addEventListener('click', ()=>{
  area.fillStyle='white'
  area.fillRect(0,0,canvas.width,canvas.height)
})

resize.addEventListener('click', () => {

  let newWSize = prompt('Please enter the width size:');
  let newHSize = prompt('Please enter the height size:');

  if (newWSize !== null && newHSize !== null) {
    newWSize = parseInt(newWSize);
    newHSize = parseInt(newHSize);

    canvas.style.width = newWSize + "px";
    canvas.style.height = newHSize + "px";
    canvas.width = newWSize;
    canvas.height = newHSize;

    area.fillStyle = 'white';
    area.fillRect(0, 0, canvas.width, canvas.height);
   
  } else {
    alert('Please enter a valid number for the size.');
  }
});



canvas.addEventListener('mousedown', str_drawing)
canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', draw_end)

  
  
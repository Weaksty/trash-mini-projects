const allButton = document.getElementById("allButton")
const sqares = document.querySelectorAll('.sq')
let Curindex = 0
let toggle = false 
function ShowSq(index) {
    sqares.forEach(sq => sq.classList.remove('active'))
    Curindex = index; 
    sqares[Curindex].classList.add('active')
    allButton.classList.remove('allButtonOn')
    allButton.classList.add('allButtonOff')
    toggle = false
}
function prev(){
    sqares.forEach(sq => sq.classList.remove('active'))
    Curindex = (Curindex - 1 + sqares.length) % 4; 
    sqares[Curindex].classList.add('active')
    allButton.classList.remove('allButtonOn')
    allButton.classList.add('allButtonOff')
    toggle = false
}
function next(){
    sqares.forEach(sq => sq.classList.remove('active'))
    Curindex = (Curindex + 1) % 4; 
    sqares[Curindex].classList.add('active')
    allButton.classList.remove('allButtonOn')
    allButton.classList.add('allButtonOff')
    toggle = false
}
function All(){
    toggle = !toggle
    if (toggle === true){
    allButton.classList.remove('allButtonOff')
    allButton.classList.add('allButtonOn')
    sqares.forEach(sq => sq.classList.add('active'))
    }else{ 
    allButton.classList.add('allButtonOff')
    allButton.classList.remove('allButtonOn')
    sqares.forEach(sq => sq.classList.remove('active'))
    }

}



let pos = 0
let width = 300
let speed = 4
let totalWidth = 3000 + 160
let move = 0 // if 1 move left if -1 move rigth if 0 stop

const img = document.querySelectorAll("img")
const track = document.querySelector('.track')
const left = document.querySelector('.left')
const rigth = document.querySelector('.rigth')



function amimate(){
    if(move!== 0){
        pos += move * speed
    }
    if(pos >    0){
        pos = -2470
    }
    if(pos < -3110){
        pos = -640
    }
    
track.style.transform = `translateX(${pos}px)`

requestAnimationFrame(amimate);

}

amimate()
left.addEventListener("mouseenter", ()=> {
    move = 1
})
rigth.addEventListener("mouseenter", ()=> {
    move = -1
})
left.addEventListener("mouseleave", ()=> {
    move = 0
})
rigth.addEventListener("mouseleave", ()=> {
    move = 0
})
img.forEach(e => {
    e.addEventListener("mouseenter", ()=> {
    left.style.backgroundColor = "rgba(255, 255, 255, 0)"
})
});  
img.forEach(e => {
    e.addEventListener("mouseenter", ()=> {
    rigth.style.backgroundColor = "rgba(255, 255, 255, 0)"
})
}); 
img.forEach(e => {
    e.addEventListener("mouseleave", ()=> {
    left.style.backgroundColor = "rgba(255, 255, 255, 0.2)"
})
}); 
img.forEach(e => {
    e.addEventListener("mouseleave", ()=> {
    rigth.style.backgroundColor = "rgba(255, 255, 255, 0.2)"
})
}); 


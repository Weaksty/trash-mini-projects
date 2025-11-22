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


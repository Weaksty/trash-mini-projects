const sqares = document.querySelectorAll('.sq')
let Curindex = 0
let toggle = false 
function ShowSq(index) {
    sqares.forEach(sq => sq.classList.remove('active'))
    Curindex = index; 
    sqares[Curindex].classList.add('active')
}
function prev(){
    sqares.forEach(sq => sq.classList.remove('active'))
    Curindex = (Curindex - 1 + sqares.length) % 4; 
    sqares[Curindex].classList.add('active')
}
function next(){
    sqares.forEach(sq => sq.classList.remove('active'))
    Curindex = (Curindex + 1) % 4; 
    sqares[Curindex].classList.add('active')
}
function All(){
    toggle = !toggle
    if (toggle === true){
    sqares.forEach(sq => sq.classList.add('active'))
    }else{ sqares.forEach(sq => sq.classList.remove('active'))}

}






function createCounter(){
    let count = 0
    return{
        inc: function(){return count++;},
        dec: function(){return count--;},
        reset: function(){return count=0;},
        get: function(){return count;}
    }
}
let counter = createCounter()
console.log(counter.get()); // 0
counter.inc();
console.log(counter.get()); // 1
counter.inc();
console.log(counter.get()); // 2
counter.dec();
console.log(counter.get()); // 1
counter.reset();
console.log(counter.get()); // 0

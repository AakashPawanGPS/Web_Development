
var noOfDrums = document.querySelectorAll(".drum").length;

for(var i=0; i<noOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener('click',handleClick)
}

function handleClick() {
    var buttonClicked = this.innerHTML;
    makeSound(buttonClicked)
    buttonAnimation(buttonClicked)
}

document.addEventListener('keypress',function(event) {
    makeSound(event.key)
    buttonAnimation(event.key)
})

function makeSound(key){

    switch(key){
        case 'w': 
            var audio = new Audio('sounds/crash.mp3')
            audio.play()
            break;

        case 's':
            var audio = new Audio('sounds/tom-2.mp3')
            audio.play()
            break;
        
        case 'a':
            var audio = new Audio('sounds/tom-3.mp3')
            audio.play()
            break;
        
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3')
            audio.play()
            break;
        
        case 'j':
            var audio = new Audio('sounds/kick-bass.mp3')
            audio.play()
            break;
        
        case 'k':
            var audio = new Audio('sounds/tom-1.mp3')
            audio.play()
            break;
        
        case 'l':
            var audio = new Audio('sounds/snare.mp3')
            audio.play()
            break;

        default:
            alert('Press Valid Key')
        
    }

}

function buttonAnimation(keyClicked){
    var clicked = document.querySelector("."+keyClicked)
    clicked.classList.add('pressed')
    setTimeout(function(){
        clicked.classList.remove('pressed')
    },100)
}
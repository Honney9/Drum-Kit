let drumsClicks=document.querySelectorAll(".drum")

for (let i = 0; i < drumsClicks.length; i++) {
    drumsClicks[i].addEventListener("click", function(){
        let buttonClick=this.innerHTML;
        makeSound(buttonClick);
        buttonAnimation(buttonClick);
    });
}

document.addEventListener("keydown", function(event){
    console.log(event.key);
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    switch (key) {
        case 'w':
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'j':
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'k':
            var audio=new Audio("sounds/kick.mp3");
            audio.play();
            break;
        case 'l':
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey){
    let activeButton=document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
}
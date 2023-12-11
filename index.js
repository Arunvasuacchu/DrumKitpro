let numberOfDrums = document.querySelectorAll(".drum").length

for(let i = 0; i < numberOfDrums; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    let buttonInnerHTML = this.innerHTML
    keySounds(buttonInnerHTML)
    buttonAnimation(buttonInnerHTML)
    
  })
}


document.addEventListener("keydown", function(event){
  keySounds(event.key)
  buttonAnimation(event.key)
})
  function keySounds(key){
    switch(key){
      case "w":
        let tom1 = new Audio("sounds/tom-1.mp3")
        tom1.play()
        break;

      case "a":
        let tom2 = new Audio("sounds/tom-2.mp3")
        tom2.play()
        break
      case "s":
        let tom3 = new Audio("sounds/tom-2.mp3")
          tom3.play()
          break
      case "d":
        let tom4 = new Audio("sounds/tom-3.mp3")
        tom4.play()
        break
      case "j":
        let tom5 = new Audio("sounds/tom-4.mp3")
        tom5.play()
        break
      case "k":
        let tom6 = new Audio("sounds/crash.mp3")
        tom6.play()
        break
      case "l":
        let tom7 = new Audio("sounds/kick-bass.mp3")
        tom7.play()
        break
        default:        
    }   
  }

  function buttonAnimation(currentKey){
    
    let activeButton =   document.querySelector("." + currentKey)
    
    activeButton.classList.add("pressed")

    setTimeout(function(){
      activeButton.classList.remove("pressed")
    }, 100)
  }

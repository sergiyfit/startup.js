
// let box = document.querySelector(".box")
// let circle = document.querySelector(".circle")

// let corX, corY

// box.addEventListener("mousedown", dragndrop)
// circle.addEventListener("mousedown", dragndrop)
  
// function dragndrop(e){
//   corX = e.pageX - this.getBoundingClientRect().x
//   corY = e.pageY - this.getBoundingClientRect().y
//   this.addEventListener("mousemove", move)
//   this.style.zIndex = 2
  
// }

// function move(e){
//   this.style.position = "fixed"
//   this.style.left = e.pageX - corX + "px"
//   this.style.top = e.pageY - corY + "px"
// }

// box.onmouseup = dragend
// circle.onmouseup = dragend
  
// function dragend(){
//   this.style.zIndex = 1

//   this.removeEventListener("mousemove", move)

// }


// let elem1 = document.querySelector(".box")
// let elem2 = document.querySelector(".circle")

// let isMoved = false

// let shiftX = 0
// let shiftY = 0



// elem1.addEventListener("mousedown", myMouseDown)
// elem1.addEventListener("mouseup", myMouseUp)

// elem2.addEventListener("mousedown", myMouseDown)
// elem2.addEventListener("mouseup", myMouseUp)

// function myMouseDown(event){
      

  
//   shiftX = event.pageX - this.getBoundingClientRect().x
//   shiftY = event.pageY - this.getBoundingClientRect().y
  
//   this.addEventListener("mousemove", myMouseMove)

// }

// function myMouseMove(event){
  
    
//    this.style.left = (event.pageX - shiftX) + "px"
//    this.style.top = (event.pageY - shiftY) + "px"
   

  
// }

// function myMouseUp(event){
//    isMoved = false
//    this.removeEventListener("mousemove", myMouseMove)
// }





let element = document.querySelector("#norobot-switch")

let containerStart = document.querySelector("#norobot-off")
let containerEnd = document.querySelector("#norobot-on")

let bufferElement

containerStart.ondragover = function(e){
    e.preventDefault()
} 
containerEnd.ondragover = function(e){
    e.preventDefault()
} 

element.ondragstart = elemOndragStart

element.ondragend = elemOnDragEnd
  

containerEnd.ondrop = function() {
    console.log(bufferElement)
    containerEnd.appendChild(bufferElement)

}

function elemOndragStart(){
    setTimeout(() => {
        this.classList.add("show")
    }, 0)
    bufferElement = this
}

function elemOnDragEnd(){
      setTimeout(() => {
        element.classList.remove("show")
    }, 0)
}
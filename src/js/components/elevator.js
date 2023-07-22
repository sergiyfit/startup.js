//  Clients
//  Blog
//  Works
//  About
//  Services
//  Home
//  Contact

// let elevatorScrolY = [  brand.posY , blog.posY , shop.posY , about.posY , services.posY , header.posY , contact.posY  ]

let menuitems = document.querySelectorAll(".menu-item")


menuitems.forEach( (item , index) => {

    

    item.onclick = function(e) {
        let elevatorScrolY = [  brand.posY , blog.posY , shop.posY , about.posY , services.posY , header.posY , contact.posY  ]
        e.preventDefault()
        burger.classList.remove("menu-burger-active")
        // window.scrollTo(0, elevatorScrolY[index])
        menuList.classList.remove("show")   
        calcSizeElements()
        elevaror(window.scrollY, elevatorScrolY[index])
    }

})

const contactButton = document.querySelector("#get-in-touch")
contactButton.onclick = () => {
    elevaror(window.scrollY, contact.posY)
}

const STARTSPEED = 5
const MAXSPEED = 50

const PERCENT_OF_SPEED_DISTANCE = 0.05

function elevaror(startPosition, endPosition) {

setTimeout(() => {

    let lastPoint = document.body.offsetHeight - window.innerHeight;
    
    if (endPosition > lastPoint) endPosition = lastPoint;

    const distance = Math.abs(endPosition - startPosition)
    const currentPosition = Math.abs(window.scrollY - startPosition)
  
    
    let isStatOrEnd = (Math.abs(window.scrollY - startPosition) < PERCENT_OF_SPEED_DISTANCE * distance)||
                      (Math.abs(window.scrollY - endPosition) < PERCENT_OF_SPEED_DISTANCE * distance)

    let currentSpeed = isStatOrEnd ? STARTSPEED : MAXSPEED

    const nextPosition = window.scrollY + (startPosition < endPosition ? currentSpeed : (-1) * currentSpeed )

    window.scrollTo(0, nextPosition)

    if ( Math.abs(window.scrollY - endPosition) >= STARTSPEED ) elevaror(startPosition, endPosition)  
    
}, 50);

}
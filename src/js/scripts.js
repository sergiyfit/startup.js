let header = document.querySelector(".header")

let services = document.querySelector(".services")

let about = document.querySelector(".about-us")

let shop = document.querySelector(".shop")

let sticker = document.querySelector(".sticker")

let blog = document.querySelector(".blog")

let brand = document.querySelector(".brand")

let contact = document.querySelector(".contact")

let footer = document.querySelector(".footer")

let menu = document.querySelector(".header-panel")

let arrPage = [ header , services ,about , shop , sticker , blog , brand ,contact , footer ]

window.onresize = resizeAll

function resizeAll(){
    setTimeout(() => {
        sliderUser.calcSize()
        sliderBrand.calcSize()
        cardResize()
    
        setTimeout(() => {
            calcSizeElements()
        },1500)
    
    } , 100)
}

window.onscroll = function(event) {
    if (window.scrollY > header.getBoundingClientRect().height - menu.getBoundingClientRect().height){
        // menu.style.backgroundColor = "#c0301c"
        menu.classList.add("painting")
        menu.style.padding = "10rem 0"
    } else {
        menu.classList.remove("painting")
        // menu.style.backgroundColor = "transparent"
        menu.style.padding = "40rem 0"
    }
    
    arrPage.forEach(element => {
        if (element.posY - 0.8 * window.innerHeight < window.scrollY) {
            animremove(element)
        }
    })
}


function calcSizeElements(){
    let lastScrolX = 0


    arrPage.forEach(element => {
        element.posY = lastScrolX;
        lastScrolX += Number.parseInt(element.getBoundingClientRect().height)
        // lastScrolX += Number.parseInt(getComputedStyle(element).height)
        
    });
}

function cardResize(){    
    const cardsArray = document.querySelectorAll(".shop-card-hoverblock")    
    cardsArray.forEach( cardElement => {
        const cardHeight = Number.parseInt(getComputedStyle(cardElement).width)
        cardElement.style.height = cardHeight + "rem"
        cardElement.parentElement.style.height = cardHeight + "rem"

        cardElement.parentElement.onclick = () => {
            cardElement.classList.add("levelUp")
        }

        cardElement.onclick = () => {
            cardElement.classList.toggle("levelUp")
        }
    })

}

resizeAll()


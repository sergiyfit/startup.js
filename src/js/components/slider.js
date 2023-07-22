const sliderUser = new slider()
const slidesAll = document.querySelectorAll(".slide")

sliderUser.setSlideContainer(".slide")
sliderUser.startShiftSlides()


const slideHolder = document.querySelectorAll(".slider")
slidesAll.forEach(slide => {
    slide.onmouseenter = () => {
        sliderUser.endShiftSlides()
    }
    slide.onmouseleave = () => {
        sliderUser.startShiftSlides()
    }

})

const nextBtn = document.querySelector(".slider-button-next")
const preBtn = document.querySelector(".slider-button-pre")

nextBtn.onclick = () => {
    sliderUser.endShiftSlides()
    let shiftIndex = sliderUser.visibleSlides || 1 
    sliderUser.moveSlide(3)
    sliderUser.startShiftSlides()  
}

preBtn.onclick = () => {
    sliderUser.endShiftSlides()
    sliderUser.moveSlide(-3)
    sliderUser.startShiftSlides() 
}

function moveSlide(direction){
    if (!sliderUser.isShifting){

        sliderUser.endShiftSlides()
        if (direction > 0) {
            sliderUser.preSlide()
        } else {
            sliderUser.nextSlide()
        } 
        sliderUser.startShiftSlides()    
    }
}



document.addEventListener( 'visibilitychange' , function() {
    if (document.hidden) {
        sliderUser.endShiftSlides()
        sliderBrand.endShiftSlides()
        
    } else {
        sliderUser.calcSize()
        sliderUser.startShiftSlides()
        sliderBrand.calcSize()
        sliderBrand.startShiftSlides()
    }
}, false )
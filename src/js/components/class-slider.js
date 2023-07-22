class slider {
    slideContainer = []
    slideCount 
    tagName = ""
    columnGapSlidesPX = 30
    slideMinFixedWidthPX = 250
    isSizindBySlideWidth = false 

    wrapperWidthPX = null
    visibleSlides = null
    slideWidth = null

    startShifting = null
    overFlowRemoving = null

    switchSlidesTime = 5000
    speedSliders = 3

    overflowSlide = null

    isShifting = true
    
    setSlideIntervalTime(switchSlidesTime){
        this.switchSlidesTime = switchSlidesTime
    }

    getSlidesByTagname(){
        return document.querySelectorAll(this.tagName)
    }


    setSlideContainer(tagName){
        this.tagName = tagName
        this.slideContainer = this.getSlidesByTagname()
        this.slideCount = this.slideContainer.length
        this.calcSize()
        this.overflowSlide = this.slideContainer[0]
    } 


    calcSize(){
        if(this.isShifting){
            this.removeOverflow()
            clearInterval(this.overFlowRemoving)
        }

        this.wrapperWidthPX = Number.parseInt(getComputedStyle(this.slideContainer[0].parentElement).width)
        this.visibleSlides = Number.parseInt(this.wrapperWidthPX / (this.slideMinFixedWidthPX + this.columnGapSlidesPX))

        if (this.visibleSlides > this.slideContainer.length) {this.visibleSlides = this.slideContainer.length}
        
        this.slideWidth = (this.wrapperWidthPX - (this.visibleSlides - 1) * this.columnGapSlidesPX) / this.visibleSlides
        
        if (this.visibleSlides == 1) { this.slideWidth = this.wrapperWidthPX }

        this.printSlides()
    }

    printSlides() {
        let maxHeight = null
        this.slideContainer.forEach( (slide , index)  => {
            slide.style.width = this.slideWidth + "px"
            const slideLeft = (index * this.slideWidth + ( index > 0 ? index * this.columnGapSlidesPX : 0))
            slide.style.left = slideLeft + "px" 
            slide.classList.remove("slide-phantom")
        });

        setTimeout(() => {
            this.slideContainer.forEach( slide => {
                if (!maxHeight || maxHeight < Number.parseInt(getComputedStyle(slide).height)) {
                    maxHeight = Number.parseInt(getComputedStyle(slide).height)
                }
            })
            this.slideContainer[0].parentElement.style.height = maxHeight + "px"
        }, 1050);
    }

    startShiftSlides(){
        this.startShifting =  setInterval(() => {
            this.nextSlide()
        } , this.switchSlidesTime)
    }

    endShiftSlides(){
        clearInterval(this.startShifting)
        clearInterval(this.overFlowRemoving)
    }

    nextSlide() {
        this.moveSlide(1)
    }

    preSlide(){
        this.moveSlide(-1)
    }

    moveSlide(direction){      
        this.removeOverflow()
        this.isShifting = true
        let slideArr = []
        this.slideContainer.forEach( slide => { slideArr.push(slide) })
        const absDir = Math.abs(direction)
        const minusOne = absDir / direction
        slideArr.sort((a , b) => minusOne*Number.parseInt(getComputedStyle(a).left) - minusOne*Number.parseInt(getComputedStyle(b).left ))
        this.overflowSlide = slideArr[0]
        
        let wrapperX =  this.columnGapSlidesPX * (this.slideCount - 1) + this.slideWidth * (this.slideCount)

        for (let i = 0 ; i < absDir ; i++){            
            const bufPhantom = slideArr[i].cloneNode(true)
            slideArr[i].classList.add("slide-overslide")
            bufPhantom.classList.add("slide-phantom")            
            slideArr[i].parentElement.appendChild(bufPhantom)
                bufPhantom.style.left = (direction > 0 ? 
                (wrapperX + this.columnGapSlidesPX * (i+1) + this.slideWidth * i) : 
                (this.slideWidth + this.columnGapSlidesPX) * (-i-1) ) + "px"
                slideArr.push(bufPhantom)
        }
        
        let timerCount = Number.parseInt(this.switchSlidesTime / this.speedSliders)
        timerCount += 0.1 * timerCount
        
        this.overFlowRemoving = setTimeout(() => {  
            slideArr.forEach( slide => { slide.classList.remove("slide-phantom") })           
        } , timerCount)

        setTimeout(() => {  
            this.setSlidesLeft(slideArr ,direction)
        }, 100)
    }

    setSlidesLeft(slidesContainer ,direction){
        slidesContainer.forEach( (slide , index) => {            
            let slideLeftMove = direction > 0 ? index * (this.slideWidth +  this.columnGapSlidesPX) - direction * (this.slideWidth + this.columnGapSlidesPX) :
            ((this.slideCount - index - direction - 1 ) * this.slideWidth + this.columnGapSlidesPX * (this.slideCount - index - direction - 1) )
            slide.style.left = slideLeftMove + "px"            
        });
    }

    removeOverflow(){        
        let removeSlides = document.querySelectorAll(".slide-overslide")
        removeSlides.forEach(slide => slide.parentElement.removeChild(slide) );
        this.slideContainer = this.getSlidesByTagname()
        this.isShifting = false
    }
}
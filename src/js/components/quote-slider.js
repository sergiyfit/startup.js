class brendSlider extends slider {
    quoteSource = null
    authorSource = null

    slideMinFixedWidthPX = 100
    columnGapSlidesPX = 100

    checkedClass = null
    brandNav = null

    navIndex = 0
    
    getNavIndex(){
        return this.navIndex
    }

    setquoteSource(quoteSource){
        this.quoteSource = quoteSource
    }

    setAuthorSource(authorSource){
        this.authorSource = authorSource
    }

    setSlideByAuthor(author){
        this.slideContainer.forEach((slide, index) => {            
            if (author == slide.querySelector(".brand-carousel-author").textContent) {
                this.overflowSlide = slide
                this.moveSlide(index)
                this.printQuote()
            }            
        })
    }

    nextSlide(){
        this.moveSlide(1)
        this.printQuote()
    }
    
    preSlide(){
        this.moveSlide(-1)
        this.printQuote()
    }

    printQuote(){
        this.quoteSource.style.opacity = 0.1
        this.authorSource.style.opacity = 0.1
        let overflowSlideAuthor = null
        if (this.overflowSlide) {
            this.quoteSource.innerHTML = this.overflowSlide.querySelector("p").textContent
            const slideAuthor  = this.overflowSlide.querySelector(".brand-carousel-author")
            overflowSlideAuthor = slideAuthor.textContent
            this.authorSource.innerHTML = overflowSlideAuthor
        }
        this.printNavCircle(overflowSlideAuthor)

        setTimeout(() => {        


            this.quoteSource.style.opacity = 1
            this.authorSource.style.opacity = 1

        }, this.switchSlidesTime / 4);
    }

    setBrandNavigationPoints(brandNav , checkedClass){
        this.brandNav = brandNav 
        this.checkedClass = checkedClass
    }

    printNavCircle(slideAuthor){
        this.brandNav.forEach((navpoint , index) => {
            navpoint.classList.remove(this.checkedClass)
            if (slideAuthor) {
                const author = navpoint.querySelector("p")
                if (author.textContent == slideAuthor)  {
                    navpoint.classList.add(this.checkedClass)
                    this.navIndex = index
                }     
            }
        });        
    }

}

const sliderBrand = new brendSlider()

sliderBrand.setSlideContainer(".brand-carousel-item")

const quote = document.querySelector(".brand-content-quote")
const authorSource = document.querySelector(".brand-content-author")

sliderBrand.setquoteSource(quote)
sliderBrand.setAuthorSource(authorSource)

const quotesAll = document.querySelectorAll(".brand-carousel-quote")
const authorsAll = document.querySelectorAll(".brand-carousel-author")

const circleHolder = document.querySelector(".brand-navigation")

authorsAll.forEach( (author , index) => {
    const quoteCircle = document.createElement("div")
    quoteCircle.classList.add("brand-navigation-circle")        
    const quoteCircleAuthor = document.createElement("p")
    quoteCircleAuthor.innerHTML = author.textContent
    quoteCircle.indexQuote = index

    quoteCircle.onclick = function() {     
        
        sliderBrand.endShiftSlides()   

        // sliderBrand.calcSize()
        // sliderBrand.setSlideByAuthor(author.textContent)
        // sliderBrand.classList.add("brand-navigation-circle__checked")
        
        // setTimeout(() => {
        // }, 10000);
        // sliderBrand.startShiftSlides()            

        let clrCircles = document.querySelectorAll(".brand-navigation-circle")
        clrCircles.forEach(element => element.classList.remove("brand-navigation-circle__checked"))

        quote.textContent = quotesAll[+quoteCircle.indexQuote].textContent
        authorSource.textContent = authorsAll[+quoteCircle.indexQuote].textContent
        quoteCircle.classList.add("brand-navigation-circle__checked")
    }

    circleHolder.appendChild(quoteCircle)
    quoteCircle.appendChild(quoteCircleAuthor)

    quoteCircleAuthor.style.display = "none"
});

const brandNavCircle = document.querySelectorAll(".brand-navigation-circle")
sliderBrand.setBrandNavigationPoints(brandNavCircle , "brand-navigation-circle__checked")

sliderBrand.startShiftSlides()

quote.onmouseenter = () => {
    sliderBrand.endShiftSlides()
}
quote.onmouseleave = () => {
    sliderBrand.calcSize()
    sliderBrand.startShiftSlides()
}


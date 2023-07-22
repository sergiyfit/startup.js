let scroltimer = null;

const arrayParalaxObject = [header, sticker]

arrayParalaxObject.forEach(paralaxObject => {

        paralaxObject.onmousemove = function(event){
            
        let bcgPosX = event.x
        let bcgPosY = event.y

        let shiftPercentX = +(bcgPosX * 100 / paralaxObject.getBoundingClientRect().width) 
        //let shiftPercentY = +(bcgPosY * 100 / paralaxObject.getBoundingClientRect().height)
        let shiftPercentY = +(bcgPosY * 100 / window.innerHeight)

        paralaxObject.style.backgroundPosition = `${shiftPercentX}% ${shiftPercentY}%` 

        clearTimeout(scroltimer)    
    }
    
});


window.onwheel = function(event) {

    const PERCENT_OF_MOVE_BCG_IMG = 5
    const PERCENT_OF_MOVE_BCG_IMG_ON_FRAME = 0.1

    arrayParalaxObject.forEach(paralaxObject => {

        const imgHeight = paralaxObject.getBoundingClientRect().height

        if ( paralaxObject.posY + 2 * imgHeight > window.scrollY && paralaxObject.posY - imgHeight < window.scrollY ){
            const startPositionY = parseFloat(getComputedStyle(paralaxObject).backgroundPositionY)
            const endPositionY = startPositionY + PERCENT_OF_MOVE_BCG_IMG * event.deltaY / 100
            scrolling(paralaxObject, endPositionY , PERCENT_OF_MOVE_BCG_IMG_ON_FRAME * event.deltaY / 100)
        }

    })
}


let scrolling = function (objectScroling, endPosition, speed){
    
scroltimer = setTimeout(() => {
        
        let prePosition = parseFloat(getComputedStyle(objectScroling).backgroundPositionY)

        let newPosition = prePosition + speed

        if (newPosition < 100 && newPosition > 0) {
            objectScroling.style.backgroundPositionY = `${newPosition}%`

            let isEndScroling = speed < 0 ? (newPosition > endPosition) :  (newPosition < endPosition)

            if (isEndScroling) scrolling(objectScroling, endPosition, speed)
        }

    } , 30)


}  
let animClasses = ["anim-right","anim-left","anim-bottom","anim-rotate","anim-zoom"]

function animremove(scrolledBlock){
    let animatedElements = scrolledBlock.querySelectorAll(".anim")

    animatedElements.forEach(animatedElement => {

        animClasses.forEach(animclassName => {

            animatedElement.classList.remove(animclassName)

        });

    })
}

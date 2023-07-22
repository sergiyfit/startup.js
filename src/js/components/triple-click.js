const allCards = document.querySelectorAll(".card")
const allCardHeaders = document.querySelectorAll(".card-header")

allCards.forEach(element => {
    element.addEventListener('click', function (event) {
        if (event.detail === 3) {
            allCardHeaders.forEach(element => {
                element.style.color = "red"
                element.style.fontWeight = "bold"
                element.innerHTML = "Hack This Site"
            });
        }
    })
})
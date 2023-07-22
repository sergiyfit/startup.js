let btnReadMoreAll = document.querySelectorAll(".blog-post-reference")

const fullText = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam ipsa illo expedita ratione officiis laborum quos libero doloremque. Tenetur nihil id nam neque eum. Hic omnis officiis natus aliquid at, voluptates unde facere iste quisquam laboriosam consectetur illum provident vel expedita officia repellat nobis animi sunt, aperiam qui aut, voluptate adipisci ipsa optio. Laboriosam veniam beatae ipsa, accusantium quibusdam amet accusamus nam perferendis earum, cupiditate non nobis nesciunt itaque. "

const indexLastSpace = 410 + (fullText.substring(410 , 430).includes(' ') || 0)

btnReadMoreAll.forEach(btnReadMore => {
    
    btnReadMore.onclick = (e) => {
        
        e.preventDefault()
        
        let readMoreText = btnReadMore.parentElement.querySelector(".blog-post-text")

        if (btnReadMore.textContent.trim().toUpperCase() == "READ MORE") {

            btnReadMore.textContent = "HIDE TEXT"
            readMoreText.textContent = fullText

        } else {

            btnReadMore.textContent = "READ MORE"
            readMoreText.textContent = fullText.substring(0 , indexLastSpace) 

        }

    }
});
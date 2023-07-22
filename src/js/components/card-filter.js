let shopMenu = document.querySelectorAll(".shop-menu-item")

let cardsItem = document.querySelectorAll(".shop-card-item")

let uploadShopFilterName = localStorage.getItem('shop')

shopMenu.forEach(menuElement => {    
    const menuItemName = menuElement.textContent.trim().toLowerCase()
    if (uploadShopFilterName == menuItemName) menuElement.classList.add("border_underline")

    menuElement.onclick = (e) =>{
        e.preventDefault()
        localStorage.setItem('shop', menuItemName);

        let shopUnderline = document.querySelectorAll(".shop-menu-item")
       
        shopUnderline.forEach(element => { element.classList.remove("border_underline") });
        menuElement.classList.add("border_underline")

        shopFilter(menuItemName)
    }
});


function shopFilter(menuItemName){
        cardsItem.forEach( cardElement => {
        const cardItemName = cardElement.textContent.trim().toLowerCase()
        let isVisibleCard = (menuItemName == "all" || cardItemName == menuItemName)
        cardElement.parentElement.parentElement.style.display = isVisibleCard ? "flex" : "none"
    });
}


if ( uploadShopFilterName ) shopFilter(uploadShopFilterName)


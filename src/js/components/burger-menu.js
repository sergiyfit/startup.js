
    menuList = document.querySelector(".menu")
    burger = document.querySelector(".menu-burger")
    headerPanel = document.querySelector(".header-panel")
     
    burger.onclick = () => {
        menuList.classList.toggle("show")        
        headerPanel.classList.toggle("painting")        
        burger.classList.toggle("menu-burger-active")
    }

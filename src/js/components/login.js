const gestStartBtn = document.querySelector("#getstart")
const loginForm = document.querySelector(".loginarea")
const loginButton = document.querySelector(".loginarea-button")

const loginField = document.querySelector("#norobot-on")

gestStartBtn.onclick = () => {
    loginForm.classList.add("show")
}

loginButton.onclick = () => {
    if (loginField.firstElementChild){
        
        if (loginField.firstElementChild.classList.contains("loginarea-norobot-switch")){
            const loginHeader = document.querySelector(".loginarea-header")
            loginHeader.innerHTML = "is logined"
        }
    
        loginForm.classList.remove("show")
        
    }
}

const closeButton = document.querySelector(".close-btn")
closeButton.onclick = () => {
    loginForm.classList.remove("show")
}
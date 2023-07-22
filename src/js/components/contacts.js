function sendAjax (method, requestURL, params = null) {
	return new Promise ((resolve, reject) => {
		const xhr = new XMLHttpRequest()
		xhr.open(method, requestURL)
		xhr.responseType = "multipart/form-data"
        xhr.onerror = () => {
            reject(xhr.reject)
        }
		xhr.onload = () => {
			resolve(xhr.response)
        }
        xhr.send(params)
    })
}




// function sendToServer(e) {
//         window.onload = function () {
//         let form = document.querySelector(".contact-form")
//         form.onsubmit = function(e) {
//             e.preventDefault()
//             let data = new FormData(),
//                 inputs = document.querySelectorAll(".contact-form-input")

//             inputs.forEach(input => {
//                 data.append(input.name, input.value)
//             })
//             sendAjax("POST", "http://localhost/tgbot/send.php", data)
//                 .then(() => {
//                     let successBlock = document.querySelector(".form-success")
//                     successBlock.classList.remove("form-success-hide")
//                     setTimeout(() => {
//                         successBlock.classList.add("form-success-hide")
//                     }, 3000)
//                     form.reset()
//                 })
//         }
//     }
// }
const btnSend = document.querySelector(".contact-form-button")

btnSend.onclick = (e) => {
    e.preventDefault()

    const checkWindow = document.createElement("div")
    checkWindow.classList.add("loginarea")
    const checkWindowForm = document.createElement("form")
    checkWindowForm.classList.add("loginarea-form")
    checkWindow.classList.add("show")
    const checkWindowButton = document.createElement("button")
    checkWindowButton.classList.add("contact-form-button")
    checkWindowButton.innerText = "CONFIRM"

    checkWindowButton.onclick = (e) => {
    
        e.preventDefault()
    
        const url = "http://localhost:80/tgbot/send.php" 
        let xhr = new XMLHttpRequest()  
        xhr.open("post", url, true)
        // xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
        xhr.responseType = "multipart/form-data"
        xhr.onreadystatechange = function(){
            if (xhr.readyState !== 4) return
            
            if (xhr.status !== 200) {
                console.log("Ajax Error")
            }
            else {
                console.log(xhr.response);
            }        
        }
    
            let data = new FormData(),
                inputs = document.querySelectorAll("input")
    
            inputs.forEach(input => {
                data.append(input.name, input.value)
            })
            let textarea = document.querySelector("textarea")
            data.append("message", textarea.value)

        xhr.send(data)
    }

    checkWindowForm.style.fontSize = "14px"
    
    checkWindowForm.style.position = "relative"
    checkWindowForm.style.display = "block"
    
    checkWindow.appendChild(checkWindowForm)
    const closeContactButton = document.createElement("div")
    closeContactButton.classList.add("close-btn")   

    const closeContactButtonIcon = document.createElement("div")
    closeContactButtonIcon.classList.add("close-btn-in")    
    closeContactButton.appendChild(closeContactButtonIcon)

    closeContactButton.onclick = () => {
        checkWindowForm.parentElement.remove(checkWindowForm)
    }
    
    let inputs = document.querySelectorAll(".contact-form-input")
    let formText = ""
    
    inputs.forEach(input => {
        localStorage.setItem(input.name , input.value)
        formText += "<strong>" + input.name + ": <strong>" + input.value + "<br>"
    })
    
    checkWindowForm.innerHTML = formText + "<hr>"
    
    checkWindowForm.appendChild(closeContactButton)   
    checkWindowForm.appendChild(checkWindowButton)

    
    contact.appendChild(checkWindow)

}


let inputs = document.querySelectorAll(".contact-form-input")
inputs.forEach(input => {
    const storageValue = localStorage.getItem(input.name)
    if(storageValue) input.value = storageValue
})
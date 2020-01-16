// let myHeading = document.querySelector('h1')
// myHeading.textContent = "hello world!"

let myImg = document.querySelector('img')

myImg.onclick = function() {
    let mySrc = myImg.getAttribute('src')
    if (mySrc === 'firefox-icon.jpg'){
        myImg.setAttribute('src','firefox2.jpg')
    }else{
        myImg.setAttribute('src','firefox-icon.jpg')
    }
}
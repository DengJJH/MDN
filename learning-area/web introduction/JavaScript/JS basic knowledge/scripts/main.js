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

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字')
    if(!myName || myName === null){
        setUserName()
    }else {
        localStorage.setItem('name',myName)
        myHeading.textContent = 'Mozilla 酷毙了,' + myName
    }

}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }

  myButton.onclick = function() {
      setUserName
  }
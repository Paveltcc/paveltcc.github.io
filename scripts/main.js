var myImage = document.querySelector('img');

myImage.onclick = function () {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src', 'images/firefox2.png');
  } else {
    myImage.setAttribute('src', 'images/firefox-icon.png');
  }
}

var myButton = document.querySelectorAll('button');
console.log(myButton);
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('PLease enter you name');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}



for (var i = 0; i < myButton.length; i++) {
  myButton[i].addEventListener('click', setUserName);
}
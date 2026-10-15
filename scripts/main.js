var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/polosat.jpg") {
    myImage.setAttribute("src", "images/green.jpg");
  } else {
    myImage.setAttribute("src", "images/polosat.jpg");
  }
};
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
  var myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Кабачки cbkmyj приветствуют Вас,  " + myName;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Кабачки приветствуют Вас, " + storedName;
};
myButton.onclick = function () {
  setUserName();
};